import Card from './Card';

export default function Cards({data, onClose}){
   return (
      <div>
         {data.map((el) => (
            <Card
               key={el.id}
               name={el.name}
               species={el.species}
               status={el.status}
               gender={el.gender}
               origin={el.origin.name}
               image={el.image}
               onClose={() => onClose(el.id)}
            />
         ))}
      </div>
   )
}
