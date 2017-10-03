import deepFreeze from 'deep-freeze';

import reducer from '../';

const defaultState = {
  categories: [],
  expenses: {}
};
deepFreeze(defaultState);

test('initial state should be default',() => {
  let res = reducer();
  expect(res).toEqual(defaultState);
});

test('invalid action returns state',() => {
  const state = defaultState;
  const action = {
    type: 'UNKNOWN',
  };

  deepFreeze(action);

  let res = reducer(state, action);

  expect(res).toEqual(state);
});

test('creates expense',() => {
  const categoryId = 10;
  const state = {
    [categoryId]: [
      { categoryId,id: 6,title: 'Old Expense'},
    ]
  };
  const action = {
    type: 'EXPENSE_CREATE',
    payload: {
      title: 'New Expense',
      id: 8,
      categoryId
    }
  };

  deepFreeze(state);
  deepFreeze(action);

  let res = reducer(state,action);
  expect(res).toEqual({
    10: [
      { categoryId,id: 6,title: 'Old Expense' },
      { categoryId,id: 8,title: 'New Expense'}
    ]
  })
});
