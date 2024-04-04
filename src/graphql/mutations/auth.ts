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
