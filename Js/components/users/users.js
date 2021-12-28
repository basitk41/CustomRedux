import Form from "./form.js";
import Table from "./table.js";

const Users = () => {
  const html = `
  <div class="container">
    <h2 style="text-align:center">Users</h2>
    <hr />
    <div class="row">
        <div class="col-sm-6">
            ${Form()}
        </div>
        <div class="col-sm-6" style="overflow: auto; max-height: 100vh;">
            ${Table()}
        </div>
    </div>
  </div>
  `;
  document.getElementById("users").innerHTML = html;
};
export default Users;
