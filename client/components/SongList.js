import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
  renderSongs() {
    const { songs } = this.props.data;
    if (songs != null) {
      return songs.map(song => {
        return <li>{song.title}</li>;
      });
    }
    return <div>Loading</div>;
  }
  render() {
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
