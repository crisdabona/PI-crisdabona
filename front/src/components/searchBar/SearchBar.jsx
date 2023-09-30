import { useState } from "react";
import './searchBar.css'

export default function SearchBar({onSearch}) {
   const randomId = Math.floor(Math.random() * 826) + 1
   const [id, setId] = useState('')

   const handleChange = (event) => {
       setId(event.target.value)
   }
   return (
      <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px'}}>
         <input style={{
                padding: '8px 5px',
                outline: 'none',
                border: 'none',
                borderRadius: '8px',
                boxShadow: 'none',
                color: '#23242a',
                fontSize: '1em',
                letterSpacing: '0.05em',
                transition: '0.5s',
                lineHeight: 'normal',
         }}
            onChange={handleChange} 
            type='search' 
            value={id}
         />
         
         <button style={{margin: '0 5px'}} onClick={() => onSearch(id)}>Agregar</button>
         <button style={{margin: '0 5px'}} onClick={() => onSearch(randomId)}>Random</button>
      </div>
   );
}
