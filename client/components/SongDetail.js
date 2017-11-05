import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

class SongDetail extends Component {
  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }
    console.log(this.props.data);
    return (
      <div>
        <h3>{this.props.data.song.title}</h3>
      </div>
    );
  }
}

const showSongQuery = gql`
  query showSong($id: ID!) {
    song(id: $id) {
      title
      lyrics {
        content
      }
    }
  }
`;

export default graphql(showSongQuery, {
  options: props => {
    return { variables: { id: props.params.id } };
  }
})(SongDetail);
