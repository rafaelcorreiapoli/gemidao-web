import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import RingingIcon from 'material-ui/svg-icons/communication/ring-volume';
import TalkingIcon from 'material-ui/svg-icons/notification/phone-in-talk';
import FinishedIcon from 'material-ui/svg-icons/communication/call-end';
import PreparingIcon from 'material-ui/svg-icons/action/settings-remote';

const Wrapper = styled(Paper)`
  width: ${props => props.small ? 50 : 200}px;
  height: ${props => props.small ? 50 : 200}px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  ${''}
`;

const colors = {
  preparing: '#3498db',
  ringing: '#9b59b6',
  answer: '#2ecc71',
  hangup: '#e67e22',
};
const icons = {
  preparing: <PreparingIcon color="#FFF" />,
  ringing: <RingingIcon color="#FFF" />,
  answer: <TalkingIcon color="#FFF" />,
  hangup: <FinishedIcon color="#FFF" />,
};

const DisplayCallStatus = ({
  status,
  small,
}) => (
  <Wrapper zDepth={2} style={{ backgroundColor: colors[status] }} circle small={small}>
    {icons[status] && React.cloneElement(icons[status], {
      style: {
        width: small ? 20 : 80,
        height: small ? 20 : 80,
      },
    })}
  </Wrapper>
);

DisplayCallStatus.propTypes = {
  status: string.isRequired,
};

export default DisplayCallStatus;
