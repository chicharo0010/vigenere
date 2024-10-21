const assert = require('assert');
const { cifrarVigenere, descifrarVigenere } = require('../server'); // Importa las funciones desde server.js

describe('Cifrado y Descifrado Vigenère', () => {
  
  it('Debería cifrar correctamente con Vigenère', () => {
    const mensaje = 'HELLO';
    const clave = 'KEY';
    const resultadoEsperado = 'RIJVS';
    const resultado = cifrarVigenere(mensaje, clave);
    assert.strictEqual(resultado, resultadoEsperado);
  });

  it('Debería descifrar correctamente con Vigenère', () => {
    const mensaje = 'RIJVS';
    const clave = 'KEY';
    const resultadoEsperado = 'HELLO';
    const resultado = descifrarVigenere(mensaje, clave);
    assert.strictEqual(resultado, resultadoEsperado);
  });

  it('Debería manejar correctamente los caracteres especiales y espacios', () => {
    const mensaje = 'HELLO, WORLD!';
    const clave = 'KEY';
    const resultadoEsperado = 'RIJVS, UYVJN!';
    const resultado = cifrarVigenere(mensaje, clave);
    assert.strictEqual(resultado, resultadoEsperado);
  });

  it('Debería descifrar correctamente con caracteres especiales y espacios', () => {
    const mensaje = 'RIJVS, UYVJN!';
    const clave = 'KEY';
    const resultadoEsperado = 'HELLO, WORLD!';
    const resultado = descifrarVigenere(mensaje, clave);
    assert.strictEqual(resultado, resultadoEsperado);
  });

  it('Debería manejar claves más largas que el mensaje', () => {
    const mensaje = 'HELLO';
    const clave = 'LONGKEY';
    const resultadoEsperado = 'SSYRY'; // Resultado corregido basado en el algoritmo
    const resultado = cifrarVigenere(mensaje, clave);
    assert.strictEqual(resultado, resultadoEsperado);
  });

  it('Debería descifrar correctamente cuando la clave es más larga que el mensaje', () => {
    const mensaje = 'SSYRY'; // Debe coincidir con la salida del cifrado
    const clave = 'LONGKEY';
    const resultadoEsperado = 'HELLO'; // Resultado original esperado
    const resultado = descifrarVigenere(mensaje, clave);
    assert.strictEqual(resultado, resultadoEsperado);
  });

});
