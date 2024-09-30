let intervalId;
let colorPhase = 0;

document.getElementById('botonDemon1').addEventListener('click', function() {
    document.getElementById('inicio').style.display = 'none';
    var resultado = document.getElementById('resultado');
    resultado.style.display = 'block';
    var imagen = document.getElementById('imagenDemon1');
    imagen.src = 'imagenes/demonio.jpg'; // Corregido el nombre del archivo de imagen
    imagen.style.display = 'block';
    document.getElementById('cancion').play();

    document.getElementById('stopEffect').style.display = 'block';

    // Efecto de colores aleatorios
    intervalId = setInterval(function() {
        resultado.style.backgroundColor = getRandomColor();
    }, 16); // Aproximadamente 60 fps
});

document.getElementById('stopEffect').addEventListener('click', function() {
    clearInterval(intervalId);
    document.getElementById('resultado').style.animation = 'none';
    document.getElementById('resultado').style.backgroundColor = 'transparent';
    this.style.display = 'none';
});

function getRandomColor() {
    // Incrementamos la fase para la animación
    colorPhase += 0.05;
    
    // Usamos una función seno para oscilar entre 0 y 1
    let factor = (Math.sin(colorPhase) + 1) / 2;
    
    // Definimos los componentes RGB del celeste
    let celesteR = 135;
    let celesteG = 206;
    let celesteB = 235;
    
    // Interpolamos entre blanco (255,255,255) y celeste
    let red = Math.round(255 - (255 - celesteR) * factor);
    let green = Math.round(255 - (255 - celesteG) * factor);
    let blue = Math.round(255 - (255 - celesteB) * factor);
    
    return `rgb(${red},${green},${blue})`;
}
