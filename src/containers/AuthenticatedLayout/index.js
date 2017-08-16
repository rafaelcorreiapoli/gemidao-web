/*  global localStorage */
import { withStateHandlers, compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AuthenticatedLayout from '../../components/AuthenticatedLayout';

const mapStateToProps = state => ({
  isAuthenticated: true,
  userName: 'Rafael Ribeiro Correia',
  userPicture: 'https://placehold.it/300x300',
});

// export default AuthenticatedLayout;
export default compose(
  connect(mapStateToProps),
  withRouter,
  withStateHandlers(() => ({
    drawerOpen: false,
  }), {
    logout: (_, { client, history }) => () => {
      history.push({
        pathname: '/login',
      });
      localStorage.removeItem('token');
      client.resetStore();
    },
    toggleDrawer: ({ drawerOpen }) => () => ({
      drawerOpen: !drawerOpen,
    }),
    setDrawerOpen: () => drawerOpen => ({
      drawerOpen,
    }),
  }),
)(AuthenticatedLayout);
