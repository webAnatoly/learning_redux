import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
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
and other similar behavior.
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
// applyMiddleware(looger, logger2, logger3)
const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
