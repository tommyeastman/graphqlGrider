import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class AddSong extends Component {
  render() {
    // if (this.props.data.loading) {
    //   return <div>Loading...</div>;
    // }
    return <div>Create A Song</div>;
  }
}

const mutation = gql`
  mutation {
    addSong(title: "yoo") {
      id
    }
  }
`;

//export default graphql(mutation)(AddSong);
export default AddSong;
