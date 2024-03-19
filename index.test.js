// index.test.js

const { getCodeSuggestions, fetchDataFromAPI } = require('../index');

test('YAMAMOTOTEA provides code suggestions based on fetched data', async () => {
  const data = await fetchDataFromAPI(); // Получаем данные из API
  const suggestions = getCodeSuggestions(data); // Получаем кодовые предложения на основе полученных данных
  expect(suggestions).toHaveLength(3); // Проверяем, что получено 3 предложения
});
