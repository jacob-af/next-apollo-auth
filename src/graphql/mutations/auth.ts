import { gql, TypedDocumentNode } from "@apollo/client";

export const LOGIN: TypedDocumentNode<{
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    userName: string;
  };
}> = gql`
  mutation Mutation($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      accessToken
      refreshToken
      user {
        id
        userName
      }
    }
  }
`;

export const NEW_TOKENS: TypedDocumentNode<{
  userId: string;
  refreshToken: string;
  user: {
    authToken: string;
    refreshToken: string;
  };
}> = gql`
  mutation Mutation($userId: ID, $refreshToken: String) {
    getNewTokens(userId: $userId, refreshToken: $refreshToken) {
      accessToken
      refreshToken
    }
  }
`;
