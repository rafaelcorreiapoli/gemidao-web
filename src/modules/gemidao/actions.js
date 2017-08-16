import {
  CREATE_GEMIDAO,
  CREATE_GEMIDAO_SUCCESS,
  CREATE_GEMIDAO_ERROR,
} from './actionTypes';

const createGemidaoStart = () => ({
  type: CREATE_GEMIDAO,

});
const createGemidaoSuccess = items => ({
  type: CREATE_GEMIDAO_SUCCESS,
  payload: items,
});

const createGemidaoError = error => ({
  type: CREATE_GEMIDAO_ERROR,
  payload: error,
});

export const createGemidao = () => (dispatch, _, api) => {
  dispatch(createGemidaoStart());

  return api.getItems()
  .then((response) => {
    dispatch(createGemidaoSuccess(response));
    return response;
  })
  .catch((err) => {
    dispatch(createGemidaoError(err));
  });
};
