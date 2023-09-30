import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import './card.css'


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
    <div className="cardContainer" style={{
      border: 'solid 4px #13F607',
      borderRadius: '8px',
      margin: '20px 10px',
    }}>

      <div style={{textAlign: 'center',}}>
        {isFav ? (
          <button style={{margin: '0 10px'}} onClick={handleFavorite}>❤️</button>
        ) : (
          <button style={{margin: '0 10px'}} onClick={handleFavorite}>🤍</button>
        )}
        {
          pathname !== '/favorites'
          ? <button onClick={() => onClose(id)}>X</button>
          : ''
        }
      </div>
      
        <Link style={{textDecoration:' none'}} to={`/detail/${id}`}>
          <h3 style={{color: 'white', textAlign: 'center'}}>{name}</h3>
          {/*<p style={{color: 'white'}} >{gender}</p>*/}

          <img style={{borderRadius: '100%', margin: '0 10px'}} src={image} alt={name} />
        </Link>
    </div>
  );
};

export default Card
