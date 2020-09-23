import { combineReducers } from 'redux';

import user from './reducers/userReducers';
import tickets_list from './reducers/tickets_list_Reducers';

export default combineReducers({
  user,
  tickets_list,
});
