import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchSongsQuery from '../queries/fetchSongs';

/**
 * SongList component
 * Query the list of songs from the database and display them on the screen as a formatted list.
 */
class SongList extends Component {
  /**
   * graphql() on the export statement executes the fetch Songs query and returns the result (an array of songs) as props.
   * use .map() to place these song titles into a list.
   * all React lists need a key, so use the song id for this.
   */
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
  /**
   * the props returned from graphql() includes a loading property. If true, display loading
   * otherwise, display the list of songs along with a button which links to the AddSong page.
   */
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

export default graphql(fetchSongsQuery)(SongList);
