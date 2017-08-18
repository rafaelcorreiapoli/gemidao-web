import React from 'react';
import { func, string, bool, object } from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import DisplayAnswered from '@components/DisplayAnswered';
import Paper from 'material-ui/Paper';
import DisplayCallStatus from '@components/DisplayCallStatus';

const Wrapper = styled(Paper)`
  cursor: pointer;
  display: flex;
  padding: 8px;
  margin-bottom: 8px;
`;
const Event = styled.div`
  color: #333;
  flex-grow: 1;
`;
const DisplayDate = styled.div`
  color: #666;
  font-style: italic;
  font-size: 12px;
`;


const EventsListItem = ({
  event,
  date,
}) => (
  <Wrapper zDepth={1}>
    <DisplayCallStatus answered={answered} />
    <Event>{event}</Event>
    <DisplayDate>{moment(date).format('HH:mm:ss DD/MM/YYYY')}</DisplayDate>
  </Wrapper>
);

EventsListItem.propTypes = {
  event: string.isRequired,
  date: object.isRequired,
};

export default EventsListItem;
