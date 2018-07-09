import * as actionTypes from './actionTypes';

export const saveResult = payload => (
  {
    type: actionTypes.STORE_RESULT,
    ...payload,
  }
);

/*
The only place where we can execute asynchronous code is in our action creator.
It's what redux-funk is made for and it's the common and best practice pattern.
*/
export const storeResult = payload => dispatch => (
  setTimeout(() => {
    dispatch(saveResult(payload));
  }, 2000)
);
export const deleteResult = payload => ({
  type: actionTypes.DELETE_RESULT,
  ...payload,
});
