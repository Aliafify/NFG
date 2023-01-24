import { combineReducers } from "redux";
import { loggedUser } from "./login";
import { users, admins } from "./register";
import {products} from "./products"
import {mode} from './mode'
import {appointments} from './appointment'
export default combineReducers({
 
  loggedUser,
  users,
  admins,
  products,
  mode,
  appointments,
 
});
