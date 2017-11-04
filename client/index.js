import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
//Apollo Provider is the glue layer between apollo and react and is a react component
import { ApolloProvider } from 'react-apollo';
import SongList from './components/SongList';

//just use default setup for apolloclient, it knows where to look
const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <SongList />
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
