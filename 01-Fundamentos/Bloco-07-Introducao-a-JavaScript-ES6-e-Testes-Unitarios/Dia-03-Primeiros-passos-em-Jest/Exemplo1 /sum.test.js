const { expect } = require('expect');
const sum = require('./sum');

test('verifica a soma de a + b', () => {
  expect(sum(2, 3)).toEqual(5);
})