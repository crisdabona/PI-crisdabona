import './App.css'
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState } from 'react';
import axios  from 'axios';

function App() {
  const [characters, setCharacters] = useState([])

  const onSearch = (id) => {
    const alreadyAdded = characters.some(character => character.id === parseInt(id))
    
    if (alreadyAdded) {
      alert('¡Este personaje ya ha sido agregado!');
      return;
    }
    
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    })
    .catch(() => {
      alert('¡No hay personajes con este ID!')
    })
  }
  
  const onClose = (id) => {
    const updatedCharacters = characters.filter((character) => character.id !== parseInt(id))
    setCharacters(updatedCharacters)
  }
  
  return (
    <>
      <Nav onSearch={onSearch}/>
      <Cards 
        data={characters}
        onClose={onClose}/>
    </>
  )
}

export default App
