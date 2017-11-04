import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
  renderSongs() {
    const { songs } = this.props.data;
    return songs.map(song => {
      return <li>{song.title}</li>;
    });
  }
  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }
    return <div>{this.renderSongs()}</div>;
  }
}

//define query, nothing executed
const query = gql`
  {
    songs {
      title
    }
  }
`;

export default graphql(query)(SongList);
