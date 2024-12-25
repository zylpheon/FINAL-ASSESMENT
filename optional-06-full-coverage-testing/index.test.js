import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

// Uji kasus untuk penjumlahan dua angka positif
test('sum of two positive numbers', () => {
  assert.strictEqual(sum(3, 5), 8);
});

// Uji kasus untuk penjumlahan dengan angka negatif
test('sum with a negative number', () => {
  assert.strictEqual(sum(3, -5), 0);
  assert.strictEqual(sum(-3, 5), 0);
  assert.strictEqual(sum(-3, -5), 0);
});

// Uji kasus untuk penjumlahan dengan input bukan angka
test('sum with non-number inputs', () => {
  assert.strictEqual(sum(3, 'a'), 0);
  assert.strictEqual(sum('a', 5), 0);
  assert.strictEqual(sum('a', 'b'), 0);
  assert.strictEqual(sum(null, 5), 0);
  assert.strictEqual(sum(undefined, 5), 0);
  assert.strictEqual(sum({}, 5), 0);
  assert.strictEqual(sum(3, []), 0);
});

// Uji kasus untuk penjumlahan dengan input 0
test('sum with zero', () => {
  assert.strictEqual(sum(0, 5), 5);
  assert.strictEqual(sum(3, 0), 3);
  assert.strictEqual(sum(0, 0), 0);
});
