import React from 'react';
import { arrayOf, shape, string, number, func } from 'prop-types';
import PurchaseItem from '@components/PurchaseItem';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import OrSeparator from '@components/OrSeparator';
import Paper from 'material-ui/Paper';

const Wrapper = styled.div`

`;
const ShareOnFacebookText = styled.div`
  margin-bottom: 20px;
`;

const ShareDisclaimer = styled.div`
  font-size: 12px;
  font-style: italic;
`;
const ShareWrapper = styled(Paper)`
  padding: 20px;
  text-align: center;
`;

const Purchase = ({
  items,
  purchaseItem,
  shareOnFacebook,
}) => (
  <Wrapper>
    {items.map(item => (
      <PurchaseItem
        key={item._id}
        onClick={purchaseItem}
        {...item}
      />
    ))}
    <OrSeparator />
    <ShareWrapper zDepth={1}>
      <ShareOnFacebookText>
        Compartilhe no Facebook para ganhar 1 Gemidão grátis!
      </ShareOnFacebookText>
      <RaisedButton
        labelStyle={{ color: '#FFF' }}
        label="Compartilhar no Facebook"
        backgroundColor="#4C69BA"
        onTouchTap={shareOnFacebook}
        style={{ marginBottom: 10 }}
      />
      <ShareDisclaimer>Apenas 1 vez por dia</ShareDisclaimer>
    </ShareWrapper>

  </Wrapper>
);


Purchase.propTypes = {
  purchaseItem: func.isRequired,
  items: arrayOf(shape({
    _id: string.isRequired,
    imageUrl: string.isRequired,
    description: string.isRequired,
    quantity: number.isRequired,
    amount: number.isRequired,
  })).isRequired,
  shareOnFacebook: func.isRequired,
};


export default Purchase;
