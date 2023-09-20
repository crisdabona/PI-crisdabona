import './App.css'
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState } from 'react';
import axios  from 'axios';
import {Routes, Route} from 'react-router-dom'
import About from './components/About';
import Detail from './components/Detail';
import Error from './components/Error'

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
      <Routes>
        <Route path="/" element={<Cards data={characters} onClose={onClose} />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default App
