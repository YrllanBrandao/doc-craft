export function factory  (type='div', className=[]){

    const element = document.createElement(`${type}`);



    if(className.length <= 0)
    {
        return element;
    }
    for(const item of className)
    {
        element.classList.add(item);
    }

    return element;

}