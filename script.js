import { UserComponent } from "./component.js";

const text = {
  h1: "Вид кнопки Primary",
  button: "Primary",
  p: "Кнопка описывающая обычное поведение интерфейса",
};
// меняем внешний вид элемента страницы
const view = {
  width: "30%",
  height: "40px",
  border: "2px solid #1253a2",
};
const eventComponent = {
  click: (event) => {
    console.log("onclick", event.target.innerText);
  },
  focus: (event) => {
    console.log("onfocus", event.target.innerText);
  },
};
const eventComponentText = {
  onclick: "((event)=>{console.log('onclick',event.target.innerText);})",
  onfocus: "((event)=>{console.log('onfocus',event.target.innerText);})",
};
//тонкая настройка
const modify = {
  "font-size": "20px",
  "font-family": "Arial",
  "background-color": "yellow",
};
const template = `
  <div class='container'>
    <h1>${text.h1}</h1>
    <button type="button" id="custom_button">${text.button}</button>
    <p>${text.p}</p>
  </div>`;

function viewParameter(id, value) {
  const element = document.getElementById(id);
  element.innerText = `${id} : ${value}`;
}

function onGenerate() {
  const component = new UserComponent(
    ".container",
    template,
    view,
    modify,
    text,
    eventComponent
  );
  const element = component.render();
  component.setStyle(element);
  component.setModifyStyle(element);
  component.setEvent(element);
}

function setView(selector) {
  const name = selector.innerText;
  switch (name) {
    case "template":
      viewParameter(name, template);
      break;
    case "text":
      viewParameter(name, JSON.stringify(text, null, 0));
      break;
    case "modify":
      viewParameter(name, JSON.stringify(modify, null, 0));
      break;
    case "view":
      viewParameter(name, JSON.stringify(view, null, 0));
      break;
    case "event":
      viewParameter(name, JSON.stringify(eventComponentText, null, 0));
      break;
    default:
      break;
  }
  selector.classList.add("disabled");
}

window.addEventListener("load", () => {
  const generate_btn = document.getElementById("generate_btn");
  generate_btn.addEventListener("click", onGenerate);

  const template_btn = document.getElementById("template_view");
  template_btn.addEventListener("click", () => setView(template_btn));

  const text_btn = document.getElementById("text_view");
  text_btn.addEventListener("click", () => setView(text_btn));

  const view_btn = document.getElementById("view_view");
  view_btn.addEventListener("click", () => setView(view_btn));

  const modify_btn = document.getElementById("modify_view");
  modify_btn.addEventListener("click", () => setView(modify_btn));

  const event_btn = document.getElementById("event_view");
  event_btn.addEventListener("click", () => setView(event_btn));
});
