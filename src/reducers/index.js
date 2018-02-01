import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ItemReducer from './reducer_item';

const rootReducer = combineReducers({
  item: ItemReducer,
  form: formReducer
});

export default rootReducer;
