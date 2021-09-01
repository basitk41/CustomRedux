import * as Constants from "./Constants.js";
export let State = [];
export const Reducer = (state = State, action) => {
  switch (action.type) {
    case Constants.PUSH:
      return [...state, action.element];
    case Constants.POP:
      state.pop();
      return [...state];
    default:
      return state;
  }
};
export const setState = (state) => {
  State = state;
};
