import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Detail = () => {
    const [character, setCharacter] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           }
        })
        .catch(() => {
            alert('No hay personajes con ese ID')
        })

        return setCharacter({});
     }, [id]);

  return (
    <div>
      <h2>{character?.name}</h2>
      <h3>{character?.status}</h3>
      <h3>{character?.species}</h3>
      <h3>{character?.gender}</h3>
      <h3>{character?.origin?.name}</h3>
      <img src={character?.image} alt={character?.name} />
    </div>
  )
}

export default Detail