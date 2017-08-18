import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import { string, func, bool, number } from 'prop-types';
import Logo from '@components/Logo';
import styled from 'styled-components';
import OrSeparator from '@components/OrSeparator';

const Wrapper = styled(Paper)`
  width: 100%;
  max-width: 600px;
  margin: auto;
  padding: 20px;
  margin: 20px;
  text-align: center;
  z-index: 2;
`;
const OnBoardingText = styled.h3`
  font-weight: 200;
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
  loading,
  error,
  errorCode,
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
      Envie Gemidões do Zap para seus amigos como sendo de outro número e acompanhe a ligação em tempo real! <br />
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
      style={{ marginBottom: 10, height: 60, width: '100%' }}
      disabled={loading}
    />
    <OrSeparator />
    <a href="https://play.google.com/store/apps/details?id=com.rafaelribeirocorreia.gemidaodozap&amp;hl=pt&amp;pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" target="_blank" style={{ width: '100%' }}>
      <img alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" className="google-play" style={{ height: 80 }} />
    </a>
  </Wrapper>
);

LoginForm.propTypes = {
  loading: bool.isRequired,
  error: bool.isRequired,
  errorCode: number,
  onFacebookAccessTokenObtained: func.isRequired,
};
LoginForm.defaultProps = {
  errorCode: null,
};
export default LoginForm;
