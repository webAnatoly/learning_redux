import _ from 'lodash';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  const newState = _.cloneDeep(state);
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      // Внутри редюсера тоже можно реализовывать какую-либо логику, менять, обрабатывать данные
      // и потом уже возвращать newState. Но эта операция, я так понимаю всегда синхронна
      // реализовывать логику над данными получаемыми асинхронно следует в middleware.
      // Например в action creators c использованием middleware от redux-thunk
      newState.results = newState.results.concat({ id: `${new Date()} ${Math.random()}`, value: action.value });
      return newState;
    case actionTypes.DELETE_RESULT:
      newState.results = newState.results.filter(obj => obj.id !== action.deleteId);
      return newState;
    default:
      return state;
  }
};

export default reducer;
