import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/app/app';
import reducers from './reducers';
require('./styles/base.scss');

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('app')
);
