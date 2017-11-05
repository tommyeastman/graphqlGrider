import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import AddLyric from './AddLyric';

class SongDetail extends Component {
  renderLyrics() {
    const { lyrics } = this.props.data.song;
    return lyrics.map(lyric => {
      return (
        <li key={lyric.id} className="collection-item">
          {lyric.content}
        </li>
      );
    });
  }

  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }
    //console.log(this.props.data);
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{this.props.data.song.title}</h3>
        {this.renderLyrics()}
        <AddLyric songId={this.props.params.id} />
      </div>
    );
  }
}

const showSongQuery = gql`
  query showSong($id: ID!) {
    song(id: $id) {
      title
      lyrics {
        id
        content
      }
    }
  }
`;

/**
 * graphql() wraps the component so it intercepts the props before they go to the component
 * can set query options using these props
 */
export default graphql(showSongQuery, {
  options: props => {
    return { variables: { id: props.params.id } };
  }
})(SongDetail);
