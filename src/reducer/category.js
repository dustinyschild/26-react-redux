const initialState = [];

export default (state = initialState,action = {}) => {
  const { type,payload } = action;

  switch(type){
    case 'CATEGORY_CREATE':
      return [...state,payload];
    case 'CATEGORY_UPDATE':
      return state.map(category => {
        return category.id === payload.id ?
          payload : category;
      });
    case 'CATEGORY_REMOVE':
      return state.filter(category => {
        return category.id !== payload.id;
      });
    default:
      return state;
  }
};
