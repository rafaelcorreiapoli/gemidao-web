import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import styled from 'styled-components';
import HistoryListItem from '@components/HistoryListItem';
import CircularProgress from 'material-ui/CircularProgress';

const Wrapper = styled.div`

`;
const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const HistoryList = ({
  onClickCall,
  histories,
  loading,
}) => {
  if (loading) {
    return (
      <LoadingWrapper>
        <CircularProgress />
      </LoadingWrapper>

    );
  }
  return (
    <Wrapper>
      {histories.map(history => (
        <HistoryListItem
          onClick={onClickCall}
          key={history._id}
          {...history}
        />
      ))}
    </Wrapper>
  );
};


export default HistoryList;
