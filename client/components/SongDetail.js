import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import AddLyric from './AddLyric';
import showSongQuery from '../queries/showSong';

class SongDetail extends Component {
  likeLyric(id) {
    this.props.mutate({
      variables: { id }
    });
  }

  renderLyrics() {
    const { lyrics } = this.props.data.song;
    return lyrics.map(lyric => {
      return (
        <li key={lyric.id} className="collection-item">
          {lyric.content}
          <i className="material-icons md-48" onClick={() => this.likeLyric(lyric.id)}>
            thumb_up
          </i>
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
        <Link to="/">Back</Link>
        <h3>{this.props.data.song.title}</h3>
        <ul className="collection">{this.renderLyrics()}</ul>
        <AddLyric songId={this.props.params.id} />
      </div>
    );
  }
}

const mutation = gql`
  mutation likeLyric($id: ID!) {
    likeLyric(id: $id) {
      id
      content
      likes
    }
  }
`;

/**
 * graphql() wraps the component so it intercepts the props before they go to the component
 * can set query options using these props
 */
export default graphql(mutation)(
  graphql(showSongQuery, {
    options: props => {
      return { variables: { id: props.params.id } };
    }
  })(SongDetail)
);
