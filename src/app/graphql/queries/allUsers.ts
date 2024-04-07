import { User, Ingredient } from "@/__generated__/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const ALL_USERS: TypedDocumentNode<User[]> = gql`
  query AllUsers {
    allUsers {
      id
      userName
    }
  }
`;

export const ALL_INGREDIENTS: TypedDocumentNode<{
  ingredients: Ingredient[];
}> = gql`
  query Ingredients {
    ingredients {
      description
      id
      name
    }
  }
`;
