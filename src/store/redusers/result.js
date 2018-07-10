import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      // Внутри редюсера тоже можно реализовывать какую-либо логику, менять, обрабатывать данные
      // и потом уже возвращать newState. Но эта операция, я так понимаю всегда синхронна
      // реализовывать логику над данными получаемыми асинхронно следует в middleware.
      // Например в action creators c использованием middleware от redux-thunk
      return updateObject(state, {
        results: state.results.concat({ id: `${new Date()} ${Math.random()}`, value: action.value }),
      });
    case actionTypes.DELETE_RESULT:
      return updateObject(state, {
        results: state.results.filter(obj => obj.id !== action.deleteId),
      });
    default:
      return state;
  }
};

export default reducer;
