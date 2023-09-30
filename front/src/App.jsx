import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
import { useState , useEffect} from 'react';
import axios  from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Error from './components/error/Error'
import Form from './components/form/Form';
import Favorites from './components/favorites/Favorites';

function App() {
  const [characters, setCharacters] = useState([])

  const navigate = useNavigate()
  const [access, setAccess] = useState(false)
  let EMAIL = 'cdvillabonabr@gmail.com'
  let PASSWORD = 'cris123'

  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const handleLogout = () => {
    setIsAuthenticated(false);
  }

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
       setAccess(true)
       navigate('/home')
    }
 }

 useEffect(() => {
  !access && navigate('/');
}, [access])

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

  const {pathname} = useLocation()
  
  return (
    <div>
      { pathname !== '/' && <Nav onSearch={onSearch} isAuthenticated={isAuthenticated} handleLogout={handleLogout}/>}
      <Routes>
        <Route path="/home" element={<Cards data={characters} onClose={onClose} />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path="*" element={<Error />} />
        <Route path='/' element={<Form login={login}/>}/>
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  )
}

export default App
