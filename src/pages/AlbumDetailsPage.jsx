import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles.css';

function AlbumDetailsPage({ albums, onAddToCart }) {
  const { albumId } = useParams();
  const [quantity, setQuantity] = useState(1);

  const album = albums.find((album) => album.id === albumId);

  if (!album) {
    return (
      <>
        <h2>404 Album Not Found!</h2>
        <Link to='/'>Return Home</Link>
      </>
    );
  }

  return (
    <div className='album-details'>
      <nav className='album-breadcrumbs'>
        <Link className='album-breadcrumbs-link' to='/'>
          Catalog
        </Link>{' '}
        &gt; <span>{album.title}</span>
      </nav>

      <img className='album-details-image' src={album.image} alt={album.title} loading='lazy' />

      <header className='album-details-header'>
        <h1 className='album-details-title'>{album.title}</h1>
        <p className='album-details-artist'>By: {album.artist}</p>
      </header>

      <dl className='album-details-list album-details-summary'>
        <dt>Genre</dt>
        <dd>{album.genre}</dd>
        <dt>Price</dt>
        <dd>${album.price.toFixed(2)}</dd>
        <dt>Stock</dt>
        <dd>{album.stock > 0 ? `${album.stock}` : 'Out of Stock'}</dd>
      </dl>

      <section className='album-details-section album-details-description'>
        <h2 className='album-details-heading'>Description</h2>
        <p>{album.description}</p>
      </section>

      <div className='album-details-section album-details-extra'>
        <section className='album-details-specs'>
          <h2 className='album-details-heading'>Specifications</h2>
          <dl className='album-details-list'>
            <dt>Catalog Number</dt>
            <dd>{album.specs.catalogNumber}</dd>
            <dt>Weight</dt>
            <dd>{album.specs.weight}</dd>
            <dt>Speed</dt>
            <dd>{album.specs.speed}</dd>
            <dt>Label</dt>
            <dd>{album.specs.label}</dd>
          </dl>
        </section>

        <section className='album-details-tracks'>
          <h2 className='album-details-heading'>Tracklist</h2>
          <ol className='album-details-tracklist'>
            {album.tracklist.map((track, index) => (
              <li key={`${album.id}-${index}`}>{track}</li>
            ))}
          </ol>
        </section>
      </div>

      <section className='album-details-section album-details-actions'>
        <div>
          <label htmlFor='details-qty'>Quantity: </label>
          <input
            type='number'
            id='details-qty'
            min='1'
            max={album.stock}
            value={quantity}
            onChange={(event) => setQuantity(Math.max(1, parseInt(event.target.value, 10) || 1))}
          />
        </div>
        <button className='album-details-button' onClick={() => onAddToCart(album, quantity)}>
          Add {quantity} to cart
        </button>
      </section>
    </div>
  );
}

export default AlbumDetailsPage;
