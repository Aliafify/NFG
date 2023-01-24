import {
  REGISTER_WORKERS,
  REGISTER_CLIENTS,
  REGISTER_ADMIN,
} from "../actions/login&register";

import {INETIALIZE_CLIENTS} from "../actions/clients"
import { INETIALIZE_WORKERS, SET_SCHEDUAL,UPDATE_WORKERS } from "../actions/teachers";

export const users = (state = { workers: [], clients:[] }, action) => {
  switch (action.type) {
    case REGISTER_WORKERS:
      return state = { ...state, workers: [...state.workers, action.user] };
    case REGISTER_CLIENTS:
      return state = { ...state, clients: [...state.clients, action.user] };
    case INETIALIZE_CLIENTS:
      return state = {...state, clients: action.clients };
      case INETIALIZE_WORKERS:
      return state={...state,workers:action.workers}
    case SET_SCHEDUAL:
        const newworkers = state.workers.map(t=>{if(t.email===action.id){return t.schedual=action.schedual}})
      return state = {...state, workers:newworkers}
    case UPDATE_WORKERS:
      return state = {...state, workers: state.workers.map((t)=>{
        if(t._id===action.id)return action.worker;
        else return t })}
        
     default: return state
    }
};
export const admins = (state = [], action) => {
  switch (action.type) {
    case REGISTER_ADMIN:
      return (state = [...state, action.user])
    default: return state
  }
};
