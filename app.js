// Obtenemos una referencia al botón
var button = document.getElementById('button');

// Obtenemos una referencia al contenedor
var container = document.querySelector('.container');

// Array con las rutas de las imágenes
var imagenes = [
  'imagenes/imagen1.jpg',
  'imagenes/imagen2.jpg',
  'imagenes/imagen3.jpg',
  'imagenes/imagen4.jpg',
  'imagenes/imagen5.jpg',
  'imagenes/imagen6.jpg',
];

// Función para cambiar la imagen del contenedor
function cambiarImagen() {
    // Generamos un número aleatorio entre 0 y el número de imágenes disponibles
    var indiceAleatorio = Math.floor(Math.random() * imagenes.length);
  
    // Cambiamos la imagen de fondo del contenedor
    container.style.backgroundImage = 'url(' + imagenes[indiceAleatorio] + ')';
}

// Asignamos el evento click al botón para llamar a la función cambiarImagen
button.addEventListener('click', cambiarImagen);
