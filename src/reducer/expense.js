const initialState = {};

export default (state = initialState,action = {}) => {
  const { type,payload } = action;
  switch(type){
    case 'EXPENSE_CREATE':
      var categoryId = payload.categoryId;
      var categoryExpenses = state[categoryId];
      return {
        ...state,
        [categoryId]: [
          ...categoryExpenses,
          payload
        ],
      };
    case 'EXPENSE_UPDATE':
    {
      let categoryId = payload.categoryId;
      let categoryExpenses = state[categoryId];
      return {
        ...state,
        [categoryId]: categoryExpenses.map(expense => {
          console.log({expense, payload});
          return payload.id === expense.id ? payload : expense;
        }),
      };
    }
    default:
      return state;
  }
};
