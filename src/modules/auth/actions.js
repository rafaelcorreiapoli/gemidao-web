/* global localStorage */
import {
  LOGIN_WITH_FACEBOOK,
  LOGIN_WITH_FACEBOOK_SUCCESS,
  LOGIN_WITH_FACEBOOK_ERROR,
  FETCH_ME,
  FETCH_ME_SUCCESS,
  FETCH_ME_ERROR,
  SET_GEMIDOES_LEFT,
  // STORE_TOKEN,
  // READ_TOKEN,
  AUTH_SOCKET,
  SOCKET_AUTHENTICATED,
  SOCKET_NOT_AUTHENTICATED,
  LOGOUT_SOCKET,
} from './actionTypes';

export const socketAuthenticated = () => ({ type: SOCKET_AUTHENTICATED });
export const socketNotAuthenticated = () => ({ type: SOCKET_NOT_AUTHENTICATED });


const createSocketAction = action => ({
  ...action,
  meta: { socket: true },
});
export const authSocket = token => createSocketAction({
  type: AUTH_SOCKET,
  payload: {
    message: 'authenticate',
    content: token,
  },
});

export const logoutSocket = () => createSocketAction({
  type: LOGOUT_SOCKET,
  payload: {
    message: 'logout',
  },
});

// export const authSocket = token => (dispatch, _, __, socket) => {
//   socket.emit('authenticate', token);
// };

export const setGemidoesLeft = gemidoesLeft => ({
  type: SET_GEMIDOES_LEFT,
  payload: gemidoesLeft,
});
const loginWithFacebookStart = () => ({
  type: LOGIN_WITH_FACEBOOK,
});
const loginWithFacebookSuccess = ({ token, user }) => ({
  type: LOGIN_WITH_FACEBOOK_SUCCESS,
  payload: { token, user },
});
const loginWithFacebookError = error => ({
  type: LOGIN_WITH_FACEBOOK_ERROR,
  payload: error,
});
export const loginWithFacebook = token => (dispatch, _, api) => {
  dispatch(loginWithFacebookStart());
  return api.loginWithFacebook(token)
  .then((data) => {
    dispatch(loginWithFacebookSuccess(data));
    dispatch(authSocket(data.token));
    return data;
  })
  .catch((err) => {
    dispatch(loginWithFacebookError(err));
    throw err;
  });
};

const fetchMeStart = () => ({
  type: FETCH_ME,
});
const fetchMeSuccess = ({ user }) => ({
  type: FETCH_ME_SUCCESS,
  payload: user,
});
const fetchMeError = error => ({
  type: FETCH_ME_ERROR,
  payload: error,
});
export const fetchMe = () => (dispatch, _, api) => {
  dispatch(fetchMeStart());

  return api.fetchMe()
    .then((data) => {
      dispatch(fetchMeSuccess(data));
      // dispatch(authSocket(localStorage.getItem('token')));
    })
    .catch((err) => {
      dispatch(fetchMeError(err));
    });
};

//
// export const storeToken = token => () => {
//   localStorage.setItem('token', token);
// };
//
// export const readToken = () => (dispatch) => {
//   localStorage.getItem('token');
// };
