import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import ApolloClient from 'apollo-client';
//Apollo Provider is the glue layer between apollo and react and is a react component
import { ApolloProvider } from 'react-apollo';

import './style/style.css';
import App from './components/App';
import SongList from './components/SongList';
import AddSong from './components/AddSong';

//just use default setup for apolloclient, it knows where to look
const client = new ApolloClient({});

/**
 * Root component is a navigator wrapped with Apollo Provider.
 * Set App component as index route
 * Set AddSong component as alt route
 */
const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
          <Route path="songs/new" component={AddSong} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
