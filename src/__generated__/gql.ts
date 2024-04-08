/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation Login($loginInput: LoginInput!) {\n    login(loginInput: $loginInput) {\n      accessToken\n      refreshToken\n      user {\n        id\n        userName\n        email\n      }\n    }\n  }\n": types.LoginDocument,
    "\n  mutation Signup($createUserInput: CreateUserInput!) {\n    signup(createUserInput: $createUserInput) {\n      accessToken\n      refreshToken\n      user {\n        email\n        id\n        userName\n      }\n    }\n  }\n": types.SignupDocument,
    "\n  mutation GetTokens($refreshToken: String!) {\n    getNewTokens(refreshToken: $refreshToken) {\n      accessToken\n      refreshToken\n      user {\n        email\n        id\n        userName\n      }\n    }\n  }\n": types.GetTokensDocument,
    "\n  mutation LogOut($userId: ID!) {\n    logout(userId: $userId) {\n      loggedOut\n    }\n  }\n": types.LogOutDocument,
    "\n  query AllUsers {\n    allUsers {\n      id\n      userName\n    }\n  }\n": types.AllUsersDocument,
    "\n  query Ingredients {\n    ingredients {\n      description\n      id\n      name\n    }\n  }\n": types.IngredientsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Login($loginInput: LoginInput!) {\n    login(loginInput: $loginInput) {\n      accessToken\n      refreshToken\n      user {\n        id\n        userName\n        email\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation Login($loginInput: LoginInput!) {\n    login(loginInput: $loginInput) {\n      accessToken\n      refreshToken\n      user {\n        id\n        userName\n        email\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Signup($createUserInput: CreateUserInput!) {\n    signup(createUserInput: $createUserInput) {\n      accessToken\n      refreshToken\n      user {\n        email\n        id\n        userName\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation Signup($createUserInput: CreateUserInput!) {\n    signup(createUserInput: $createUserInput) {\n      accessToken\n      refreshToken\n      user {\n        email\n        id\n        userName\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation GetTokens($refreshToken: String!) {\n    getNewTokens(refreshToken: $refreshToken) {\n      accessToken\n      refreshToken\n      user {\n        email\n        id\n        userName\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation GetTokens($refreshToken: String!) {\n    getNewTokens(refreshToken: $refreshToken) {\n      accessToken\n      refreshToken\n      user {\n        email\n        id\n        userName\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation LogOut($userId: ID!) {\n    logout(userId: $userId) {\n      loggedOut\n    }\n  }\n"): (typeof documents)["\n  mutation LogOut($userId: ID!) {\n    logout(userId: $userId) {\n      loggedOut\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AllUsers {\n    allUsers {\n      id\n      userName\n    }\n  }\n"): (typeof documents)["\n  query AllUsers {\n    allUsers {\n      id\n      userName\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Ingredients {\n    ingredients {\n      description\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query Ingredients {\n    ingredients {\n      description\n      id\n      name\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;