/*  global localStorage */
import { withStateHandlers, compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { isAuthenticated, getUserName, getUserPicture, isLoading, getUserGemidoesLeft } from '@modules/auth/selectors';
import AuthenticatedLayout from '@components/AuthenticatedLayout';

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state),
  userName: getUserName(state),
  userPicture: getUserPicture(state),
  loading: isLoading(state),
  gemidoesLeft: getUserGemidoesLeft(state),
});

// export default AuthenticatedLayout;
export default compose(
  connect(mapStateToProps),
  withRouter,
  withStateHandlers(() => ({
    drawerOpen: false,
  }), {
    logout: (_, { history }) => () => {
      history.push({
        pathname: '/login',
      });
      localStorage.removeItem('token');
    },
    toggleDrawer: ({ drawerOpen }) => () => ({
      drawerOpen: !drawerOpen,
    }),
    setDrawerOpen: () => drawerOpen => ({
      drawerOpen,
    }),
  }),
)(AuthenticatedLayout);
