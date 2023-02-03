import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

export type AgencyLogin = {
  email: string;
  password: string;
};

export interface SignInParams {
  email: string;
  password: string;
}

export type AuthContext = {
  signIn: ({ email, password }: SignInParams) => Promise<void>;
  createApolloClient: () => ApolloClient<NormalizedCacheObject>;
};

export type AuthHeaders = {
    authorization: string
}