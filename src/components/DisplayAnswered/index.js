import React from 'react';
import { bool } from 'prop-types';
import Call from 'material-ui/svg-icons/communication/call';
import CallEnd from 'material-ui/svg-icons/communication/call-end';
import Paper from 'material-ui/Paper';

const DisplayAnswered = ({
  answered,
}) => (
  <Paper
    zDepth={1}
    style={{
      minWidth: 50,
      height: 50,
      borderRadius: 35,
      marginRight: 14,
      backgroundColor: answered ? '#2ecc71' : '#e74c3c',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center' }}
  >
    {answered ? <Call color="#FFF" /> : <CallEnd color="#FFF" />}
  </Paper>
);

DisplayAnswered.propTypes = {
  answered: bool.isRequired,
};
export default DisplayAnswered;
