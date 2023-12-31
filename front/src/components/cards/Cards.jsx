import Card from '../card/Card';

export default function Cards({data, onClose}){
   return (
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
         {data.map((el) => (
            <Card
               key={el.id}
               id={el.id}
               name={el.name}
               species={el.species}
               status={el.status}
               gender={el.gender}
               origin={el.origin.name}
               image={el.image}
               onClose={onClose}
            />
         ))}
      </div>
   )
}
