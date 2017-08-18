import React from 'react';
import Paper from 'material-ui/Paper';
import styled from 'styled-components';

const Wrapper = styled(Paper)`
  padding: 20px;
`;

export default () => (
  <Wrapper zDepth={1}>
    <ul>
      <li>
        Bruxaria!
      </li>
    </ul>
  </Wrapper>
);
