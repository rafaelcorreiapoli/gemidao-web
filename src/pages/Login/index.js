import React from 'react';
import Login from '../../containers/Login';
import styled from 'styled-components';
import backgroundUrl from '@assets/images/bg.jpg';

const Wrapper = styled.div`
  background-color: #27ae60;
  align-items: center;
  justify-content: center;
  display: flex;
  background-image: url(${backgroundUrl});
`;
const BottomBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 300px;
  background-color: #27ae60;
  z-index: 0;
`;
const GemidaoText = styled.div`
  font-size: 40px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.5);
`;
export default () => (
  <Wrapper>
    <BottomBar />
    <Login />

  </Wrapper>
);
