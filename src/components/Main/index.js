import React from 'react';
import { string, func, bool } from 'prop-types';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const Wrapper = styled(Paper)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 600px;
  margin: auto;
`;

const Title = styled.div`
  font-weight: 900;
  font-size: 20px;
  margin-bottom: 10px;
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
  sender,
  receiver,
  createGemidao,
  loading,
  setSender,
  setReceiver,
}) => (
  <Wrapper zDepth={1}>
    <Title>
      Nunca foi tão fácil trollar seus amigos
    </Title>
    <FormContainer>
      <TextField
        name="sender"
        floatingLabelText="Número que vai ligar"
        floatingLabelFixed
        value={sender}
        fullWidth
        onChange={e => setSender(e.target.value)}
      />

      <TextField
        underlineStyle={{ color: 'red' }}
        name="receiver"
        floatingLabelText="Número que vai receber"
        floatingLabelFixed
        value={receiver}
        fullWidth
        onChange={e => setReceiver(e.target.value)}
        style={{
          marginBottom: 30,
        }}
      />
    </FormContainer>


    <RaisedButton
      label="Enviar Gemidão"
      onTouchTap={() => createGemidao(sender, receiver)}
      disabled={loading}
      secondary
      style={{ marginBottom: 20, height: 60 }}
    />

    <Disclaimer>
      Sua identidade será preservada,
      tanto para o número que está discando quanto para o número que irá receber.
      Fique tranquilo e trolle a vontade ;)
    </Disclaimer>
  </Wrapper>
);

Main.propTypes = {
  sender: string.isRequired,
  receiver: string.isRequired,
  createGemidao: func.isRequired,
  loading: bool.isRequired,
  setSender: func.isRequired,
  setReceiver: func.isRequired,
};
Main.defaultProps = {

};

export default Main;
