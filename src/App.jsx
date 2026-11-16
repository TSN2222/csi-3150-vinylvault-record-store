import Navbar from './components/Navbar';
import CatalogPage from './pages/CatalogPage';
import AlbumDetailsPage from './pages/AlbumDetailsPage';
import { ALBUMS } from './data/albums';
import { Routes, Route } from 'react-router-dom';
import './styles.css';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<CatalogPage albums={ALBUMS}></CatalogPage>}></Route>
        <Route
          path='/album/:albumId'
          element={<AlbumDetailsPage albums={ALBUMS}></AlbumDetailsPage>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
