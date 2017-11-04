import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class AddSong extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
  }

  onSubmit(event) {
    //prevent form from automatically submitting itself to the backend server.
    //HTML forms do this by default
    event.preventDefault();
    console.log(this.state.title);
  }

  render() {
    // if (this.props.data.loading) {
    //   return <div>Loading...</div>;
    // }
    return (
      <div>
        <h3>Create a new song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title:</label>
          <input
            value={this.state.title}
            onChange={event => this.setState({ title: event.target.value })}
          />
        </form>
      </div>
    );
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
