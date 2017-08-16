import { combineReducers } from 'redux';
import gemidao from '@modules/gemidao/reducer';
import { routerReducer } from 'react-router-redux';

export default asyncReducers => combineReducers({
  router: routerReducer,
  gemidao,
  ...asyncReducers,
});
