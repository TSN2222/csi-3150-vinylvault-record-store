# VinylVault Indie Record Store

VinylVault is a React single-page storefront for browsing eight vinyl records, filtering by genre, viewing album details, managing a shared cart, and completing a simulated checkout. Built for Assignments 3A and 3B, the app uses React functional components, props, `useState`, and React Router. This README documents the implemented application and its component and state architecture.

## 1. Project Setup & Execution Instructions

### Prerequisites

- **Node.js 22.12.0 or newer**, with **npm** installed. The assignment specifies Node.js 21+, but the installed Vite version requires a newer supported runtime; 22.12.0 or newer satisfies both requirements.
- **Git** to clone the repository, or download and extract its ZIP from GitHub.
- A modern web browser and a terminal.

Check that the tools are available:

```bash
node --version
npm --version
git --version
```

### Install and run locally

1. Clone the repository and enter its directory:

   ```bash
   git clone https://github.com/TSN2222/csi-3150-vinylvault-record-store.git
   cd csi-3150-vinylvault-record-store
   ```

2. Install the dependency versions recorded in `package-lock.json`:

   ```bash
   npm ci
   ```

3. Start the Vite development server:

   ```bash
   npm run dev
   ```

4. Keep that terminal running and open the **Local** URL printed by Vite in a browser.

### Other available scripts

| Command           | Purpose                                                                             |
| ----------------- | ----------------------------------------------------------------------------------- |
| `npm run build`   | Create the production bundle in `dist/`.                                            |
| `npm run preview` | Serve a previously generated production build locally; run the build command first. |
| `npm run lint`    | Check JavaScript and JSX against the repository's ESLint configuration.             |

### Project directory overview

The repository root contains this `README.md`, the HTML entry point, package manifests, and Vite and ESLint configuration files. Inside `src/`, `main.jsx` mounts React, `App.jsx` coordinates routing and shared cart state, and `styles.css` provides application styling. Reusable UI components live in `src/components/`, routed views in `src/pages/`, the album catalog in `src/data/albums.js`, and album covers and the logo in `src/assets/`.

### Application behavior

| Route or shared view       | Features                                                                                                                                                                                                |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`                        | Responsive album grid with All, Jazz, Electronic, Rock, and Classical filters; cover/title links to details; Add to Cart buttons.                                                                       |
| `/album/:albumId`          | Cover, title, artist, genre, price, stock, description, catalog number, pressing weight, speed, label, tracklist, and quantity selection. Unknown album IDs show a not-found message and a return link. |
| Shared navigation and cart | Sticky header, synchronized total-quantity counts, a drawer above the header, quantity increase/decrease, removal, line totals, subtotal, and navigation to checkout.                                   |
| `/checkout`                | Itemized order, subtotal, estimated 6% tax, total, controlled shipping and card fields, validation, confirmation, and cart reset. An empty cart shows a link back to the catalog.                       |

This is a frontend demonstration: checkout does not charge a card, send an order, or contact a backend. Use fictional details when trying it. Cart and form state live in memory and reset on a page reload; catalog stock is displayed but cart quantities are not enforced against inventory. Card checks validate format only, not whether a card is real or its expiration date is in the future.

For production hosting, configure the host to serve `index.html` for app routes such as `/album/alb-01` and `/checkout`, so direct links work with `BrowserRouter`.

### Verification

Run `npm run build` and `npm run lint` from the repository root. Both passed during the November 18, 2026 audit; the repository also has more than four meaningful commits across multiple development days.

## 2. React Component Hierarchy & State Flow Architecture

### Data types used in the component tree

These names describe the JavaScript objects used by the app; they are documentation types, not TypeScript declarations in the source.

```text
Album = {
  id: string,
  title: string,
  artist: string,
  genre: string,
  price: number,
  stock: number,
  image: string,
  description: string,
  specs: {
    catalogNumber: string,
    weight: string,
    speed: string,
    label: string
  },
  tracklist: string[]
}

CartItem = Album plus { quantity: number }

CheckoutFormData = {
  fullName: string,
  email: string,
  shippingAddress: string,
  city: string,
  zipCode: string,
  cardNumber: string,
  cardExpiry: string,
  cardCvv: string
}

