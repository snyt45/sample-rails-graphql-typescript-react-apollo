import * as Types from '../../gen/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type TestFieldQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type TestFieldQuery = { __typename?: 'Query', testField: string };


export const TestFieldDocument = gql`
    query testField {
  testField
}
    `;

/**
 * __useTestFieldQuery__
 *
 * To run a query within a React component, call `useTestFieldQuery` and pass it any options that fit your needs.
 * When your component renders, `useTestFieldQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTestFieldQuery({
 *   variables: {
 *   },
 * });
 */
export function useTestFieldQuery(baseOptions?: Apollo.QueryHookOptions<TestFieldQuery, TestFieldQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TestFieldQuery, TestFieldQueryVariables>(TestFieldDocument, options);
      }
export function useTestFieldLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TestFieldQuery, TestFieldQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TestFieldQuery, TestFieldQueryVariables>(TestFieldDocument, options);
        }
export type TestFieldQueryHookResult = ReturnType<typeof useTestFieldQuery>;
export type TestFieldLazyQueryHookResult = ReturnType<typeof useTestFieldLazyQuery>;
export type TestFieldQueryResult = Apollo.QueryResult<TestFieldQuery, TestFieldQueryVariables>;