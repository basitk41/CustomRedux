import * as Constants from "../constants/Constants.js";
import { storage } from "../../utils/storage.js";
export let State = {
  users: [],
  laptops: [],
};
export const Reducer = (state = State, action) => {
  let users;
  let laptops;
  switch (action.type) {
    // users cases
    case Constants.GET_USERS:
      users = storage.get("users") || [];
      return {
        ...state,
        users,
      };
    case Constants.ADD_USER:
      users = State.users.concat(action.payload);
      storage.set("users", users);
      return {
        ...state,
        users,
      };
    case Constants.DELETE_USER:
      users = [...state.users];
      users.splice(action.payload, 1);
      storage.set("users", users);
      return {
        ...state,
        users,
      };
    case Constants.UPDATE_USER:
      users = [...state.users];
      users.splice(action.index, 1, action.payload);
      storage.set("users", users);
      return {
        ...state,
        users,
      };

    //laptops cases
    case Constants.GET_LAPTOPS:
      laptops = storage.get("laptops") || [];
      return {
        ...state,
        laptops,
      };
    case Constants.ADD_LAPTOP:
      laptops = State.laptops.concat(action.payload);
      storage.set("laptops", laptops);
      return {
        ...state,
        laptops,
      };
    case Constants.DELETE_LAPTOP:
      laptops = [...state.laptops];
      laptops.splice(action.payload, 1);
      storage.set("laptops", laptops);
      return {
        ...state,
        laptops,
      };
    case Constants.UPDATE_LAPTOP:
      laptops = [...state.laptops];
      laptops.splice(action.index, 1, action.payload);
      storage.set("laptops", laptops);
      return {
        ...state,
        laptops,
      };
    default:
      return state;
  }
};
export const setState = (state) => {
  State = state;
};
