import {factory} from './factory.js';
function convertHtmlToMarkdown(html) {
    const containerRegex = /<div class="container-fluid content-row">([^]+?)<\/div>/;
    const labelRegex = /<h2 class="text-2">([^<]+)<\/h2>/;
    const hrRegex = /<hr>/;
    const descriptionRegex = /<p class="text-simple">([^<]+)<\/p>/;
    const methodRegex = /<h2 class="text-2">Method<\/h2>\s*<li class="text-simple">([^<]+)<\/li>/;
    const routeRegex = /<h2 class="text-2">Route<\/h2>\s*<li class="text-simple">([^<]+)<\/li>/;
  
    const containerMatch = html.match(containerRegex);
    if (!containerMatch) {
      return '';
    }
    const [, containerContent] = containerMatch;
  
    const labelMatch = containerContent.match(labelRegex);
    const label = labelMatch ? labelMatch[1] : '';
    const hr = containerContent.match(hrRegex) ? '' : '';
    const descriptionMatch = containerContent.match(descriptionRegex);
    const description = descriptionMatch ? descriptionMatch[1] : '';
    const methodMatch = containerContent.match(methodRegex);
    const method = methodMatch ? methodMatch[1] : '';
    const routeMatch = containerContent.match(routeRegex);
    const route = routeMatch ? routeMatch[1] : '';
  
    return `## ${label}\n${hr}\n\n${description}\n\n**Method**\n\n${method}\n\n**Route**\n\n${route}\n`;
  }


export function render()
{
    const className = ['container-fluid','content-row']
    const label = document.getElementById("label").value;
    const route = document.getElementById("route").value;
    const description = document.getElementById("description").value;
    const method = document.getElementById("method").value;
    const target = document.getElementById("result-html");
    const targetMD = document.getElementById("result-markdown");
    const block = factory('div', className);

    const htmlBlock = `
        <div class="container-fluid content-row">
        <h2 class="text-2">${label}</h2>
        ${label ? '<hr>' : ''}
        <p class="text-simple">${description}</p>
        <h2 class="text-2">Method</h2>
        <li class="text-simple">${method}</li>
        <h2 class="text-2">Route</h2>
        <li class="text-simple">${route}</li>
        </div>
        `;


        
    block.innerHTML += htmlBlock;
    targetMD.innerHTML += convertHtmlToMarkdown(htmlBlock)

    target.append(block);

    console.log(targetMD.innerHTML)
    
}
