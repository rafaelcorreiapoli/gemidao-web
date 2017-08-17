/*  global localStorage */
import { graphql, gql } from 'react-apollo';
import { withStateHandlers, compose } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { loginWithFacebook } from '@modules/auth/actions';
import LoginForm from '../../components/LoginForm';
import * as selectors from '@modules/auth/selectors';

const mapStateToProps = state => ({
  loading: selectors.isLoading(state),
});
const mapDispatchToProps = (dispatch, { history }) => ({
  onFacebookAccessTokenObtained(token) {
    dispatch(loginWithFacebook(token))
    .then((response) => {
      localStorage.setItem('token', response.token);
      history.push({
        pathname: '/',
      });
    });
  },
});

export default compose(
  withRouter,
  withStateHandlers(
    () => ({
      loading: false,
      email: '',
      password: '',
      error: false,
    }),
    {
      setInputValue: () => (name, value) => ({
        [name]: value,
      }),
      setLoading: () => loading => ({
        loading,
      }),
      setError: () => errorCode => ({
        error: true,
        errorCode,
      }),
      clearErrors: () => () => ({
        error: false,
        errorCode: null,
      }),
    },
  ),
  connect(mapStateToProps, mapDispatchToProps),
)(LoginForm);
