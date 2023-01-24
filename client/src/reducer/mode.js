import {SET_MODE} from '../actions/Mode'
export const mode = (state={color:'#333'},action)=>{
    switch(action.type){
      case SET_MODE:
        const color = state.color==='#333'?'#333':'#fff'
        return state={...state,color:color}
        default : return state
    }
}