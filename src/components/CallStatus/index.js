import React from 'react';
import { string, arrayOf, shape, object, bool } from 'prop-types';
import styled from 'styled-components';
import DisplayCallStatus from '@components/DisplayCallStatus';
import EventsList from '@components/EventsList';
import LoadingDots from '@components/LoadingDots';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Description = styled.div`
  font-size: 32px;
  margin-top: 20px;
  margin-bottom: 40px;
`;


const descriptions = {
  preparing: 'Preparando ligação',
  ringing: 'O telefone está tocando!',
  answer: 'Ligação atendida!',
  hangup: 'Ligação concluída :)',
};

const CallStatus = ({
  status = 'preparing',
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
      <Description>{descriptions[status]} {status === 'preparing' && <LoadingDots />}</Description>
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
