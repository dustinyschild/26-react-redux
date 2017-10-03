import deepFreeze from 'deep-freeze';

import category from './category';

test('initial state should be an empty array',() => {
  let res = category();
  expect(res).toEqual([]);
});

test('invalid action should return current state',() => {
  const state = [];
  const action = {
    type: 'UNKNOWN'
  };

  deepFreeze([state,action]);


  const res = category(state,action);
  expect(res).toEqual(state);
});

test('create category',() => {
  const state = [{ title: 'Utilities' }];
  const action = {
    type: 'CATEGORY_CREATE',
    payload: { title: 'Groceries' }
  };

  deepFreeze(state,action);

  const res = category(state,action);
  expect(res).toEqual([
    { title: 'Utilities' },
    { title: 'Groceries' }
  ]);
});

test('update category',() => {
  const state = [
    { id: 0,title: 'Utilities' },
    { id: 1,title: 'Groceries' }
  ];
  const action = {
    type: 'CATEGORY_UPDATE',
    payload: { id: 1,title: 'Food' }
  };

  deepFreeze([state,action]);

  const res = category(state,action);
  expect(res).toEqual([
    { id: 0,title: 'Utilities'},
    { id: 1,title: 'Food' }
  ]);
});

test('remove category',() => {
  const state = [{ id: 0,title: 'Food'}];
  const action = {
    type: 'CATEGORY_REMOVE',
    payload: { id: 0 }
  };

  deepFreeze([state,action]);

  const res = category(state,action);
  expect(res).toEqual([]);
});
