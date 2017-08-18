import {
  SET_CALL_STATUS,
  ADD_CALL,
} from './actionTypes';

const initialState = {
  callStatus: null,
  calls: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CALL_STATUS:
      return {
        ...state,
        [action.payload.callId]: action.payload.status,
      };
    case ADD_CALL:
      return {
        ...state,
        calls: {
          ...state.calls,
          [action.payload._id]: action.payload,
        },
      };
    default:
      return state;
  }
};
