import { useState } from "react";

export default function SearchBar({onSearch}) {
   const randomId = Math.floor(Math.random() * 826) + 1
   const [id, setId] = useState('')

   const handleChange = (event) => {
       setId(event.target.value)
   }
   return (
      <div>
         <input 
            onChange={handleChange} 
            type='search' 
            value={id}
         />
         
         <button onClick={() => onSearch(id)}>Agregar</button>
         <button onClick={() => onSearch(randomId)}>Random Character</button>
      </div>
   );
}
