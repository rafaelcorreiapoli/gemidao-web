import {
  CREATE_GEMIDAO,
  CREATE_GEMIDAO_SUCCESS,
  CREATE_GEMIDAO_ERROR,
  SET_SENDER,
  SET_RECEIVER,
} from './actionTypes';


const initialState = {
  loading: false,
  error: false,
  sender: '',
  receiver: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_GEMIDAO:
      return { ...state, loading: true, error: null };
    case CREATE_GEMIDAO_SUCCESS:
      return { ...state, loading: false };
    case CREATE_GEMIDAO_ERROR:
      return { ...state, loading: false, error: action.payload };
    case SET_SENDER:
      return { ...state, sender: action.payload };
    case SET_RECEIVER:
      return { ...state, receiver: action.payload };
    default:
      return state;
  }
};
