import { useState, useContext, createContext } from 'react';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  gql,
  NormalizedCacheObject,
  concat
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

type AuthContext = {
  signIn: ({ email, password }: SignInProps) => Promise<void>;
  createApolloClient: () => ApolloClient<NormalizedCacheObject>;
};

interface SignInProps {
  email: string;
  password: string;
}

const authContext = createContext<AuthContext>(null!);

function useProvideAuth() {
  const [authToken, setAuthToken] = useState('');

  function getAuthHeaders() {
    let token: string = authToken;

    return {
      authorization: token ? `Bearer ${token}` : '',
    };
  }

  function createApolloClient() {
    const httpLink = new HttpLink({
      uri: `http://localhost:4000/graphql`,
      credentials: 'same-origin',
      headers: getAuthHeaders(),
    });

    // const authMiddleware = new ApolloLink((operation, forward) => {
    //   let token = process.env.TEST_TOKEN || '';

    //   console.log(`::: token from server creation ::: ${token}`);

    //   operation.setContext(({ headers = {} }) => ({
    //     headers: {
    //       ...headers,
    //       authorization: token,
    //     },
    //   }));

    //   return forward(operation);
    // });

    const errorLink = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, path }) =>
          console.log(
            `[GraphQL error] ::: ${message} ::: ${path}`
          )
        );

      if (networkError) console.log(`[Network error]: ${networkError}`);
    });

    return new ApolloClient({
      link: concat(errorLink, httpLink),
      cache: new InMemoryCache(),
      name: 'collars-client-v3',
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'cache-and-network',
        },
      },
    });
  }

  async function signIn({ email, password }: SignInProps) {
    const client = createApolloClient();

    const LOGIN_AGENCY = gql`
      mutation LoginAgency($input: LoginAgency!) {
        loginAgency(input: $input) {
          id
          name
          email
          token
        }
      }
    `;

    const results = await client.mutate({
      mutation: LOGIN_AGENCY,
      variables: { input: { email, password } },
    });

    if (results?.data?.loginAgency) {
      let token: string = results.data.loginAgency.token;

      setAuthToken(token);
    }
  }

  return {
    createApolloClient,
    signIn,
  };
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const auth = useProvideAuth();

  return (
    <authContext.Provider value={auth}>
      <ApolloProvider client={auth.createApolloClient()}>
        {children}
      </ApolloProvider>
    </authContext.Provider>
  );
}

export const useAuth = () => useContext(authContext);
