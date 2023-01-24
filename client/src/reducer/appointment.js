import {NEW_APPOINTMENT,INETIALIZE_APPOINTMENTS} from '../actions/appointmens'
export const appointments = (state=[],action)=>{
  switch(action.type){
    case NEW_APPOINTMENT:
        return state = [...state,...action.appointment]
    case INETIALIZE_APPOINTMENTS:
        return state = action.appointments
    default : return state
  }
}