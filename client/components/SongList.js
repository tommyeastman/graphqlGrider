import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

class SongList extends Component {
  renderSongs() {
    const { songs } = this.props.data;
    return songs.map(song => {
      return (
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      );
    });
  }
  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <ul className="collection">{this.renderSongs()}</ul>
        <Link to="songs/new" className="btn-floating btn-large red right">
          {/*automatically reads the text and replaces with the icon*/}
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

//define query, nothing executed
const query = gql`
  {
    songs {
      title
      id
    }
  }
`;

export default graphql(query)(SongList);
