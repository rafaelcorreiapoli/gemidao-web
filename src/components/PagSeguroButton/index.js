import React from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';

const pagseguroImageUrl = 'http://static.wixstatic.com/media/5d4948_eba8dfa08a9a425a80db19c218c75dbc~mv2.png_srz_862_170_85_22_0.50_1.20_0.00_png_srz';

const Wrapper = styled.div`
  cursor: pointer;
`;
const Image = styled.img`
  width: 150px;
`;

const PagSeguroButton = ({
  onClick,
}) => (
  <Wrapper onClick={onClick} >
    <Image alt="PagSeguro" src={pagseguroImageUrl} />
  </Wrapper>

);


PagSeguroButton.propTypes = {
  onClick: func.isRequired,
};
export default PagSeguroButton;
