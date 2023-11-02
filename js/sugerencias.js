const star_parent = document.getElementById("estrellas");
const list_star = star_parent.children;


for (let index = 0; index < list_star.length; index++) {
    const element = list_star[index];


    element.onclick = () =>{
        // Con este for quitamos a todos los div la clase star-avtive
        for(let j = 0; j < list_star.length; j++){
            const cadaEstrella = list_star[j];
            if(cadaEstrella.classList.contains("star-active"))cadaEstrella.classList.remove("star-active");
        }

        // Este for pone solo estrellas dependiendo del indice del elemento cliqueado
        for(let i = 0; i<=index; i++){
            list_star[i].classList.toggle("star-active");
        }
    }
    
}

