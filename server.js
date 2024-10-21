function cifrarVigenere(mensaje, clave) {
  const abecedario = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
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
  const abecedario = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
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

// app.listen(port, () => {
//   console.log(`Servidor escuchando en http://localhost:${port}`);
// });

module.exports = {
  cifrarVigenere,
  descifrarVigenere
};
