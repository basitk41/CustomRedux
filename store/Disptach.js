import { State, Reducer, setState } from "./Reducer.js";
export const Dispatch = (action) => {
  const state = Reducer(State, action);
  setState(state);
};
