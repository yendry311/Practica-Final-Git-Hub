// prueba.test.js
test('La página muestra "Hola Mundo"', () => {
  const titulo = document.querySelector('h1').textContent;
  expect(titulo).toBe('Hola Mundo');
});
