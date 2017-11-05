import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

class SongDetail extends Component {
  getData(id) {
    this.props.query({ variables: { id } });
  }

  render() {
    // if (this.props.data.loading) {
    //   return <div>Loading...</div>;
    // }
    //this.getData(this.props.params.id);
    console.log(this.props.params.id);
    return (
      <div>
        <h3>Song Detail page</h3>
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

//export default graphql(showSongQuery)(SongDetail);
export default SongDetail;
