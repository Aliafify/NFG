import { CHOOSED_TEACHER, CHOOSE_PACKAGE } from "../actions/booking";


export const booking = (state={teacher:'',start:{},package:{}},action)=>{
    switch(action.type){
       case CHOOSED_TEACHER:
        return state={...state, teacher:action.teacher}
       case CHOOSE_PACKAGE:
        return state={...state,package:action.packag}
        default: return state
    }
} 