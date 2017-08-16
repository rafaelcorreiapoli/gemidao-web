import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import { string, func, bool, number } from 'prop-types';
import FacebookLogin from 'react-facebook-login';

const styles = {
  container: {
    padding: 40,
  },
  buttonWrapper: {
    marginTop: 40,
    textAlign: 'right',
  },
  onboardingText: {
    color: '#FFF',
  },
  facebookButton: {
    color: 'blue',
  },
};
const LoginForm = ({
  email,
  password,
  loginWithEmail,
  loading,
  error,
  errorCode,
  setInputValue,
  onFacebookAccessTokenObtained,
}) => (
  <Paper style={styles.container}>
    {loading &&
      <CircularProgress />
    }
    {error &&
      <div>{errorCode}</div>
    }
    <span style={styles.onboardingText}>O gemidão blá blá blá</span>
    <FacebookLogin
      appId="123254084969737"
      autoLoad
      fields="name,email,picture"
      callback={(response) => {
        onFacebookAccessTokenObtained(response.accessToken);
      }}
      cssClass="loginBtn loginBtn--facebook"
      size={'small'}
      style={styles.facebookButton}
    />
    {/* <TextField
      name="email"
      value={email}
      fullWidth
      onChange={e => setInputValue('email', e.target.value)}
    />
    <TextField
      name="password"
      value={password}
      type="password"
      fullWidth
      onChange={e => setInputValue('password', e.target.value)}
    />
    <div style={styles.buttonWrapper}>
      <RaisedButton
        label="Login"
        onTouchTap={() => {
          loginWithEmail(email, password);
        }}
        disabled={loading}
        secondary
      />
    </div> */}

  </Paper>
);

LoginForm.propTypes = {
  email: string.isRequired,
  password: string.isRequired,
  loginWithEmail: func.isRequired,
  loading: bool.isRequired,
  error: bool.isRequired,
  errorCode: number,
  setInputValue: func.isRequired,
};
LoginForm.defaultProps = {
  errorCode: null,
};
export default LoginForm;
