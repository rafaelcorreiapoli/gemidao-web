import { combineReducers } from 'redux';
import gemidao from '@modules/gemidao/reducer';
import history from '@modules/history/reducer';
import payments from '@modules/payments/reducer';
import auth from '@modules/auth/reducer';

import { routerReducer } from 'react-router-redux';

export default asyncReducers => combineReducers({
  router: routerReducer,
  gemidao,
  history,
  payments,
  auth,
  ...asyncReducers,
});
