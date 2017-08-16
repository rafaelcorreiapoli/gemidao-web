import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import styled from 'styled-components';
import HistoryListItem from '@components/HistoryListItem';

const Wrapper = styled.div`

`;
const HistoryList = ({
  histories,

}) => (
  <Wrapper>
    {histories.map(history => (
      <HistoryListItem
        key={history._id}
        {...history}
      />
    ))}
  </Wrapper>
);

export default HistoryList;
