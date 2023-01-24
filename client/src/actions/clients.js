import {getClients} from "../utils/API"
export const INETIALIZE_CLIENTS = 'INETIALIZE_CLIENTS'
export const UPDATE_CLIENTS = 'UPDATE_CLIENTS'
export const DELETE_CLIENTS = 'DELETE_CLIENTS'

const inetializeClients = (clients)=>{
    return {
        type: INETIALIZE_CLIENTS,
        clients    }
}
export const Inetialize_Clients =()=>{
    return(dispatch)=>{
        return getClients().then((res)=>dispatch(inetializeClients(res.data))
        )
    }
}