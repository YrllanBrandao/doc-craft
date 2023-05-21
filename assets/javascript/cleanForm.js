export function cleanForm()
{
    const label = document.getElementById("label");
    const route = document.getElementById("route");
    const description = document.getElementById("description");
    const method = document.getElementById("method");





    !!label.value ? label.value = '' : null;
    !!route.value ? route.value = '' : null;
    !!description.value ? description.value = '' : null;
    !!method.value ? method.value = 'GET' : null;

}