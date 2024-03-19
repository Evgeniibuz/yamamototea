// index.test.js

const { getCodeSuggestions } = require('../index'); // Подключаем файл с основным кодом проекта

test('getCodeSuggestions returns an array of code suggestions', () => {
  const suggestions = getCodeSuggestions('function hello() { return "Hello, world!"; }');
  expect(Array.isArray(suggestions)).toBe(true); // Проверяем, что функция возвращает массив предложений
});
