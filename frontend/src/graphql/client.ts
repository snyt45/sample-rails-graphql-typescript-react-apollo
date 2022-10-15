import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
const uri = 'http://localhost:3000/graphql'

export default new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri,
  }),
});
