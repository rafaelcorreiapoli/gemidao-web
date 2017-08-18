import React from 'react';
import { string, arrayOf, shape, object, bool } from 'prop-types';
import styled from 'styled-components';
import DisplayCallStatus from '@components/DisplayCallStatus';
import EventsList from '@components/EventsList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Description = styled.div`
  font-size: 32px;
`;


const descriptions = {
  PREPARING: 'Preparando ligação...',
  RINGING: 'O telefone está tocando...',
  TALKING: 'Ligação atendida!',
  FINISHED: 'Ligação concluída :)',
};
const CallStatus = ({
  status = 'PREPARING',
  events,
  loading,
  errorDescription,
}) => {
  if (loading) {
    return <p>Carregando...</p>;
  }
  if (errorDescription && errorDescription.code === 2) {
    return <p>Ligação não encontrada</p>;
  }

  return (
    <Container>
      <DisplayCallStatus status={status} />
      <Description>{descriptions[status]}</Description>
      <EventsList
        events={events}
      />
    </Container>
  );
};
CallStatus.propTypes = {
  loading: bool,
  errorDescription: object,
  status: string.isRequired,
  events: arrayOf(shape({
    date: object.isRequired,
    event: string.isRequired,
  })).isRequired,
};
CallStatus.defaultProps = {
  loading: false,
  errorDescription: null,
};
export default CallStatus;
