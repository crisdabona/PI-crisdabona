import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { orderCards, filterCards } from '../redux/actions';
import { useState } from 'react';


const Favorites = () => {
  const myFavorites = useSelector(state => state.myFavorites)
  const dispatch = useDispatch()
  const [aux, setAux] = useState(false)

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux)
  }

  const handleFilter = (event) => {
      dispatch(filterCards(event.target.value))
  }

  return (
    <div>
      <h1>My Favorite Characters</h1>
      <label htmlFor="orderSelect">Order By:</label>
      <select id="orderSelect" onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>

      <label htmlFor="filterSelect">Filter By Gender:</label>
      <select id="filterSelect" onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>


      {myFavorites.map(favorite => {
        return <Card
                key={favorite.id}
                id={favorite.id}
                name={favorite.name}
                image={favorite.image}
          />
      })}
    </div>
  );
};


export default Favorites