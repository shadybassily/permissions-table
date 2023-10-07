import { combineReducers } from "redux";
import roles from "./modules/roles/Reducer";

const rootReducer = combineReducers({
  roles:roles,
});

export default rootReducer;
