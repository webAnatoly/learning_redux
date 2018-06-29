export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

/*
Action Creators
It is common to use action creator functions to encapsulate the process of creating action objects.
This may seem like overkill for simple use cases, but consistent use of action creators
leads to cleaner code and better reusability.
Action creators are not required, but are a good practice.
In addition, action creators are useful for handling asynchronous code. */
export const increment = () => ({
  type: INCREMENT,
});
export const decrement = () => ({
  type: DECREMENT,
});
export const add = payload => ({
  type: ADD,
  ...payload,
});
export const subtract = payload => ({
  type: SUBTRACT,
  ...payload,
});
export const storeResult = payload => ({
  type: STORE_RESULT,
  ...payload,
});
export const deleteResult = payload => ({
  type: DELETE_RESULT,
  ...payload,
});
