import { Dispatch } from "./Disptach.js";
import { Push, Pop } from "./Actions.js";
import { State } from "./Reducer.js";

const mapState = () => {
  const stateElement = document.getElementById("state");
  const mapElement = document.getElementById("map");
  const mapped = State.map((item) => `<li>${item}</li>`);
  mapElement.innerHTML = mapped.join("");
  stateElement.innerHTML = JSON.stringify(State);
};

const mapHtml = () => {
  const div = document.getElementById("root");
  const html = `
  <h1>
  <input type='text' id='input'/>
  <button id='push'>Push</button><button id='pop'>Pop</button>
  </h1>
  `;
  div.innerHTML = html;
};

const main = () => {
  mapState();
  mapHtml();

  document.getElementById("push").onclick = () => {
    let input = document.getElementById("input");
    Dispatch(Push(input.value));
    mapState();
    input.value = "";
  };
  document.getElementById("pop").onclick = () => {
    Dispatch(Pop());
    mapState();
  };
  console.log(State);
};
main();
