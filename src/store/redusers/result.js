import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

// Внутри редюсера тоже можно реализовывать какую-либо логику, менять, обрабатывать данные
// и потом уже возвращать newState. Но эта операция, я так понимаю всегда синхронна
// реализовывать логику над данными получаемыми асинхронно следует в middleware.
// Например в action creators c использованием middleware от redux-thunk

const initialState = {
  results: [],
};

const storeResult = (state, action) => {
  const updatedArray = state.results.concat({ id: `${new Date()} ${Math.random()}`, value: action.value });
  return updateObject(state, { results: updatedArray });
};

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter(obj => obj.id !== action.deleteId);
  return updateObject(state, { results: updatedArray });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT: return storeResult(state, action);
    case actionTypes.DELETE_RESULT: return deleteResult(state, action);
    default: return state;
  }
};

export default reducer;
