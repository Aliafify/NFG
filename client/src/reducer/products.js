import { NEW_PRODUCT,INETIALIZE_PRODUCTS, DELETE_PRODUCT, UPDATE_PRODUCT } from "../actions/product"

export const products = (state=[],action)=>{
       switch(action.type){
        case INETIALIZE_PRODUCTS:
            return state = action.products
        case NEW_PRODUCT:
            return state = [...state,action.product]
        case DELETE_PRODUCT:
            return state = state.filter((s)=>s._id!==action.id)
        case UPDATE_PRODUCT:
            return state=state.map(s=>s.id===action.id?action.product:s)
        default : return state
       }
} 
