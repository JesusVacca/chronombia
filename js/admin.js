const btn_all = document.getElementById("all");
const list_selection = document.getElementsByClassName("check");
const tabla_datos = document.getElementById("table");
const table_body = tabla_datos.children[1];

// Formulario de agregar nuevo admin
const form_admin = document.getElementById("add-items");
// Botones de accion del formulario

const close_btn = document.getElementById("close");
const add_btn = document.getElementById("add_btn");
close_btn.onclick = ()=>{
    form_admin.classList.toggle("form-activo");
}

add_btn.onclick = ()=>{
    form_admin.classList.toggle("form-activo");
}



btn_all.onclick = ()=>{
    for (let index = 0; index < list_selection.length; index++) {
        const element = list_selection[index];
        element.checked = !element.checked;        
        console.log(index)
        seleccionarUno(index,"activo");
    }
}

for (let index = 0; index < list_selection.length; index++) {
    const element = list_selection[index];
    element.addEventListener('change',()=>{
        seleccionarUno(index,"activo");
    })
    
}

function seleccionarUno(index,className){
    let row = table_body.children[index];
    row.classList.toggle(className);
}
