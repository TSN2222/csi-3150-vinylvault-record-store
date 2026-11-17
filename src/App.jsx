import CatalogPage from './pages/CatalogPage';
import AlbumDetailsPage from './pages/AlbumDetailsPage';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import { ALBUMS } from './data/albums';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  function handleAddToCart(album, quantity = 1) {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === album.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === album.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevCart, { ...album, quantity }];
    });
    setIsCartOpen(true);
  }

  function handleUpdateQuantity(albumId, delta) {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === albumId) {
            const newQuantity = item.quantity + delta;
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  }

  function handleRemoveFromCart(albumId) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== albumId));
  }

  function handleClearCart() {
    setCart([]);
  }

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Navbar cartCount={totalCartCount} onOpenCart={() => setIsCartOpen(true)}></Navbar>
      <main>
        <Routes>
          <Route
            path='/'
            element={<CatalogPage albums={ALBUMS} onAddToCart={handleAddToCart}></CatalogPage>}
          ></Route>
          <Route
            path='/album/:albumId'
            element={
              <AlbumDetailsPage albums={ALBUMS} onAddToCart={handleAddToCart}></AlbumDetailsPage>
            }
          ></Route>
        </Routes>
      </main>
      <CartDrawer
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveFromCart}
      ></CartDrawer>
    </>
  );
}

export default App;
