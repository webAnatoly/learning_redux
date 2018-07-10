import * as actionTypes from './actionTypes';

export const saveResult = (payload) => {
  // Здесь можно добавлять какую-нибудь логику.
  // Просто ради примера увеличил value в два раза.
  // Например полученные данные с сервера, можно тут как-то обработать и потом добавить уже в state
  const { value } = { ...payload };
  const updatedResult = value * 2;
  return {
    type: actionTypes.STORE_RESULT,
    value: updatedResult,
  };
};

/*
The only place where we can execute asynchronous code is in our action creator.
It's what redux-funk is made for and it's the common and best practice pattern.
*/
// благодаря redux-thunk возвращаемая функция может принимать дополнительный аргумент getState
export const storeResult = payload => (dispatch, getState) => (
  setTimeout(() => {
    const oldCounter = getState().ctr.counter; // можно получать доступ объекту state до вызова функции dispatch
    console.log('oldCounter', oldCounter);
    dispatch(saveResult(payload));
  }, 2000)
);
export const deleteResult = payload => ({
  type: actionTypes.DELETE_RESULT,
  ...payload,
});
