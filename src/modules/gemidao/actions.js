import {
  CREATE_GEMIDAO,
  CREATE_GEMIDAO_SUCCESS,
  CREATE_GEMIDAO_ERROR,
  SET_SENDER,
  SET_RECEIVER,
  SET_CALL_STATUS,
} from './actionTypes';

export const setSender = senderNumber => ({
  type: SET_SENDER,
  payload: senderNumber,
});
export const setReceiver = receiverNumber => ({
  type: SET_RECEIVER,
  payload: receiverNumber,
});

export const createGemidaoStart = () => ({
  type: CREATE_GEMIDAO,

});
export const createGemidaoSuccess = items => ({
  type: CREATE_GEMIDAO_SUCCESS,
  payload: items,
});

export const createGemidaoError = error => ({
  type: CREATE_GEMIDAO_ERROR,
  payload: error,
});

export const createGemidao = (sender, receiver) => (dispatch, _, api) => {
  dispatch(createGemidaoStart());

  return api.createGemidao(sender, receiver)
  .then((response) => {
    console.log(response);
    dispatch(createGemidaoSuccess(response));
    return response;
  })
  .catch((err) => {
    dispatch(createGemidaoError(err));
  });
};
