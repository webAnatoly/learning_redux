import * as actionTypes from './actionTypes';

export const saveResult = payload => (
  {
    type: actionTypes.STORE_RESULT,
    ...payload,
  }
);

export const storeResult = payload => dispatch => (
  setTimeout(() => {
    dispatch(saveResult(payload));
  }, 2000)
);
export const deleteResult = payload => ({
  type: actionTypes.DELETE_RESULT,
  ...payload,
});
