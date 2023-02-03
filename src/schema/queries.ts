import { gql } from '@apollo/client'

export const PETS = gql`
  query Pets {
    pets {
      id
      name
      species
      agencyId
    }
  }
`;
