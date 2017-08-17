import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import { string, func, bool, number } from 'prop-types';
import FacebookLogin from 'react-facebook-login';
import Logo from '@components/Logo';
import styled from 'styled-components';

const Wrapper = styled(Paper)`
  width: 100%;
  max-width: 600px;
  margin: auto;
  padding: 20px;
  margin: 20px;
  text-align: center;
`;
const OnBoardingText = styled.h3`
  margin-top: 20px;
  margin-bottom: 20px;
`;
const styles = {
  buttonWrapper: {
    marginTop: 40,
    textAlign: 'right',
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
  <Wrapper zDepth={5}>
    {loading &&
      <CircularProgress />
    }
    {error &&
      <div>{errorCode}</div>
    }
    <Logo />
    <OnBoardingText>
      Envie Gemidões do Zap para seus amigos como se fosse outra pessoa! <br />
      Acompanhe o status da ligação em tempo real <br />
      Compartilhe com os amigos para ganhar créditos
    </OnBoardingText>
    <RaisedButton
      labelStyle={{ color: '#FFF' }}
      label="Entrar com Facebook"
      backgroundColor="#4C69BA"
      onTouchTap={() => {
        FB.login((response) => {
          if (response.authResponse) {
            onFacebookAccessTokenObtained(response.authResponse.accessToken);
          }
        });
      }}
      style={{ marginBottom: 10 }}
      disabled={loading}
    />
  </Wrapper>
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
