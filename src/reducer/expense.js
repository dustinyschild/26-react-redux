const initialState = {};

export default (state = initialState,action = {}) => {
  console.log('__STATE__',state);
  console.log('__ACTION___',action);
  const { type,payload } = action;
  switch(type){
    case 'EXPENSE_CREATE':
      return state;
    default:
      console.log('returning state');
      return state;
  }
};
