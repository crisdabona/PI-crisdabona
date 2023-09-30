import React from 'react'
import SearchBar from '../searchBar/SearchBar'
import { Link, useNavigate } from 'react-router-dom'
import './nav.css'

const Nav = ({onSearch, isAuthenticated, handleLogout}) => {
  const navigate = useNavigate()
  
  const handleLogoutClick = () => {
    handleLogout()
    navigate('/')
  }

  return (
    <div className='body-nav'>
      <nav>
          <div className='containerNav'>
            <Link to={'./about'}>
              <button>About</button>
            </Link>

            <Link to={'./home'}>
              <button>Home</button>
            </Link>
            <Link to={'./favorites'}>
              <button>Favorites</button>
            </Link>

            {isAuthenticated && (
            <button onClick={handleLogoutClick}>Log out</button>
            )}
            
          </div>

          
          <SearchBar onSearch={onSearch}/>

      </nav>

    </div>

  )
}

export default Nav
