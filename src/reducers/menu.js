
import { UPDATE_MENU,ADD_MENU,CLOSE_MENU,EDIT_ITEM_SUCCESSFULL} from '../actions/actionTypes';

export default function menus(state = [], action) {
  // { posts : [] }

  switch (action.type) {
    case UPDATE_MENU:
      return action.menu;

    case EDIT_ITEM_SUCCESSFULL:
      return action.inventories

    case ADD_MENU:
      return [action.menu, ...state];

      

    default:
      return state;
  }
}


