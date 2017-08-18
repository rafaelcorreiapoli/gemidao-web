import {
  SET_CALL_STATUS,
  ADD_CALL,
} from './actionTypes';

export const setCallStatus = (callId, status) => ({
  type: SET_CALL_STATUS,
  payload: {
    callId,
    status,
  },
});

export const addCall = call => ({
  type: ADD_CALL,
  payload: call,
});
