import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchSongsQuery from '../queries/fetchSongs';

/**
 * SongList component
 * Query the list of songs from the database and display them on the screen as a formatted list, along with a delete icon.
 * Allow user to delete song by clicking delete icons.
 */
class SongList extends Component {
  /**
   * Run deleteSong mutation based on id.
   * @param {id} song id passed from renderSongs() 
   */
  onSongDelete(id) {
    this.props
      .mutate({
        variables: { id }
      })
      .then(() => this.props.data.refetch());
  }

  /**
   * graphql() on the export statement executes the fetch Songs query and returns the result (an array of songs) as props.
   * use .map() to place these song titles into a list.
   * all React lists need a key, so use the song id for this.
   */
  renderSongs() {
    return this.props.data.songs.map(({ id, title }) => {
      return (
        <li key={id} className="collection-item">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {title}
            {/*make sure to always write onClick handlers with fat arrow functions to bind them*/}
            <i className="material-icons" onClick={() => this.onSongDelete(id)}>
              delete
            </i>
          </div>
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

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(graphql(fetchSongsQuery)(SongList));
