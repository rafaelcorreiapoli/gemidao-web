import { graphql, gql } from 'react-apollo';
import UsersList from '../../components/UsersList';

const UsersQuery = gql`
query allUsers {
  viewer {
    allUsers {
      edges {
        node {
          id
          name
          email
          picture
        }
      }
    }
  }
}
`;


export default graphql(UsersQuery, {
  props: ({ data: { loading, viewer } }) => ({
    loading,
    users: loading ? [] : viewer.allUsers.edges.map(edge => ({
      ...edge.node,
    })),
  }),
})(UsersList);
