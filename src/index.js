import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './normalize.css';
import './index.css';
import App from './App';
import reducer from './store/reducer';

const store = createStore(reducer);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
