import { useDispatch, useSelector } from "../../store/store.js";
import { delete_laptop, update_laptop } from "../../store/actions/Actions.js";
import Laptops from "./laptops.js";
import { fields } from "./form.js";
const Table = () => {
  let index;
  const dispatch = useDispatch();
  const laptops = useSelector((state) => state.laptops);
  window._delete_laptop = function (index) {
    dispatch(delete_laptop(index));
    Laptops();
  };
  window._edit_laptop = function (i) {
    const { make, core, button } = fields();
    make.value = laptops[i].make;
    core.value = laptops[i].core;
    button.value = "Update Laptop";
    button.onclick = _update_laptop;
    index = i;
  };
  window._update_laptop = function () {
    const { make, core } = fields();
    dispatch(update_laptop({ make: make.value, core: core.value }, index));
    index = -1;
    Laptops();
  };
  return `
        <h3 style="text-align:center">Table</h3>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Make</th>
                    <th>Core</th>
                    <th>Action</th>
                    </tr>
            </thead>
            <tbody>
            ${laptops
              .map(
                (laptop, i) =>
                  `<tr>
                    <td>${laptop.make}</td>
                    <td>${laptop.core}</td>
                    <td>
                    <button class="btn btn-info" onclick="_edit_laptop(${i})">Edit</button>
                    <button class="btn btn-danger" onclick="_delete_laptop(${i})">Delete</button>
                    </td>
                </tr>`
              )
              .join("")}
            </tbody>
        </table>
        `;
};
export default Table;
