import React from 'react';
import { number, string, func, bool } from 'prop-types';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import GemidaoCounter from '@components/GemidaoCounter';
import Paper from 'material-ui/Paper';

const Wrapper = styled(Paper)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 600px;
  margin: auto;
`;


const GemidaoCounterWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`;

const MenuWrapper = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
`;

const Title = styled.div`
  font-weight: 900;
  font-size: 20px;
  margin-bottom: 10px;
  text-align: center;
  margin-bottom: 40px;
`;
const BodyText = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;
const Disclaimer = styled.div`
  text-align: center;
  font-size: 12px;
  margin-bottom: 20px;
  font-style: italic;
`;
const FormContainer = styled.div`
  height: 100%;
  margin-bottom: 40px;
`;
const Main = ({
  gemidoesLeft,
  userName,
  userPicture,
  senderNumber,
  receiverNumber,
  setInputValue,
  sendGemidao,
  loading,

}) => (
  <Wrapper zDepth={1}>

    <Title>
      Nunca foi tão fácil trollar seus amigos
    </Title>
    {/* <BodyText>
      O Gemidão do Zap fará uma ligação a partir do número escolhido para o número da vítima.
      Quando ela atender... <br />
      <i>AAAWN OOOWN NHAAA AWWWWN AAAAAH... </i>
    </BodyText> */}
    <FormContainer>
      <TextField
        name="senderNumber"
        floatingLabelText="Número que vai ligar"
        floatingLabelFixed
        value={senderNumber}
        fullWidth
        onChange={e => setInputValue('senderNumber', e.target.value)}
      />

      <TextField
        underlineStyle={{ color: 'red' }}
        name="receiverNumber"
        floatingLabelText="Número que vai receber"
        floatingLabelFixed
        value={receiverNumber}
        fullWidth
        onChange={e => setInputValue('receiverNumber', e.target.value)}
        style={{
          marginBottom: 30,
        }}
      />
    </FormContainer>


    <RaisedButton
      label="Enviar Gemidão"
      onTouchTap={sendGemidao}
      disabled={loading}
      secondary
      style={{ marginBottom: 20, height: 60 }}
    />

    <Disclaimer>
      Sua identidade será preservada,
      tanto para o número que está discando quanto para o número que irá receber.
      Fique tranquilo e trolle a vontade ;)
    </Disclaimer>
    {/* <RaisedButton
      label="Obter mais Ligações"
      onTouchTap={sendGemidao}
      disabled={loading}
      primary
      style={{ marginBottom: 20 }}
    /> */}


  </Wrapper>
);

Main.propTypes = {
  gemidoesLeft: number.isRequired,
  userPicture: string.isRequired,
  userName: string.isRequired,
  senderNumber: string,
  receiverNumber: string,
  sendGemidao: func.isRequired,
  loading: bool.isRequired,
  setInputValue: func.isRequired,
};
Main.defaultProps = {
  senderNumber: '',
  receiverNumber: '',
};

export default Main;
