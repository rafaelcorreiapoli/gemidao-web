import React from 'react';
import gemidaoUrl from '@assets/images/gemidao.png';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%
`;
export default () => (
  <Image src={gemidaoUrl} alt="Gemidão do Zap" />
);
