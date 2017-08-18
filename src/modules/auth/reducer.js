import {
  LOGIN_WITH_FACEBOOK,
  LOGIN_WITH_FACEBOOK_SUCCESS,
  LOGIN_WITH_FACEBOOK_ERROR,
  FETCH_ME,
  FETCH_ME_SUCCESS,
  FETCH_ME_ERROR,
  SET_GEMIDOES_LEFT,
  SOCKET_AUTHENTICATED,
  SOCKET_NOT_AUTHENTICATED,
} from './actionTypes';

const initialState = {
  loading: false,
  error: null,
  token: null,
  user: null,
  socketAuthenticated: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SOCKET_AUTHENTICATED:
      return {
        ...state,
        socketAuthenticated: true,
      };
    case SOCKET_NOT_AUTHENTICATED:
      return {
        ...state,
        socketAuthenticated: false,
      };
    case LOGIN_WITH_FACEBOOK:
      return { ...state, loading: true, error: null };
    case LOGIN_WITH_FACEBOOK_SUCCESS:
      return { ...state, loading: false, token: action.payload.token, user: action.payload.user };
    case LOGIN_WITH_FACEBOOK_ERROR:
      return { ...state, loading: false, error: action.payload };
    case FETCH_ME:
      return { ...state, loading: true, error: null };
    case FETCH_ME_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case FETCH_ME_ERROR:
      return { ...state, loading: false, error: action.payload };
    case SET_GEMIDOES_LEFT:
      return { ...state,
        user: {
          ...state.user,
          gemidoesLeft: action.payload,
        } };
    default:
      return state;
  }
};
