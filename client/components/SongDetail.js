import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

class SongDetail extends Component {
  render() {
    // if (this.props.data.loading) {
    //   return <div>Loading...</div>;
    // }
    return (
      <div>
        <h3>Song Detail page</h3>
      </div>
    );
  }
}

export default SongDetail;
