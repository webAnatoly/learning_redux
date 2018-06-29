import _ from 'lodash';
import * as actionTypes from '../actions/actions';

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  const newState = _.cloneDeep(state);
  switch (action.type) {
    case actionTypes.INCREMENT:
      newState.counter += 1;
      return newState;
    case actionTypes.DECREMENT:
      newState.counter -= 1;
      return newState;
    case actionTypes.ADD:
      newState.counter += action.value;
      return newState;
    case actionTypes.SUBTRACT:
      newState.counter -= action.value;
      return newState;
    default:
      return newState;
  }
};

export default reducer;
