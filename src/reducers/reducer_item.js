import { CURRENT_ITEM } from '../actions/index';

const ItemReducer = function ( state = 'AboutMe', action ) {
  switch (action.type) {
    case CURRENT_ITEM:
      return action.payload;
  }
  return state;
};

export default ItemReducer;
