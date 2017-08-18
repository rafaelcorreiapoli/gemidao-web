import React from 'react';
import CallTrack from '@containers/CallTrack';

export default ({
  match,
}) => (
  <CallTrack callId={match.params.callId} />
);
