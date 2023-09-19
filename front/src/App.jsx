import './App.css'
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState } from 'react';
import axios  from 'axios';

function App() {
  const [characters, setCharacters] = useState([])

  const onClose = (id) => {
    const updatedCharacters = characters.filter((character) => character.id !== parseInt(id))

    setCharacters(updatedCharacters)

  }


  const onSearchBar = (id) => {
    const alreadyAdded = characters.some(character => character.id === parseInt(id))
    
    if (alreadyAdded) {
      alert('¡Este personaje ya ha sido agregado!');
      return;
    }
  
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         alert('¡No hay personajes con este ID!');
      }
   });
 }

  return (
    <>
      <Nav onSearch={onSearchBar}/>
      <Cards 
        data={characters}
        onClose={onClose}/>
    </>
  )
}

export default App
