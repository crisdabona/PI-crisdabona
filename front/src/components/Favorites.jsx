import Card from './Card';

const Favorites = ({ myFavorites }) => {

  return (
    <div>
      <h1>My Favorite Characters</h1>
      {myFavorites.map((character) => (
        <Card key={character.id} {...character} />
      ))}
    </div>
  );
};


export default Favorites