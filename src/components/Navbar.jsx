import { Link } from 'react-router-dom';
import logoIcon from '../assets/logo-icon.svg';

function Navbar({ cartCount, onOpenCart }) {
  return (
    <header className='site-header'>
      <Link className='site-logo' to='/'>
        <img className='logo-icon' src={logoIcon} alt='Vinyl Record Site Icon'></img>
        VinylVault
      </Link>
      <nav className='nav-items'>
        <Link className='nav-link' to='/'>
          Catalog
        </Link>
        <button
          type='button'
          className='cart-btn'
          onClick={onOpenCart}
          aria-label={`Shipping cart with ${cartCount} items`}
        >
          🛒 Cart
          {cartCount > 0 && <span className='badge-pill'>{cartCount}</span>}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
