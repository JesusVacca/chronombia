const hamburguesa = document.getElementById("hamburguesa");
const menu_items = document.getElementById("menu-items")

hamburguesa.onclick =()=>{
    hamburguesa.classList.toggle("activo-hamburguesa");
    menu_items.classList.toggle("activo");
}