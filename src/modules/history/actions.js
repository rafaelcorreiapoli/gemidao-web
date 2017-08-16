import {
  FETCH_GEMIDOES,
  FETCH_GEMIDOES_SUCCESS,
  FETCH_GEMIDOES_ERROR,
} from './actionTypes';

const fetchGemidoesStart = () => ({
  type: FETCH_GEMIDOES,

});
const fetchGemidoesSuccess = gemidoes => ({
  type: FETCH_GEMIDOES_SUCCESS,
  payload: gemidoes,
});

const fetchGemidoesError = error => ({
  type: FETCH_GEMIDOES_ERROR,
  payload: error,
});

export const fetchGemidoes = () => (dispatch, _, api) => {
  dispatch(fetchGemidoesStart());

  return api.getGemidoes()
  .then((gemidoes) => {
    dispatch(fetchGemidoesSuccess(gemidoes.data));
    return gemidoes;
  })
  .catch((err) => {
    dispatch(fetchGemidoesError(err));
  });
};
