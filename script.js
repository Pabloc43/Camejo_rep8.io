// Actividad 1

let parrafos = document.getElementsByTagName("p");

for(let i = 0; i<parrafos.length; i++){
    parrafos[i].addEventListener("mouseover", parraOver);
    parrafos[i].addEventListener("mouseout", parraOut);
    function parraOver() {
        parrafos[i].style.color = "red";
        parrafos[i].style.fontSize = "20px";
        parrafos[i].style.border = "green 2px solid";
    }
    function parraOut() {
        parrafos[i].style.color = "black";
        parrafos[i].style.fontSize = "16px";
        parrafos[i].style.border = "none";
    }
}


// Actividad 2
let submit = document.getElementById("enviar");
let nombre;
let email;
let mensaje;

submit.addEventListener("click", function(){
    nombre = document.getElementById("Nombre").value;
    email = document.getElementById("email").value;
    mensaje = document.getElementById("mensaje").value;
    mostrarG(nombre);
})

function mostrarG(x){
    let agradecimiento = document.getElementById("gracias");
    agradecimiento.innerHTML = `Gracias ${x} por comunicarse con nosotros.`;
}

// Actividad 3
let body = document.getElementsByTagName("body")[0];
let botones = document.querySelectorAll("button");
let colores = ["red", "green", "blue", "white"];
for (let i = 0; i < botones.length; i++) {
    if (botones[i].id == "enviar" || botones[i].id == "btn5") continue;
    botones[i].addEventListener("click", function(){
        body.style.backgroundColor = `${colores[i]}`
    });  
};

// Actividad 4
let botonImagen = document.getElementById('btn5');
botonImagen.addEventListener('click', function(){
    if (!activa()) {
        divImagen.appendChild(imagen);
    } else{
        divImagen.removeChild(imagen)
    }
})

function activa(){
    return imagen.parentNode == divImagen
}
let divImagen = document.getElementById('imagenC');
let imagen = document.createElement('img');
imagen.src = './imagen.jpg';
