import * as actionTypes from './actionTypes';
/*
Action Creators
It is common to use action creator functions to encapsulate the process of creating action objects.
This may seem like overkill for simple use cases, but consistent use of action creators
leads to cleaner code and better reusability.
Action creators are not required, but are a good practice.
In addition, action creators are useful for handling asynchronous code. */
export const increment = () => ({
  type: actionTypes.INCREMENT,
});
export const decrement = () => ({
  type: actionTypes.DECREMENT,
});
export const add = payload => ({
  type: actionTypes.ADD,
  ...payload,
});
export const subtract = payload => ({
  type: actionTypes.SUBTRACT,
  ...payload,
});
