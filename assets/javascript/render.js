import {factory} from './factory.js';
export function render()
{
    const className = ['container-fluid','content-row']
    const label = document.getElementById("label").value;
    const route = document.getElementById("route").value;
    const description = document.getElementById("description").value;
    const method = document.getElementById("method").value;
    const target = document.getElementById("result-html");
    const block = factory('div', className);

    block.innerHTML += `<h2 class="text-2">${label}</h2> `;
    block.innerHTML += !!label ? `<hr/>`: null;
    block.innerHTML += `<p class="text-simple">${description}</p>`

    block.innerHTML += `<h2 class="text-2">Method</h2> `;
    block.innerHTML += ` <li class="text-simple"> ${method}</li>`

    block.innerHTML += `<h2 class="text-2"> Route</h2>`
    block.innerHTML += ` <li class="text-simple"> ${route}</li>`
    target.append(block);
   
    
}
