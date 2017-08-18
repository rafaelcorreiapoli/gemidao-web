import {
  CREATE_GEMIDAO,
  CREATE_GEMIDAO_SUCCESS,
  CREATE_GEMIDAO_ERROR,
  SET_SENDER,
  SET_RECEIVER,
  SET_CALL_STATUS,
} from './actionTypes';


const initialState = {
  loading: false,
  error: false,
  sender: '',
  receiver: '',
  callStatus: null,
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
    case SET_CALL_STATUS:
      return { ...state, callStatus: action.payload };
    default:
      return state;
  }
};
