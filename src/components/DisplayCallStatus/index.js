import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import RingingIcon from 'material-ui/svg-icons/communication/ring-volume';
import TalkingIcon from 'material-ui/svg-icons/notification/phone-in-talk';
import FinishedIcon from 'material-ui/svg-icons/communication/call-end';
import PreparingIcon from 'material-ui/svg-icons/action/settings-remote';

const Wrapper = styled(Paper)`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  margin-bottom: 20px;
`;

const colors = {
  PREPARING: '#3498db',
  RINGING: '#9b59b6',
  TALKING: '#2ecc71',
  FINISHED: '#e67e22',
};
const icons = {
  PREPARING: <PreparingIcon color="#FFF" style={{ width: 80, height: 80 }} />,
  RINGING: <RingingIcon color="#FFF" style={{ width: 80, height: 80 }} />,
  TALKING: <TalkingIcon color="#FFF" style={{ width: 80, height: 80 }} />,
  FINISHED: <FinishedIcon color="#FFF" style={{ width: 80, height: 80 }} />,
};

const DisplayCallStatus = ({
  status,
}) => (
  <Wrapper zDepth={2} style={{ backgroundColor: colors[status] }} circle>
    {icons[status]}
  </Wrapper>
);

DisplayCallStatus.propTypes = {
  status: string.isRequired,
};

export default DisplayCallStatus;
