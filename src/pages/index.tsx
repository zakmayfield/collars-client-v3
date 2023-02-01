import Head from 'next/head';
import { gql } from '@apollo/client';
import { client } from '@/lib/apollo-config';
import {  Pet } from '@/gql/graphql'

type HomeProps = {
  pets: Pet[]
}

export default function Home({ pets }: HomeProps) {
  console.log('pets', pets);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>Home ::: /</h1>
        <div>
          {pets.map((pet) => (
            <div key={pet.id}>
              <p>Name: {pet.name}</p>
              <p>Species: {pet.species}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({

    query: gql`
      query Pets {
        pets {
          id
          name
          species
          agencyId
        }
      }
    `,
  });

  return {
    props: data
  };
}
