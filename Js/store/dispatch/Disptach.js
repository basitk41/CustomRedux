import { State, Reducer, setState } from "../reducer/Reducer.js";
export const Dispatch = (action) => {
  const state = Reducer(State, action);
  setState(state);
};
