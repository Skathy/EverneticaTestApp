import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store/index';
import './index.scss';

const app = (
  <Provider store={store}>
      <App />
  </Provider>
)

ReactDOM.render(
    app,
  document.getElementById('root')
);

