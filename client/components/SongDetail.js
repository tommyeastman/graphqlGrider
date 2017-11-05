import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import AddLyric from './AddLyric';
import showSongQuery from '../queries/showSong';

class SongDetail extends Component {
  renderLyrics() {
    const { lyrics } = this.props.data.song;
    return lyrics.map(lyric => {
      return (
        <li key={lyric.id} className="collection-item">
          {lyric.content}
          <i className="material-icons md-48">thumb_up</i>
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

/**
 * graphql() wraps the component so it intercepts the props before they go to the component
 * can set query options using these props
 */
export default graphql(showSongQuery, {
  options: props => {
    return { variables: { id: props.params.id } };
  }
})(SongDetail);
