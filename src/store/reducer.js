import _ from 'lodash';

const initialState = {
  counter: 0,
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
    default:
      return state; // по умолчанию возвращает полученный state неизменным.
  }
};

export default reducer;
