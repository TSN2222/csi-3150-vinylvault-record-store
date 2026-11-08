# VinylVault Indie Record Store

VinylVault is a React single-page storefront for browsing vinyl records, viewing album details, managing a cart, and completing a simulated checkout. This README is the Assignment 3A architectural blueprint; the component tree describes the planned Assignment 3B implementation, not features already completed in the starter project.

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

The current scaffold was checked with Node.js `26.12.1` and npm `11.20.0`. Its dependencies include React 19, React DOM 19, React Router DOM 7, and Vite 8; npm installs the project dependencies, so no global React or Vite installation is needed.

### Install and run locally

1. On this repository's GitHub page, select **Code > SSH** and copy the clone URL. Replace `YOUR_REPOSITORY_URL` below with that URL; it is a placeholder, not a literal address.

   ```bash
   git clone YOUR_REPOSITORY_URL app-name
   cd app-name
   ```

2. Install the dependency versions recorded in `package-lock.json`:

   ```bash
   npm install
   ```

3. Start the Vite development server:

   ```bash
   npm run dev
   ```

4. Keep that terminal running and open the **Local** URL printed by Vite in a browser.

5. Verify that the browser connects and the tab title is **VinylVault Indie Records**.

6. Stop the server with **Ctrl+C** in its terminal when finished.

### Other available scripts

| Command           | Purpose                                                                             |
| ----------------- | ----------------------------------------------------------------------------------- |
| `npm run build`   | Create the production bundle in `dist/`.                                            |
| `npm run preview` | Serve a previously generated production build locally; run the build command first. |
| `npm run lint`    | Check JavaScript and JSX against the repository's ESLint configuration.             |

### Project directory overview

The repository root contains this `README.md`, the HTML entry point, package manifests, and Vite and ESLint configuration files. Inside `src/`, `main.jsx` mounts React, `App.jsx` will coordinate routing and shared state, and `styles.css` will provide application styling. Reusable UI components belong in `src/components/`, routed views in `src/pages/`, the supplied album catalog in `src/data/albums.js`, and project multimedia in `src/assets/`.

## 2. React Component Hierarchy & State Flow Architecture

WIP
