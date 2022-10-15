import './App.css'
import client from './graphql/client'
import { ApolloProvider } from '@apollo/client'
import SampleAppRoutes from './router'

function App() {
  return (
    <ApolloProvider client={client}>
      <SampleAppRoutes />
    </ApolloProvider>
  )
}

export default App
