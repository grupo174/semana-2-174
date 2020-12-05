//Obtenemos la instancia del boton
var mybutton = document.getElementById("miBoton");
            
// Cuando el usuario bajá hasta 20px desde la parte superior de la pantalla,
// se muestra el botón
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Cuando el usuario clickea en el botón, Se lleva a el usuario a la parte superior 
// de la página
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}