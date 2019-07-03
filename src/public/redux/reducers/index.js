import { combineReducers } from 'redux';
// import all reducers
import notes from './notes';
import categories from './categories';

// combine item
const appReducer = combineReducers({
  notes: notes,
  categories: categories
});

export default appReducer;