import { gql } from '@apollo/client';

export const LOGIN_AGENCY = gql`
  mutation LoginAgency($input: LoginAgency!) {
    loginAgency(input: $input) {
      id
      name
      email
      token
    }
  }
`;
