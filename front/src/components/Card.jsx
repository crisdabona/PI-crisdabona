import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../redux/actions";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'

const Card = ({ id, name, image, onClose, gender }) => {
  const [isFav, setIsFav] = useState(false)
  const dispatch = useDispatch()
  const {pathname} = useLocation()
  const myFavorites = useSelector((state) => state.myFavorites)

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true)
      dispatch(addFav({ name, image, onClose, id, gender }))
    }
  }

  useEffect(() => {
    myFavorites?.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true)
      }
    });
  }, [myFavorites])

  return (
    <div>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      {
        pathname !== '/favorites'
        ? <button onClick={() => onClose(id)}>X</button>
        : ''
      }
      
      <Link to={`/detail/${id}`}>
        <h3>{name}</h3>
      </Link>
      <p>{gender}</p>
      <img src={image} alt={name} />
    </div>
  );
};

export default Card
