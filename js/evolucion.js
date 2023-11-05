const boton_desplegar = document.getElementsByClassName("boton");


for (let index = 0; index < boton_desplegar.length; index++) {
    const element = boton_desplegar[index];
    element.onclick = ()=>{
        element.classList.toggle("activo");
        const desplegable = document.getElementsByClassName("desplegable"); 
        desplegable[index].classList.toggle("desplegable-activo");
    }
    
}