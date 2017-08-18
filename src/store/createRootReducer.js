import { combineReducers } from 'redux';
import gemidao from '@modules/gemidao/reducer';
import history from '@modules/history/reducer';
import payments from '@modules/payments/reducer';
import auth from '@modules/auth/reducer';
import calls from '@modules/calls/reducer';
import subscriptions from '@modules/subscriptions/reducer';

import { routerReducer } from 'react-router-redux';

export default asyncReducers => combineReducers({
  router: routerReducer,
  gemidao,
  history,
  payments,
  auth,
  calls,
  subscriptions,
  ...asyncReducers,
});
