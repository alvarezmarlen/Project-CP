
const fotoPortada = document.querySelector("#imagen");

function entrar() {
    fotoPortada.setAttribute("src", "../assets/img/carrusel/bilbao3.webp");    
}

function salir() {
    fotoPortada.setAttribute("src", "../assets/img/carrusel/bilbao2.jpg");    
}

const boton = document.querySelector("button");
boton.addEventListener("click", cambiar, true);

function cambiar(event) {
    console.log(event.target.id)

    let imagenActual = fotoPortada.getAttribute("src")

    let imagenPerro = "../assets/img/carrusel/bilbao2.jpg";
    let imagenMuseo = "../assets/img/carrusel/bilbao3.webp";

        if (imagenActual == imagenPerro) {
            fotoPortada.setAttribute("src", imagenMuseo);
        } else {
            fotoPortada.setAttribute("src", imagenPerro);
        }
}