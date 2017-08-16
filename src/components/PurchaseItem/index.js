import React from 'react';
import { arrayOf, shape, func, string, number } from 'prop-types';
import styled from 'styled-components';
import PagSeguroButton from '@components/PagSeguroButton';
import Paper from 'material-ui/Paper';

const Wrapper = styled(Paper)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  margin-bottom: 8px;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;
const Description = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
const Quantity = styled.div`

`;
const Amount = styled.div`
  font-weight: 700;
  margin-top: 4px;
  display: inline-block;
  padding: 2px 4px 2px 4px;
  border-radius: 10px;
  background-color: #f1c40f;
`;

const ColumnWrapper = styled.div`
  flex-grow: 1;
`;


const formatReal = number => String(number).replace('.', ',');
const PurchaseItem = ({
  imageUrl,
  description,
  quantity,
  amount,
  onClick,
}) => (
  <Wrapper zDepth={1}>
    <Image src={imageUrl} />
    <ColumnWrapper>
      <Description>{description}</Description>
      <Amount>R$ {formatReal(amount)}</Amount>
    </ColumnWrapper>

    <PagSeguroButton onClick={onClick} />
  </Wrapper>
);


PurchaseItem.propTypes = {
  imageUrl: string.isRequired,
  description: string.isRequired,
  quantity: number.isRequired,
  amount: number.isRequired,
  onClick: func.isRequired,
};


export default PurchaseItem;
