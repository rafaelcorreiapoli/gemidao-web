import React from 'react';
import { number } from 'prop-types';
import styled from 'styled-components';
import GemidaoIcon from '@components/GemidaoIcon';

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  padding-top: 5px;
`;

const GemidoesLeft = styled.div`
  font-size: 26px;
  font-weight: 900;
  color: #FFF;
`;

const GemidaoCounter = ({
  gemidoesLeft,
}) => (
  <Wrapper>
    <GemidaoIcon />
    <GemidoesLeft>x{gemidoesLeft}</GemidoesLeft>
  </Wrapper>
);

GemidaoCounter.propTypes = {
  gemidoesLeft: number.isRequired,
};
GemidaoCounter.defaultProps = {
  gemidoesLeft: 0,
};

export default GemidaoCounter;
