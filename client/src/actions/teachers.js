import { getTeachers, setSchedual,update_Teacher } from "../utils/API"

export const INETIALIZE_WORKERS = "INETIALIZE_WORKERS"
export const SET_SCHEDUAL = "SET_SCHEDUAL"

const inetialize = (teachers)=>{
    return{
        type:INETIALIZE_WORKERS,
        teachers
    }
}
const Schedual = (schedual,id)=>{
    return {
        type:SET_SCHEDUAL,
        schedual,
        id
    }
}
export const Inetialize_Teachers = ()=>{//teachers is an array
    return (dispatch)=>{
        return getTeachers().then(res=>{
            dispatch(inetialize(res.data))
        })
    }
}
export const Set_Schedual = (schedual,id)=>{
   return (dispatch)=>{
    return setSchedual({schedual:schedual,email:id}).then((res)=>{
        if (res.status===201){
            dispatch(Schedual(schedual,id))
            alert('Saved')
        }
        else{alert('error')}
    })
   }
}
export const UPDATE_WORKERS = "UPDATE_WORKERS";

const updateTeacher = (id,teacher)=>{
return {
    type:UPDATE_WORKERS,
    id,
    teacher
}
}
export const Update_Teacher = (teacher)=>{
    return (dispatch)=>{
        return update_Teacher(teacher).then((res)=>{
            if (res.status===201){
                dispatch(updateTeacher(teacher._id,teacher))
                alert('Saved')
            }
            else{alert('error')}
        })
    }
   
}
