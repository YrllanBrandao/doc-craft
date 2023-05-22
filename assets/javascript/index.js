import { render } from "./render.js";
import { cleanForm } from "./cleanForm.js";
import { modal } from "./modal.js";
const form = document.getElementById("form-options");
const buttonGenMarkdown = document.getElementById("btn-code");
const modalCode = document.getElementById("modal-code");
const resultMarkdown = document.getElementById("result-markdown");
const buttonCopy = document.getElementById("btn-copy");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  render();

  cleanForm();
});

buttonGenMarkdown.addEventListener("click", () => {
  modal();
});

modalCode.addEventListener("click", (e) => {
  if (e.target.id !== "result-markdown" && e.target.id !== "btn-copy") {
    modal();
  }
});

buttonCopy.addEventListener("click", () => {
  const content = resultMarkdown.value;
  window.navigator.clipboard.writeText(content);
  alert("copied!!");
});
