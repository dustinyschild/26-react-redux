import { combineReducers } from 'redux';

import categories from './category';
import expenses from './expense';

export default combineReducers({
  expenses,
  categories,
});
