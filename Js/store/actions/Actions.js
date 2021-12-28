import * as Constants from "../constants/Constants.js";
import { storage } from "../../utils/storage.js";
// users actions
export const get_users = () => {
  return {
    type: Constants.GET_USERS,
  };
};
export const add_user = (payload) => {
  return {
    type: Constants.ADD_USER,
    payload,
  };
};
export const delete_user = (payload) => {
  return {
    type: Constants.DELETE_USER,
    payload,
  };
};
export const update_user = (payload, index) => {
  return {
    type: Constants.UPDATE_USER,
    payload,
    index,
  };
};

// laptops actions
export const get_laptops = () => {
  return {
    type: Constants.GET_LAPTOPS,
  };
};
export const add_laptop = (payload) => {
  return {
    type: Constants.ADD_LAPTOP,
    payload,
  };
};
export const delete_laptop = (payload) => {
  return {
    type: Constants.DELETE_LAPTOP,
    payload,
  };
};
export const update_laptop = (payload, index) => {
  return {
    type: Constants.UPDATE_LAPTOP,
    payload,
    index,
  };
};
