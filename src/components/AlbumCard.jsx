import { Link } from 'react-router-dom';

function AlbumCard({ album, onAddToCart }) {
  if (!album) return null;

  return (
    <article className='album-card'>
      <Link className='album-image-link' to={`/album/${album.id}`}>
        <img
          className='album-image'
          src={album.image}
          alt={album.title}
          loading='lazy'
        />
      </Link>
      <div className='album-body'>
        <span className='album-genre'>{album.genre}</span>
        <h3 className='album-title'>
          <Link to={`/album/${album.id}`}>{album.title}</Link>
        </h3>
        <h4 className='album-artist'>By: {album.artist}</h4>
        <p className='album-price'>
          $
          {typeof album.price === 'number'
            ? album.price.toFixed(2)
            : 'Contact For Price'}
        </p>
        <button
          className='btn'
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
