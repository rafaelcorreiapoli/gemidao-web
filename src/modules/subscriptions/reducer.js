import {
  SUBSCRIBE,
  SUBSCRIBE_ERROR,
  SUBSCRIBE_SUCCESS,
  UNSUBSCRIBE_SUCCESS,
} from './actionTypes';

const initialState = {

};
export default (state = initialState, action) => {
  switch (action.type) {
    case UNSUBSCRIBE_SUCCESS: {
      const newState = { ...state };
      delete newState[action.payload];
      return newState;
    }
    case SUBSCRIBE:
      return {
        ...state,
        [action.payload.subscriptionId]: {
          ...state[action.payload.subscriptionId],
          loading: true,
          error: false,
          success: false,
          errorDescription: null,
        },
      };
    case SUBSCRIBE_ERROR:
      return {
        ...state,
        [action.payload.subscriptionId]: {
          ...state[action.payload.subscriptionId],
          loading: false,
          error: true,
          errorDescription: action.payload.error,
        },
      };
    case SUBSCRIBE_SUCCESS:
      return {
        ...state,
        [action.payload.subscriptionId]: {
          ...state[action.payload.subscriptionId],
          loading: false,
          success: true,
        },
      };
    default:
      return state;
  }
};
