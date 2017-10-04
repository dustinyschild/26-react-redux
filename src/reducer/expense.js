const initialState = {};

export default (state = initialState,action = {}) => {
  const { type,payload } = action;
  switch(type){
    case 'EXPENSE_CREATE':
    {
      let { categoryId } = payload;
      let categoryExpenses = state[categoryId];
      return {
        ...state,
        [categoryId]: [
          ...categoryExpenses,
          payload
        ],
      };
    }
    case 'EXPENSE_UPDATE':
    {
      let { categoryId } = payload;
      let categoryExpenses = state[categoryId];
      return {
        ...state,
        [categoryId]: categoryExpenses.map(expense => {
          return payload.id === expense.id ? payload : expense;
        }),
      };
    }
    case 'EXPENSE_REMOVE':
    {
      let { categoryId } = payload;
      let categoryExpenses = state[categoryId];
      return {
        ...state,
        [categoryId]: categoryExpenses.filter(expense => {
          return expense.id !== payload.id;
        }),
      }
    }
    default:
      return state;
  }
};
