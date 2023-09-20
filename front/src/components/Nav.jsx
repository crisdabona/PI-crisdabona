import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'

const Nav = ({onSearch}) => {
  return (
    <nav>
        <Link to={'./about'}>
          <button>About</button>
        </Link>

        <Link to={'./'}>
          <button>Home</button>
        </Link>
        
        <SearchBar onSearch={onSearch}/>

    </nav>

  )
}

export default Nav
