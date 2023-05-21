import {render} from "./render.js";
import { cleanForm } from "./cleanForm.js";
const form = document.getElementById("form-options");


form.addEventListener("submit", (event)=>{
    event.preventDefault();

    render()

    cleanForm();
})

