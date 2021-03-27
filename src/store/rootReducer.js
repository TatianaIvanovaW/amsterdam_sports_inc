import { combineReducers } from "redux";
import users from "./users/reducer";
import user from "./user/reducer";
import sports from "./sports/reducer";

export default combineReducers({
  users,
  user,
  sports,
});
