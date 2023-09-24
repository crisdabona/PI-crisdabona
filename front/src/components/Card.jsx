import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../redux/actions";
import { useState, useEffect } from "react";

const Card = ({ id, name, image, onClose }) => {
  const [isFav, setIsFav] = useState(false)
  const dispatch = useDispatch()
  const myFavorites = useSelector((state) => state.myFavorites)

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true)
      dispatch(addFav({ id, name, image }))
    }
  }

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true)
      }
    });
  }, [myFavorites, id])

  return (
    <div>
      <button onClick={() => onClose(id)}>X</button>
      <Link to={`/detail/${id}`}>
        <h3>{name}</h3>
      </Link>
      <img src={image} alt={name} />
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
    </div>
  );
};

export default Card
