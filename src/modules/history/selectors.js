import moment from 'moment';

export const getGemidoes = state => state.history.gemidoes ?
state.history.gemidoes.map(gemidao => ({
  _id: gemidao._id,
  from: gemidao.from,
  to: gemidao.to,
  callId: gemidao.callId,
  answered: gemidao.eventLog.some(event => event.event === 'answer'),
  date: moment(gemidao.date),
}))
.sort((a, b) => b - a)
: [];
export const isLoading = state => state.history.loading;
export const getError = state => state.history.error;
