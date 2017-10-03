import deepFreeze from 'deep-freeze';

import category from './category';

test('initial state should be an empty array',() => {
  let res = category();
  expect(res).toEqual([]);
});
