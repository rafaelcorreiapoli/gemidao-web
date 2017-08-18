import React from 'react';
import { func, string, bool, object } from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import DisplayAnswered from '@components/DisplayAnswered';
import Paper from 'material-ui/Paper';

const Wrapper = styled(Paper)`
  cursor: pointer;
  display: flex;
  padding: 8px;
  margin-bottom: 8px;
`;
const From = styled.div`
  color: #333;
  margin-bottom: 4px;
`;
const To = styled.div`
  color: #333;
`;
const DisplayDate = styled.div`
  color: #666;
  font-style: italic;
  font-size: 12px;
`;

const Column = styled.div`
  flex-grow: 1;
`;

const HistoryListItem = ({
  onClick,
  callId,
  from,
  to,
  date,
  answered,
}) => (
  <Wrapper zDepth={1} onClick={() => onClick(callId)}>
    <DisplayAnswered answered={answered} />

    <Column>
      <From><b>De:</b> {from}</From>
      <To><b>Para:</b> {to}</To>
    </Column>


    <DisplayDate>{moment(date).format('HH:mm:ss DD/MM/YYYY')}</DisplayDate>

  </Wrapper>
);
HistoryListItem.propTypes = {
  onClick: func.isRequired,
  callId: string.isRequired,
  from: string.isRequired,
  to: string.isRequired,
  date: object.isRequired,
  answered: bool.isRequired,
};

export default HistoryListItem;
