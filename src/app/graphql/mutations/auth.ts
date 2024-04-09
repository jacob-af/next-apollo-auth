import { AuthPayload } from "@/__generated__/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      accessToken
      refreshToken
      user {
        id
        userName
        email
      }
    }
  }
`;

export const SIGNUP: TypedDocumentNode<AuthPayload> = gql`
  mutation Signup($createUserInput: CreateUserInput!) {
    signup(createUserInput: $createUserInput) {
      accessToken
      refreshToken
      user {
        email
        id
        userName
      }
    }
  }
`;

export const NEW_TOKENS: TypedDocumentNode<AuthPayload> = gql`
  mutation GetTokens($refreshToken: String!) {
    getNewTokens(refreshToken: $refreshToken) {
      accessToken
      refreshToken
      user {
        email
        id
        userName
      }
    }
  }
`;

export const LOG_OUT = gql`
  mutation LogOut($userId: ID!) {
    logout(userId: $userId) {
      loggedOut
    }
  }
`;
