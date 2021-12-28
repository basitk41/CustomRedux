import { useDispatch } from "../../store/store.js";
import { add_laptop } from "../../store/actions/Actions.js";
import Laptops from "./laptops.js";

export const fields = () => {
  const make = document.getElementById("laptop_make");
  const core = document.getElementById("laptop_core");
  const button = document.getElementById("add_laptop_btn");
  return { make, core, button };
};

const Form = () => {
  const dispatch = useDispatch();
  window._add_laptop = function () {
    const { make, core } = fields();
    dispatch(add_laptop({ make: make.value, core: core.value }));
    Laptops();
  };
  window._reset_laptop = function () {
    const { make, core, button } = fields();
    make.value = "";
    core.value = "";
    button.value = "Add Laptop";
  };
  return `
        <h3 style="text-align:center">Form</h3>
        <div class="form-group">
            <label>Make</label>
            <input type="text" class="form-control" id="laptop_make" />
        </div>
        <div class="form-group">
            <label>Core</label>
            <input type="text" class="form-control" id="laptop_core" />
        </div>
        <div class="form-group">
            <input type="submit" id="add_laptop_btn" class="btn btn-success" onclick="_add_laptop()" value="Add Laptop" />
            <input type="submit" id="reset_laptop_btn" class="btn btn-primary" onclick="_reset_laptop()" value="Reset" />
        </div>
        `;
};

export default Form;
