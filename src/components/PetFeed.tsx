import { PETS_BY_AGENCY } from '@/schema';
import { useQuery } from '@apollo/client';

function PetFeed() {
  const { data, loading, error } = useQuery(PETS_BY_AGENCY);

  if (error) {
    console.log('ERROR :::', error)
  }

  if (loading) {
    console.log('loading...')
  }

  if (data) {
    console.log('DATA :::', data.petsByAgency)
  }

  return (
    <>
        {data && data.petsByAgency && (
            <div>
                {data.petsByAgency.map((pet: any) => {
                    <p>{pet.name}</p>
                })}
            </div>
        )}
    </>
  );
}

export default PetFeed;
