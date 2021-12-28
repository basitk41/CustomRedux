import { useDispatch, useSelector } from "../../store/store.js";
import { delete_user, update_user } from "../../store/actions/Actions.js";
import Users from "./users.js";
import { fields } from "./form.js";
const Table = () => {
  let index;
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  window._delete_user = function (index) {
    dispatch(delete_user(index));
    Users();
  };
  window._edit_user = function (i) {
    const { name, address, button } = fields();
    name.value = users[i].name;
    address.value = users[i].address;
    button.value = "Update User";
    button.onclick = _update_user;
    index = i;
  };
  window._update_user = function () {
    const { name, address } = fields();
    dispatch(update_user({ name: name.value, address: address.value }, index));
    index = -1;
    Users();
  };
  return `
        <h3 style="text-align:center">Table</h3>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                ${users
                  .map(
                    (user, i) =>
                      `<tr>
                        <td>${user.name}</td>
                        <td>${user.address}</td>
                        <td>
                        <button class="btn btn-info" onclick="_edit_user(${i})">Edit</button>
                        <button class="btn btn-danger" onclick="_delete_user(${i})">Delete</button>
                        </td>
                       </tr>
                      `
                  )
                  .join("")}
                </tbody>
            </table>
        `;
};
export default Table;
