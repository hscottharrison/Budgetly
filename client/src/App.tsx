import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import { ChakraProvider } from '@chakra-ui/react';

import theme from './theme';
import Budget from './features/Budget';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Router>
          <Switch>
            <Route path='/' component={Budget} />
          </Switch>
        </Router>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
