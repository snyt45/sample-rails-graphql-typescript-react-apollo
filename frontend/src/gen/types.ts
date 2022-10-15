export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** An example field added by the generator */
  testField: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** An example field added by the generator */
  testField: Scalars['String'];
  /** TODO一覧 */
  todos?: Maybe<Array<Todo>>;
};

export enum Status {
  /** 完了 */
  Completed = 'completed',
  /** 未着手 */
  Waiting = 'waiting'
}

export type Todo = {
  __typename?: 'Todo';
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  status: Status;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['ISO8601DateTime'];
};
