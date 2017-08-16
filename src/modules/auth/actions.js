/* global localStorage */
import {
  LOGIN_WITH_FACEBOOK,
  LOGIN_WITH_FACEBOOK_SUCCESS,
  LOGIN_WITH_FACEBOOK_ERROR,
  FETCH_ME,
  FETCH_ME_SUCCESS,
  FETCH_ME_ERROR,
  // STORE_TOKEN,
  // READ_TOKEN,
} from './actionTypes';

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
  })
  .catch((err) => {
    dispatch(loginWithFacebookError(err));
  });
};

const fetchMeStart = () => ({
  type: FETCH_ME,
});
const fetchMeSuccess = () => ({
  type: FETCH_ME_SUCCESS,
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
