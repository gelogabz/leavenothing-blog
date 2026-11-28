import { test } from 'node:test';
import assert from 'node:assert/strict';

import { applyBase, removeBase } from '../src/lib/base-path.ts';

const BASE = '/leavenothing-blog';

test('applyBase prefixes root-relative paths', () => {
  assert.equal(applyBase(BASE, '/journal/'), '/leavenothing-blog/journal/');
  assert.equal(applyBase(BASE, '/'), '/leavenothing-blog/');
});

test('applyBase leaves external, mailto and relative paths alone', () => {
  assert.equal(applyBase(BASE, 'https://example.com/x'), 'https://example.com/x');
  assert.equal(applyBase(BASE, 'mailto:a@b.c'), 'mailto:a@b.c');
  assert.equal(applyBase(BASE, 'photo.jpg'), 'photo.jpg');
});

test('applyBase with an empty base is a no-op', () => {
  assert.equal(applyBase('', '/journal/'), '/journal/');
});

test('removeBase strips the prefix and keeps a leading slash', () => {
  assert.equal(removeBase(BASE, '/leavenothing-blog/journal/'), '/journal/');
  assert.equal(removeBase(BASE, '/leavenothing-blog'), '/');
});

test('removeBase leaves paths without the prefix alone', () => {
  assert.equal(removeBase(BASE, '/journal/'), '/journal/');
  assert.equal(removeBase('', '/journal/'), '/journal/');
});

test('removeBase does not strip a path that merely starts with the base', () => {
  assert.equal(removeBase(BASE, '/leavenothing-blogger/'), '/leavenothing-blogger/');
});
