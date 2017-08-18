import React from 'react';
import { arrayOf, shape, string, object } from 'prop-types';
import styled from 'styled-components';
import EventsListItem from '@components/EventsListItem';
import CircularProgress from 'material-ui/CircularProgress';

const Wrapper = styled.div`
  align-self: stretch;
`;
const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const Message = styled.div`

`;
const EventsList = ({
  events,
}) => (
  <Wrapper>
    {events
    ? events.map(event => (
      <EventsListItem
        key={event._id}
        {...event}
      />
      ))
    : <Message>Sem eventos diponíveis</Message>}
  </Wrapper>
  );

EventsList.propTypes = {
  events: arrayOf(shape({
    date: object.isRequired,
    event: string.isRequired,
  })).isRequired,
};
export default EventsList;
