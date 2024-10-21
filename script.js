const abecedario = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function generarMatriz() {
    const matrizDiv = document.getElementById('matriz');
    let tabla = '<table border="1">';
    for (let i = 0; i < abecedario.length; i++) {
        tabla += '<tr>';
        for (let j = 0; j < abecedario.length; j++) {
            tabla += `<td>${abecedario[(i + j) % abecedario.length]}</td>`;
        }
        tabla += '</tr>';
    }
    tabla += '</table>';
    matrizDiv.innerHTML = tabla;
}

function cifrarVigenere(mensaje, clave) {
    let resultado = '';
    let j = 0; // Índice para la clave
    for (let i = 0; i < mensaje.length; i++) {
        const letra = mensaje[i].toUpperCase();
        if (abecedario.includes(letra)) {
            const posLetra = abecedario.indexOf(letra);
            const posClave = abecedario.indexOf(clave[j % clave.length].toUpperCase());
            const nuevaPos = (posLetra + posClave) % abecedario.length;
            resultado += abecedario[nuevaPos];
            j++; // Solo incrementar si la letra es válida
        } else {
            resultado += letra; // Mantener los caracteres especiales y espacios
        }
    }
    return resultado;
}

function descifrarVigenere(mensaje, clave) {
    let resultado = '';
    let j = 0; // Índice para la clave
    for (let i = 0; i < mensaje.length; i++) {
        const letra = mensaje[i].toUpperCase();
        if (abecedario.includes(letra)) {
            const posLetra = abecedario.indexOf(letra);
            const posClave = abecedario.indexOf(clave[j % clave.length].toUpperCase());
            const nuevaPos = (posLetra - posClave + abecedario.length) % abecedario.length;
            resultado += abecedario[nuevaPos];
            j++; // Solo incrementar si la letra es válida
        } else {
            resultado += letra; // Mantener los caracteres especiales y espacios
        }
    }
    return resultado;
}

document.getElementById('formCifrar').addEventListener('submit', function(event) {
    event.preventDefault();
    const mensaje = document.getElementById('mensaje').value;
    const clave = document.getElementById('clave').value;
    const resultado = cifrarVigenere(mensaje, clave);
    document.getElementById('resultadoCifrado').textContent = resultado;
});

document.getElementById('formDescifrar').addEventListener('submit', function(event) {
    event.preventDefault();
    const mensaje = document.getElementById('mensaje-descifrar').value;
    const clave = document.getElementById('clave-descifrar').value;
    const resultado = descifrarVigenere(mensaje, clave);
    document.getElementById('resultadoDescifrado').textContent = resultado;
});

// Generar la matriz de letras al cargar la página
generarMatriz();
