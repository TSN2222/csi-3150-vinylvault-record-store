import { useState } from 'react';
import { Link } from 'react-router-dom';

const CheckoutPage = ({ cart, onClearCart }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    shippingAddress: '',
    zipCode: '',
  });

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const taxes = subtotal * 0.06;
  const total = subtotal + taxes;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    onClearCart();
  };

  if (isSubmitted) {
    return (
      <div className='checkout-page checkout-message'>
        <h1>Order placed successfully</h1>
        <p>
          Thank you, {formData.fullName}! We hope you enjoy your new records.
        </p>
        <Link className='btn checkout-button' to='/'>
          Back to catalog
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className='checkout-page checkout-message'>
        <h1>Your cart is empty</h1>
        <p>Find your next favorite record in the catalog.</p>
        <Link className='btn checkout-button' to='/'>
          Browse records
        </Link>
      </div>
    );
  }

  return (
    <div className='checkout-page'>
      <Link className='checkout-back-link' to='/'>
        &larr; Back to catalog
      </Link>
      <h1>Checkout</h1>
      <p className='checkout-intro'>Enter your shipping details and review your order.</p>

      <div className='checkout-grid'>
        <form className='checkout-card checkout-form' onSubmit={handleSubmit}>
          <h2>Shipping Information</h2>
          <div className='checkout-field'>
            <label htmlFor='fullName'>Full Name *</label>
            <input
              type='text'
              name='fullName'
              id='fullName'
              autoComplete='name'
              required
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div className='checkout-field'>
            <label htmlFor='email'>Email *</label>
            <input
              type='email'
              name='email'
              id='email'
              autoComplete='email'
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className='checkout-field'>
            <label htmlFor='shippingAddress'>Shipping Address *</label>
            <input
              type='text'
              name='shippingAddress'
              id='shippingAddress'
              autoComplete='street-address'
              required
              value={formData.shippingAddress}
              onChange={handleChange}
            />
          </div>
          <div className='checkout-field'>
            <label htmlFor='zipCode'>ZIP Code *</label>
            <input
              type='text'
              name='zipCode'
              id='zipCode'
              autoComplete='postal-code'
              inputMode='numeric'
              required
              pattern='[0-9]{5}'
              value={formData.zipCode}
              onChange={handleChange}
            />
          </div>
          <button type='submit' className='btn checkout-button'>
            Complete Order (${total.toFixed(2)})
          </button>
        </form>

        <aside className='checkout-card checkout-summary'>
          <h2>Order Summary</h2>
          <ul className='checkout-summary-list'>
            {cart.map((item) => (
              <li key={item.id} className='checkout-summary-row'>
                <span>
                  {item.title} &times; {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className='checkout-summary-row'>
            <span>Subtotal</span> <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className='checkout-summary-row'>
            <span>Estimated Tax (6%)</span> <span>${taxes.toFixed(2)}</span>
          </div>
          <div className='checkout-summary-row checkout-total'>
            <span>Total</span> <span>${total.toFixed(2)}</span>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CheckoutPage;
