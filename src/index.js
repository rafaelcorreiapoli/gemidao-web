import 'babel-polyfill';
// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

/* global document*/
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App';
import createStore from './store/createStore';

import './style.css';

const store = createStore();

ReactDOM.render(
  <AppContainer>
    <App store={store} />
  </AppContainer>,
  document.getElementById('app'),
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('app'),
    );
  });
}
