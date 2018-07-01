import React from 'react';
import ReactDOM from 'react-dom';
import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './normalize.css';
import './index.css';
import App from './App';
import counterReducer from './store/redusers/counter';
import resultReducer from './store/redusers/result';

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer,
});

/* Добавил middleware.
Middleware это штука, которая позволяет выполнять какой-либо код между action и reducer.
Это то место в redux, где можно и нужно выполнять какой-либо асинхронный код.

Middleware provides the capability to run code after an action is dispatched,
but before it reaches the reducer.

A middleware can inspect actions and state, modify actions, dispatch other actions,
stop actions from reaching the reducers, and much more.

Middleware are also a good place for managing persistent server connections via websockets,
and other similar behavior. https://blog.isquaredsoftware.com/presentations/2018-03-redux-fundamentals/#/23

Middleware provides a third-party extension point between dispatching an action, and the moment it
reaches the reducer.
People use Redux middleware for logging, crash reporting, talking to an asynchronous API, routing,
and more. https://redux.js.org/advanced/middleware

Middleware is created by the community and does not ship with Redux by default.
You need to explicitly install packages like redux-thunk or redux-promise to use it.
You may also create your own middleware. https://redux.js.org/api-reference/store#notes
*/
const logger = store => next => (action) => {
  console.log('[Middleware] Dispatching', 'action: ', action);
  /* Здесь мы имеем доступ к action. Можем его модифицировать. И возвращать новый action */
  const result = next(action);
  console.log('[Middleware] next state', 'state: ', store.getState());
  // Возвращаем новый action.
  // Пока что я тут ничего не модифицировал,
  // а просто вернул action без изменений и просто вывел в консоль store.getState().
  return result;
};

// соединяем наш middleware с нашим store
// в функцию applyMiddleware можно добавлять столько middleware, скольно нужно через запятую
// applyMiddleware(looger, thunk)
// looger это middleware которое мы тут сами написали
// thunk это готовый пакет middleware https://github.com/reduxjs/redux-thunk

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
