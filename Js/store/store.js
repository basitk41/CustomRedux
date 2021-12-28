import { Dispatch } from "./dispatch/Disptach.js";
import { State } from "./reducer/Reducer.js";
export const useDispatch = () => {
  return Dispatch;
};
export const useSelector = (callback) => {
  return callback(State);
};
