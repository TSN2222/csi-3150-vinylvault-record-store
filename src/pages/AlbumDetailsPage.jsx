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
    <div>
      <img src={album.image} alt={album.title} loading='lazy' />

      <header>
        <h1>{album.title}</h1>
        <p>By: {album.artist}</p>
      </header>

      <dl>
        <dt>Genre</dt>
        <dd>{album.genre}</dd>
        <dt>Price</dt>
        <dd>${album.price.toFixed(2)}</dd>
        <dt>Stock</dt>
        <dd>{album.stock > 0 ? `${album.stock}` : 'Out of Stock'}</dd>
      </dl>

      <section>
        <h2>Description</h2>
        <p>{album.description}</p>
      </section>

      <section>
        <h2>Specifications</h2>
        <dl>
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

      <section>
        <h2>Tracklist</h2>
        <ol>
          {album.tracklist.map((track, index) => (
            <li key={`${album.id}-${index}`}>{track}</li>
          ))}
        </ol>
      </section>

      <section>
        <div>
          <label htmlFor='details-qty'>Quantity: </label>
          <input
            type='number'
            id='details-qty'
            min='1'
            max={album.stock}
            value={quantity}
            onChange={(event) =>
              setQuantity(Math.max(1, parseInt(event.target.value, 10) || 1))
            }
          />
        </div>
        <button onClick={() => onAddToCart(album, quantity)}>
          Add {quantity} to cart
        </button>
      </section>
    </div>
  );
}

export default AlbumDetailsPage;
