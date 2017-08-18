import {
  UNSUBSCRIBE,
  UNSUBSCRIBE_SUCCESS,
  SUBSCRIBE,
  SUBSCRIBE_ERROR,
  SUBSCRIBE_SUCCESS,
} from './actionTypes';
import hash from 'object-hash';

export const subscribe = (publication, parameters, nextActionToCall) => ({
  type: SUBSCRIBE,
  payload: {
    message: 'subscribe',
    content: {
      publication,
      ...parameters,
    },
    nextActionToCall,
    subscriptionId: hash({ publication, ...parameters }),
  },
  meta: { socket: true },
});

export const unsubscribeSuccess = subscriptionId => ({
  type: UNSUBSCRIBE_SUCCESS,
  payload: subscriptionId,
});
export const unsubscribe = (publication, parameters) => ({
  type: UNSUBSCRIBE,
  payload: {
    message: 'unsubscribe',
    content: {
      publication,
      ...parameters,
    },
    subscriptionId: hash({ publication, ...parameters }),
  },
  meta: { socket: true },
});

export const subscribeError = (subscriptionId, error) => ({
  type: SUBSCRIBE_ERROR,
  payload: {
    subscriptionId,
    error,
  },
});

export const subscribeSuccess = subscriptionId => ({
  type: SUBSCRIBE_SUCCESS,
  payload: {
    subscriptionId,
  },
});
