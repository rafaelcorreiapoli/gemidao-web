import {
  LOGIN_WITH_FACEBOOK,
  LOGIN_WITH_FACEBOOK_SUCCESS,
  LOGIN_WITH_FACEBOOK_ERROR,
  FETCH_ME,
  FETCH_ME_SUCCESS,
  FETCH_ME_ERROR,
} from './actionTypes';

const initialState = {
  loading: false,
  error: null,
  token: null,
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};
