import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {Inetialize_Clients} from '../../actions/clients.js'
function Clients() {
 
 const dispatch = useDispatch();
 useEffect(() =>{dispatch(Inetialize_Clients)},[])

 const {clients}=useSelector(mapStateToProps);
 
 return (
    <div className='container'>Clients</div>
  )
}

function mapStateToProps({users}){
  const clients =users.clients;
  return{
    clients
  }
}
export default Clients