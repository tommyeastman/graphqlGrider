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
import SongDetail from './components/SongDetail';

//take every piece of data that is fetched by Apollo Client from the backend.
//used to identify the data inside the Apollo Store/Client
const client = new ApolloClient({
  dataIdFromObject: o => o.id
});

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
          {/*Variables in React Router use :varname. SongDetail component now gets id as prop*/}
          <Route path="songs/:id" component={SongDetail} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
