import React from 'react';
import {render} from 'react-dom';
import App from './js/containers/app';
import {Provider} from 'react-redux';
import store from './js/store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
