import { Link } from 'react-router-dom';

function AlbumCard({ album, onAddToCart }) {
  if (!album) return null;

  return (
    <article>
      <Link to={`/`}>
        <img src={album.image} alt={album.title} loading='lazy' />
      </Link>
      <div>
        <span>{album.genre}</span>
        <h3>
          <Link to={`/`}>{album.title}</Link>
        </h3>
        <h4>{album.artist}</h4>
        <p>
          $
          {typeof album.price === 'number'
            ? album.price.toFixed(2)
            : 'Contact For Price'}
        </p>
        <button
          type='button'
          disabled={album.stock <= 0}
          onClick={() => onAddToCart(album)}
        >
          {album.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </article>
  );
}

export default AlbumCard;
