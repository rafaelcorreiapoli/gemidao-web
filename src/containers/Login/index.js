import { graphql, gql } from 'react-apollo';
import { withStateHandlers, compose } from 'recompose';
import { connect } from 'react-redux';

import LoginForm from '../../components/LoginForm';
import { withRouter } from 'react-router';


const mapDispatchToProps = dispatch => ({
  onFacebookAccessTokenObtained(token) {
    console.log(token);
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
