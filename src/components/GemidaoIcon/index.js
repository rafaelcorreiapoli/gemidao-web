import React from 'react';
import styled from 'styled-components';
import gemidaoSrc from '@assets/images/gemidao.png';

const Image = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;


export default () => <Image src={gemidaoSrc} />;