AddToCart = (album: Album, quantity?: number) => void
```

### Implemented component tree

The tree lists every application component, its file, owned state, incoming props, and events. React/React Router wrappers are marked as library components; layout elements such as the filter bar, order summary, and tracklist are markup inside their owning components.

```text
<StrictMode>
  <BrowserRouter>
    <App> -> src/App.jsx
      Props: none.
      State: cart: CartItem[] = [] (shared line items);
             isCartOpen: boolean = false (drawer visibility).
      Derived: totalCartCount: number = sum of item quantities.
      Handlers: handleAddToCart: AddToCart (default quantity 1);
                handleUpdateQuantity(albumId: string, delta: number): void;
                handleRemoveFromCart(albumId: string): void;
                handleClearCart(): void.
      |
      +-- <Navbar> -> src/components/Navbar.jsx (all routes)
      |     State: none.
      |     Props: cartCount: number; onOpenCart: () => void.
      |     Events: cart button calls onOpenCart; logo/Catalog Link navigates to /.
      |     Renders: sticky header, logo, Catalog link, cart button and badge.
      |
      +-- <main> / <Routes> -> src/App.jsx (React Router library component)
      |     State: no application useState; props: children: Route elements.
      |     Each <Route> receives path: string and element: ReactElement;
      |     no application callbacks or local state on these wrappers.
      |     |
      |     +-- <CatalogPage> -> src/pages/CatalogPage.jsx [route: /]
      |     |     State: selectedGenre: string = 'All' (active filter).
      |     |     Props: albums: Album[]; onAddToCart: AddToCart.
      |     |     Events: genre button calls setSelectedGenre(genre).
      |     |     Renders: introduction, filter buttons, filtered album grid.
      |     |     |
      |     |     +-- <AlbumCard> -> src/components/AlbumCard.jsx
      |     |           Repeated once per filtered album; key: album.id.
      |     |           State: none.
      |     |           Props: album: Album; onAddToCart: AddToCart.
      |     |           Events: Add to Cart calls onAddToCart(album);
      |     |                   cover/title Link navigates to /album/:albumId.
      |     |           Renders: cover, genre, title, artist, price, stock-aware button.
      |     |
      |     +-- <AlbumDetailsPage> -> src/pages/AlbumDetailsPage.jsx
      |     |     Route: /album/:albumId; useParams() supplies albumId.
      |     |     State: quantity: number = 1 (selected purchase quantity).
      |     |     Props: albums: Album[]; onAddToCart: AddToCart.
      |     |     Events: quantity input calls setQuantity; Add to Cart calls
      |     |             onAddToCart(album, quantity); breadcrumb Link returns to /.
      |     |     Renders: album metadata, specifications, tracklist, purchase controls;
      |     |              not-found content if no album matches the URL parameter.
      |     |
      |     +-- <CheckoutPage> -> src/pages/CheckoutPage.jsx [route: /checkout]
      |           State: formData: CheckoutFormData (all fields initially '');
      |                  isSubmitted: boolean = false (confirmation visibility).
      |           Props: cart: CartItem[]; onClearCart: () => void.
      |           Events: each input calls handleChange(event), updating formData;
      |                   valid form submission calls handleSubmit(event), which
      |                   prevents reload, sets isSubmitted, and calls onClearCart().
      |           Renders: shipping/card form and itemized summary with 6% tax;
      |                    confirmation after submission, or empty-cart message.
      |           Navigation: return-to-catalog Links navigate to /.
      |
      +-- <CartDrawer> -> src/components/CartDrawer.jsx (all routes)
            State: none; returns null when isOpen is false.
            Props: cart: CartItem[]; cartCount: number; isOpen: boolean;
                   onClose: () => void;
                   onUpdateQuantity: (albumId: string, delta: number) => void;
                   onRemove: (albumId: string) => void.
            Events: overlay/close button calls onClose(); +/- calls
                    onUpdateQuantity(id, -1 or 1); remove calls onRemove(id).
                    handleProceedToCheckout() calls onClose(), then
                    useNavigate()'s navigate('/checkout').
            Renders: header/count, empty message or line items, subtotal,
                     and a checkout button when the cart contains items.
```

### State ownership and data flow

`App` imports `ALBUMS` from `src/data/albums.js` and passes it to the catalog and detail views. The catalog owns its genre selection, the detail view owns its quantity input, and checkout owns its form and confirmation state. These local states reset when their routed component unmounts.

The shared cart and drawer visibility live in `App`, above all routed pages. Children receive data through props and request updates through callbacks; they do not directly mutate the cart. Adding an existing album uses `.map()` and object spread to increase its quantity, adding a new album uses array spread, and removal uses `.filter()`; decrementing an item to zero also removes it.

`App` derives `totalCartCount` from quantities and passes that same value to both `Navbar` and `CartDrawer`. The drawer derives its line totals and subtotal from `cart`, while checkout derives its subtotal, 6% tax, and total from the same data. Keeping counts and totals derived avoids separate state values drifting apart as the user changes routes or quantities.

Checkout binds every field's `value` to `formData` and every `onChange` to `handleChange`. Browser constraint validation enforces required inputs, email format, a five-digit ZIP, a 13-to-19-digit card number without spaces, an `MM/YY` expiration with a valid month, and a three- or four-digit CVV before the submit handler runs. On successful submission, `handleSubmit` prevents the default page reload, shows confirmation, and calls `App`'s `handleClearCart`; the shared counts then update automatically.

All cross-page navigation uses `Link` or `useNavigate`. `App` remains mounted as the selected route changes, preserving the shared cart until checkout clears it or the browser reloads.
