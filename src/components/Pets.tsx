import { Pet } from '@/gql/graphql';
import { useQuery, gql } from '@apollo/client';

const PETS = gql`
  query Pets {
    pets {
      id
      name
      species
      agencyId
    }
  }
`;

export default function Pets() {
  const { data, loading, error } = useQuery(PETS);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const pets = data.pets;

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
