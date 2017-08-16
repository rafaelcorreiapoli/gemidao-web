import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;
const Line = styled.div`
  height: 1px;
  background-color: #666;
  flex-grow: 1;
`;
const Text = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  font-style: italic;
`;

const OrSeparator = () => (
  <Wrapper>
    <Line />
    <Text>ou</Text>
    <Line />
  </Wrapper>
);

export default OrSeparator;
