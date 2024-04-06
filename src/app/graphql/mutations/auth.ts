import { AuthPayload, NewTokenResponse } from "@/__generated__/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const LOGIN: TypedDocumentNode<AuthPayload> = gql`
  mutation Mutation($loginInput: LoginInput!) {
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

export const NEW_TOKENS: TypedDocumentNode<NewTokenResponse> = gql`
  mutation Mutation($userId: ID, $refreshToken: String) {
    getNewTokens(userId: $userId, refreshToken: $refreshToken) {
      accessToken
      refreshToken
    }
  }
`;
