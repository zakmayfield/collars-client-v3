import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  concat,
} from '@apollo/client';

import { API_URL } from '@/constants/urls'

const httpLink = new HttpLink({
  uri: `${API_URL}/graphql`,
  credentials: 'same-origin',
});

const authMiddleware = new ApolloLink((operation, forward) => {
  let token = process.env.TEST_TOKEN || '';

  console.log(`::: token from server creation ::: ${token}`);

  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: token,
    },
  }));

  return forward(operation);
});

export const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
  name: 'collars-client-v2',
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});