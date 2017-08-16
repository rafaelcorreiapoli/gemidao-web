import React from 'react';
import Login from '../../containers/Login';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #27ae60;
  align-items: center;
  justify-content: center;
  display: flex;
`;
export default () => (
  <Wrapper>
    <Login />
  </Wrapper>
);
