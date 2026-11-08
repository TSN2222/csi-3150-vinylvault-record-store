import CatalogPage from './pages/CatalogPage';
import { ALBUMS } from './data/albums';
import './styles.css';

function App() {
  return <CatalogPage albums={ALBUMS}></CatalogPage>;
}

export default App;
