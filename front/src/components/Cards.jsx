import Card from './Card';

export default function Cards({data}){
   return (
      <div>
         {data.map((el) => (
            <Card
               key={el.id}
               name={el.name}
               species={el.species}
               gender={el.gender}
               origin={el.origin.name}
               image={el.image}
               onClose={() => window.alert('Emulamos que se cierra la card')}
            />
         ))}
      </div>
   )
}
