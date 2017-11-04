import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import ApolloClient from 'apollo-client';
//Apollo Provider is the glue layer between apollo and react and is a react component
import { ApolloProvider } from 'react-apollo';

import App from './components/App';
import SongList from './components/SongList';
import AddSong from './components/AddSong';

//just use default setup for apolloclient, it knows where to look
const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          {/*<IndexRoute component={SongList} />*/}
          <IndexRoute component={AddSong} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
