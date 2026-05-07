
/* AQUI TENGO LO DE LAS CONDICIONES */
const chequearCondiciones = document.getElementById("condiciones")
const enviar = document.getElementById("botonEnviar");
const formulario = document.querySelector("form")

/* AQUI TENGO LO DE MOSTRAR EL OJO */
const imagenOjo = document.getElementById("img1")
const botonOjo = document.getElementById("btnOjo")
const campoPassword = document.getElementById("password")

botonOjo.addEventListener("click", verClave);

function verClave(event)  {
    event.preventDefault();

    let imagenActual = imagenOjo.getAttribute("src");
    let ojoCerrado = "../assets/img/ojoCerrado1.jpg";
    let ojoAbierto = "../assets/img/ojoAbierto1.jpg";

    if (imagenActual == ojoCerrado) {
        imagenOjo.setAttribute("src", ojoAbierto);
        campoPassword.setAttribute("type", "text");
    } else {
        imagenOjo.setAttribute("src", ojoCerrado);
        campoPassword.setAttribute("type", "password");
    }
}



/* LA FUNCION  DE ACEPTAR LAS CONDICIONES */
chequearCondiciones.onclick = function() {
    enviar.disabled = !chequearCondiciones.checked;
};


formulario.onsubmit = function(event) {
      event.preventDefault(); 

    alert("✅ Validada las Condiciones");

    formulario.reset(); 
    enviar.disabled = true; 
};


