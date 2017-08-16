import React from 'react';
import { arrayOf, shape, string, bool } from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import Divider from 'material-ui/Divider';

const UsersList = ({
  users,
  loading,
}) => {
  if (loading) {
    return (
      <CircularProgress />
    );
  }
  return (
    <ul>
      {users && users.map(user => (
        <li key={user.id} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
          <img alt={user.name} src={user.picture || 'https://placehold.it/100x100'} style={{ width: 100, height: 100, marginRight: 20 }} />
          <span>{user.name}</span>
          <span>{user.email}</span>
          <Divider />
        </li>
    ))}
    </ul>
  );
};
UsersList.propTypes = {
  loading: bool.isRequired,
  users: arrayOf(shape({
    id: string.isRequired,
    name: string,
    email: string,
    picture: string,
  })).isRequired,
};
export default UsersList;
