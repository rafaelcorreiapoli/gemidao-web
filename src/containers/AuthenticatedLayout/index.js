/*  global localStorage */
import { withStateHandlers, compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { isAuthenticated, getUserName, getUserPicture, isLoading, getUserGemidoesLeft } from '@modules/auth/selectors';
import AuthenticatedLayout from '@components/AuthenticatedLayout';
import * as authActions from '@modules/auth/actions';

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state),
  userName: getUserName(state),
  userPicture: getUserPicture(state),
  loading: isLoading(state),
  gemidoesLeft: getUserGemidoesLeft(state),
});

const mapDispatchToProps = (dispatch, { history }) => ({
  logout() {
    history.push({
      pathname: '/login',
    });
    localStorage.removeItem('token');
    dispatch(authActions.logoutSocket());
  },
});
// export default AuthenticatedLayout;
export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers(() => ({
    drawerOpen: false,
  }), {
    toggleDrawer: ({ drawerOpen }) => () => ({
      drawerOpen: !drawerOpen,
    }),
    setDrawerOpen: () => drawerOpen => ({
      drawerOpen,
    }),
  }),
)(AuthenticatedLayout);
