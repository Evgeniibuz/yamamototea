// math.test.js

const { add, subtract } = require('../src/components/math');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds 5 + 7 to equal 12', () => {
  expect(add(5, 7)).toBe(12);
});

test('subtracts 5 - 2 to equal 3', () => {
  expect(subtract(5, 2)).toBe(3);
});

test('subtracts 10 - 7 to equal 3', () => {
  expect(subtract(10, 7)).toBe(3);
});
