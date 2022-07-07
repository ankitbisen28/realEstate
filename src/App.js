import './App.css';
import { Filter } from './components/Filter/Filter';
import { Items } from './components/Items/Items';
import { Navbar } from './components/Navbar/Navbar';
import { Search } from './components/Search/Search';

function App() {
  return (
    <>
    <Navbar />
    <Search />
    <Filter />
    <Items />
    </>
  );
}

export default App;
