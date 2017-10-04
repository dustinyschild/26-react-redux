const initialState = {};

export default (state = initialState,action = {}) => {
  const { type,payload } = action;
  switch(type){
    case 'EXPENSE_CREATE':
      var { categoryId } = payload;
      var categoryExpenses = state[categoryId];
      return {
        ...state,
        [categoryId]: [
          ...categoryExpenses,
          payload
        ],
      };
    default:
      console.log('returning state',state);
      return state;
  }
};
