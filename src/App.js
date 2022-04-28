import React from 'react';
import './App.css';
import { client } from './ApolloClient/client';
import { ApolloProvider } from '@apollo/client';
import ContentPage from './ContentPage';

function App() {
  return (
    <ApolloProvider client={client}>
        <div className="App">
          <ContentPage />
        </div>
      </ApolloProvider>
  );
}

export default App;
