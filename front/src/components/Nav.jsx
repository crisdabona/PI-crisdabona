import React from 'react'
import SearchBar from './SearchBar'
import { Link, useNavigate } from 'react-router-dom'

const Nav = ({onSearch, isAuthenticated, handleLogout}) => {
  const navigate = useNavigate()
  
  const handleLogoutClick = () => {
    handleLogout()
    navigate('/')
  }

  return (
    <nav>
        <Link to={'./about'}>
          <button>About</button>
        </Link>

        <Link to={'./home'}>
          <button>Home</button>
        </Link>
        <Link to={'./favorites'}>
          <button>favorites</button>
        </Link>

        {isAuthenticated && (
        <button onClick={handleLogoutClick}>
          Log out
        </button>
      )}
        
        <SearchBar onSearch={onSearch}/>

    </nav>

  )
}

export default Nav
