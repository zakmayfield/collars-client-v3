import { Pet } from '@/gql/graphql';
import { useQuery } from '@apollo/client';
import { PETS } from '@/schema'

export default function Pets() {
  const { data, loading, error } = useQuery(PETS);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const pets: Pet[] = data.pets;

  return (
    <div>
      {pets.map((pet: Pet) => (
        <div key={pet.id}>
          <p>Name: {pet.name}</p>
          <p>Species: {pet.species}</p>
        </div>
      ))}
      PET RENDER
    </div>
  );
}
