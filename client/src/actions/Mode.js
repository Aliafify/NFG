export const SET_MODE = 'SET_MODE';
const setMode = ()=>{
    return{
        type:SET_MODE
    }
}
export const Set_Mode = ()=>{
    return (dispatch)=>{
dispatch(setMode())
    }
    
}