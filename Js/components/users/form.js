import { useDispatch } from "../../store/store.js";
import { add_user } from "../../store/actions/Actions.js";
import Users from "./users.js";

export const fields = () => {
  const name = document.getElementById("user_name");
  const address = document.getElementById("user_address");
  const button = document.getElementById("add_user_btn");
  return { name, address, button };
};

const Form = () => {
  const dispatch = useDispatch();
  window._add_user = function () {
    const { name, address } = fields();
    dispatch(add_user({ name: name.value, address: address.value }));
    Users();
  };
  window._reset_user = function () {
    const { name, address, button } = fields();
    name.value = "";
    address.value = "";
    button.value = "Add User";
  };
  return `
        <h3 style="text-align:center">Form</h3>
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" id="user_name" />
            </div>
            <div class="form-group">
                <label>Address</label>
                <input type="text" class="form-control" id="user_address" />
            </div>
            <div class="form-group">
                <input type="submit" id="add_user_btn" class="btn btn-success" onclick="_add_user()" value="Add User" />
                <input type="submit" id="reset_user_btn" class="btn btn-primary" onclick="_reset_user()" value="Reset" />
            </div>
        `;
};

export default Form;
