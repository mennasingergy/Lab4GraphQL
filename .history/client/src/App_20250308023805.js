
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import DisplayData from './DisplayData';

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql" //--> where graphql server is running 
  });
  return (
    <ApolloProvider client={client}>
      <div
        className="App">
        <h1>List of Users</h1>
        <DisplayData></DisplayData>
      </div>
    </ApolloProvider>
  );
}

export default App;
