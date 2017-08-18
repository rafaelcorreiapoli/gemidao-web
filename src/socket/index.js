import io from 'socket.io-client';

const __DEV__ = process.env.NODE_ENV === 'development';
const ENDPOINT = __DEV__
? 'http://192.168.1.40:3001'
: 'https://gemidao-api.herokuapp.com';

import * as authActions from '@modules/auth/actions';
import * as callsActions from '@modules/calls/actions';
import * as subscriptionsActions from '@modules/subscriptions/actions';

export const socket = io(ENDPOINT);

export const socketMiddleware = store => next => (action) => {
  const result = next(action);

  if (socket && action.meta && action.meta.socket) {
    console.log(`Emitting ${action.payload.message}, ${action.payload.content}`);
    const subsId = action.payload.subscriptionId;
    socket.emit(action.payload.message, action.payload.content, ({ error }) => {
      if (action.type === 'SUBSCRIBE') {
        if (error) {
          store.dispatch(subscriptionsActions.subscribeError(subsId, error));
        } else {
          store.dispatch(subscriptionsActions.subscribeSuccess(subsId));
        }
      } else if (action.type === 'UNSUBSCRIBE') {
        if (error) {

        } else {
          store.dispatch(subscriptionsActions.unsubscribeSuccess(subsId));
        }
      }
    });
  }

  return result;
};

export default (store) => {
  socket.on('connect', () => {
    console.log('Socket connect');
    const token = localStorage.getItem('token');
    if (token) {
      // if (!authSelectors.isSocketAuthenticated(store.getState())) {
      store.dispatch(authActions.authSocket(token));
      // }
    }
  });
  socket.on('disconnect', () => {
    console.log('Socket disconnected');
    store.dispatch(authActions.socketNotAuthenticated());
  });

  socket.on('gemidoesLeft', (gemidoesLeft) => {
    store.dispatch(authActions.setGemidoesLeft(gemidoesLeft));
  });
  socket.on('callStatus', ({ callId, status }) => {
    console.log('callStatus');
    store.dispatch(callsActions.setCallStatus(callId, status));
  });

  socket.on('singleCall', ({ data, error }) => {
    if (error) {
      console.log(error);
    } else {
      store.dispatch(callsActions.addCall(data));
    }
  });
  socket.on('authenticate', (status) => {
    console.log('authenticate ', status);
    if (status === 'ok') {
      store.dispatch(authActions.socketAuthenticated());
    } else {
      store.dispatch(authActions.socketNotAuthenticated());
    }
  });

  socket.on('logout', () => {
    store.dispatch(authActions.socketNotAuthenticated());
  });
};
