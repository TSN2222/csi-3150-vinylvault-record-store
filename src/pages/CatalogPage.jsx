import { useState } from 'react';
import AlbumCard from '../components/AlbumCard';
import '../styles.css';

function CatalogPage({ albums }) {
  const genres = ['All', 'Jazz', 'Electronic', 'Rock', 'Classical'];
  const [selectedGenre, setSelectedGenre] = useState('All');

  const validAlbums = albums || [];

  const filteredAlbums =
    selectedGenre === 'All'
      ? validAlbums
      : validAlbums.filter((album) => album.genre === selectedGenre);

  return (
    <>
      <header>
        <h1>VinylVault Indie Records</h1>
        <p>
          Discover timeless classics and fresh sounds across jazz, rock,
          electronic, and classical. Find your next favorite album and make room
          for something special in your collection.
        </p>
      </header>

      <div>
        {genres.map((genre) => {
          return (
            <button
              key={genre}
              onClick={() => {
                setSelectedGenre(genre);
              }}
            >
              {genre}
            </button>
          );
        })}
      </div>

      <div>
        {filteredAlbums.map((album) => {
          return <AlbumCard key={album.id} album={album}></AlbumCard>;
        })}
      </div>
    </>
  );
}

export default CatalogPage;
