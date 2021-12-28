import Form from "./form.js";
import Table from "./table.js";
const Laptops = () => {
  const html = `
  <div class="container">
    <h2 style="text-align:center">Laptops</h2>
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
  document.getElementById("laptops").innerHTML = html;
};
export default Laptops;
