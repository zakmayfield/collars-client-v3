import { gql } from '@apollo/client';

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

export const PETS_BY_AGENCY = gql`
  query PetsByAgency {
    petsByAgency {
      id
      name
      agencyId
    }
  }
`;
