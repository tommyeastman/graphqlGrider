import gql from 'graphql-tag';

export default gql`
  query showSong($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        id
        content
        likes
      }
    }
  }
`;
