import './App.css'
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import characters from './data.js';

function App() {


  return (
    <>
      <SearchBar onSearch={(charactersID) => window.alert(charactersID)}/>
      <Cards data={characters}/>
    </>
  )
}

export default App
