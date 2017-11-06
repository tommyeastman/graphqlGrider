import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

/**
 * AddLyric component
 * Form to add a lyric to a song.
 * Type the lyric and press enter.
 */
class AddLyric extends Component {
  constructor(props) {
    super(props);
    this.state = { lyric: '' };
  }

  /**
   * Prevent form from automatically submitting itself to backend server (HTML forms do this by default)
   * Run addLyricToSong mutation (.mutate() prop) with the song lyric.
   * @param {event} HTML form submit event
   */
  onSubmit(event) {
    //prevent default form behavior
    event.preventDefault();
    this.props.mutate({
      variables: { songId: this.props.songId, content: this.state.lyric }
    });
    this.setState({ lyric: '' });
  }

  /**
   * HTML form which sets the lyric state to the form input value as typed
   */
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Lyric:</label>
          <input
            value={this.state.lyric}
            onChange={event => this.setState({ lyric: event.target.value })}
          />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation addLyricToSong($songId: ID!, $content: String) {
    addLyricToSong(songId: $songId, content: $content) {
      id
      lyrics {
        id
        content
      }
    }
  }
`;

export default graphql(mutation)(AddLyric);
