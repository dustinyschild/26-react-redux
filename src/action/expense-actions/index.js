import uuid from 'uuid/v1';

export const expenseCreate = expense => {
  return {
    type: 'EXPENSE_CREATE',
    payload: {
      ...expense,
      id: uuid(),
      timestamp: new Date(),
    }
  };
};

export const expenseUpdate = expense => {
  return {
    type: 'EXPENSE_UPDATE',
    payload: expense
  };
};

export const expenseRemove = expense => {
  return {
    type: 'EXPENSE_REMOVE',
    payloald: expense
  };
};
