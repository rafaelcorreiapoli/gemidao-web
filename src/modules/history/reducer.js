import {
  FETCH_GEMIDOES,
  FETCH_GEMIDOES_SUCCESS,
  FETCH_GEMIDOES_ERROR,
} from './actionTypes';

const initialState = {
  gemidoes: [],
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GEMIDOES:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_GEMIDOES_SUCCESS:
      return {
        ...state,
        loading: false,
        gemidoes: action.payload,
      };
    case FETCH_GEMIDOES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
