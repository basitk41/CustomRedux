import * as Constants from "./Constants.js";
export const Push = (element) => {
  return {
    type: Constants.PUSH,
    element,
  };
};
export const Pop = () => {
  return {
    type: Constants.POP,
  };
};
