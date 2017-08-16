import {
  CREATE_GEMIDAO,
  CREATE_GEMIDAO_SUCCESS,
  CREATE_GEMIDAO_ERROR,
} from './actionTypes';


const initialState = {
  loading: false,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_GEMIDAO:
      return { ...state, loading: true, error: null };
    case CREATE_GEMIDAO_SUCCESS:
      return { ...state, loading: false };
    case CREATE_GEMIDAO_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
