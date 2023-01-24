import { SET_RANK ,NEXT_QS,CORRECT_ANSWERS,QUESTION_RESULT,NEW_TRY} from "../actions/generalActions"
import { CURRENT_PRODUCT,DELETE_CURRENT } from "../actions/product"

export const general =(state={rank:null,order:0,correct:0,currentP:null},action)=>{
    switch(action.type){
        case SET_RANK:
            return state ={...state,rank:action.rank}
        case NEXT_QS:
            return {...state,order:state.order+1}
            case NEW_TRY:
            return{...state,order:0}
        case CORRECT_ANSWERS:
            return {...state,correct:state.correct+1}
        case QUESTION_RESULT:
            return {...state,result:action.result}
        case CURRENT_PRODUCT:
            return {...state,currentP:action.product}
        case DELETE_CURRENT:
            return {...state,currentP:null}   
            default : return state
    }
}