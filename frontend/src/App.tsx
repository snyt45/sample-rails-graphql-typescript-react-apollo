import './App.css'
import client from './graphql/client'
import { ApolloProvider } from '@apollo/client'
import TestComponent from './test_components/TestComponent'

function App() {
  return (
    <ApolloProvider client={client}>
      <TestComponent/>
    </ApolloProvider>
  )
}

export default App
