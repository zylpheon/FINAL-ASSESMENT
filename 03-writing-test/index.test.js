import { sum } from './index.js';
import assert from 'node:assert';
import { test } from 'node:test';

test('sum function should return the correct sum of two numbers', () => {
  assert.strictEqual(sum(1, 2), 3); // Menguji 1 + 2
  assert.strictEqual(sum(-1, 1), 0); // Menguji -1 + 1
  assert.strictEqual(sum(0, 0), 0); // Menguji 0 + 0
  assert.strictEqual(sum(-5, -5), -10); // Menguji -5 + -5
});
