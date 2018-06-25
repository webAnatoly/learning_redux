const redux = require('redux');
const _ = require('lodash');

const { createStore } = redux;
const initialState = {
  counter: 0,
  test: { a: 4, b: { c: 5 } },
};
// Reducer
const rootReducer = (state = initialState, action) => {
  const newState = _.cloneDeep(state);
  if (action.type === 'INC_COUNTER') {
    newState.counter = state.counter + 1;
    return newState;
  }
  if (action.type === 'ADD_COUNTER') {
    newState.counter = state.counter + action.value;
    return newState;
  }
  return newState;
};

// Store
const store = createStore(rootReducer);

// Subscription
store.subscribe(() => {
  console.log('[Subscription]', store.getState());
});


// Dispatching Action
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
