import _ from 'lodash';
import * as actionTypes from '../actions';

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  const newState = _.cloneDeep(state);
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      newState.results = newState.results.concat({ id: `${new Date()} ${Math.random()}`, value: action.value });
      return newState;
    case actionTypes.DELETE_RESULT:
      newState.results = newState.results.filter(obj => obj.id !== action.deleteId);
      return newState;
    default:
      return newState; // по умолчанию просто возвращаю просто неизменную копию state.
  }
};

export default reducer;
