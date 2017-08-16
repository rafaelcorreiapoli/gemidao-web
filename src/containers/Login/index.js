import { graphql, gql } from 'react-apollo';
import { withStateHandlers, compose } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { loginWithFacebook } from '@modules/auth/actions';
import LoginForm from '../../components/LoginForm';


const mapDispatchToProps = (dispatch, { history }) => ({
  onFacebookAccessTokenObtained(token) {
    dispatch(loginWithFacebook(token))
    .then(() => {
      console.log('aqui');
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
  connect(null, mapDispatchToProps),
)(LoginForm);
