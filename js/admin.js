const seleccionar = document.getElementsByClassName("seleccionar");
const seleccionar_todo = document.getElementById("todo");
const list_edit = document.getElementsByClassName("edit");


for (let index = 0; index < list_edit.length; index++) {
    const element = list_edit[index];
    element.onclick= () =>{
        document.getElementById("formulario-editable").style.display = "flex";
        const btn_close = document.getElementById("close");
        btn_close.onclick = () =>{
            document.getElementById("formulario-editable").style.display = "none";
        };
    };
};

seleccionar_todo.onclick = ()=>{
    if(seleccionar_todo.classList.contains("seleccionar_todo")){
        seleccionar_todo.classList.remove("seleccionar_todo");
        seleccionar_todo.title="Seleccionar todo";
        for(let i = 0; i<seleccionar.length; i++){
            if(seleccionar[i].classList.contains("activo")){
                seleccionar[i].classList.remove("activo");
            }
        }
    }
    else{
        seleccionar_todo.title="Deselecionar todo";
        seleccionar_todo.classList.add("seleccionar_todo");
        for(let i = 0; i<seleccionar.length; i++){
            if(!seleccionar[i].classList.contains("activo")){
                seleccionar[i].classList.add("activo");
            }
        }
    }
}

for(let i = 0; i<seleccionar.length; i++){
    seleccionar[i].onclick = ()=>{
        if(seleccionar[i].classList.contains("activo")){
            seleccionar[i].classList.replace("activo","desactivo");
            seleccionar[i].title="Eliminar";
        }
        else{
            seleccionar[i].title="Deselecionar";
            seleccionar[i].classList.replace("desactivo","activo");
        }
    }
}


