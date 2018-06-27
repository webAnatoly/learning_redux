import _ from 'lodash';

const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {
  const newState = _.cloneDeep(state);
  switch (action.type) {
    case 'INCREMENT':
      newState.counter += 1;
      return newState;
    case 'DECREMENT':
      newState.counter -= 1;
      return newState;
    case 'ADD':
      newState.counter += action.value;
      return newState;
    case 'SUBTRACT':
      newState.counter -= action.value;
      return newState;
    case 'STORE_RESULT':
      newState.results = newState.results.concat({ id: `${new Date()} ${Math.random()}`, value: newState.counter });
      return newState;
    case 'DELETE_RESULT':
      newState.results = newState.results.filter(obj => obj.id !== action.deleteId);
      return newState;
    default:
      return newState; // по умолчанию просто возвращаю просто неизменную копию state.
  }
};

export default reducer;
