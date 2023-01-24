import axios from "axios";

const urlBase = 'http://localhost:8081'
// ----------Register--------
export const register=(data)=>{
  console.log(data)
  const url =`${urlBase}/api/register/${data.role}` 
 return axios({
    method: "POST",
    data: data,
    withCredentials: true,
    url: url,
  })
}
//--------check login statue when reload or new session-----------
export const intializeUser= ()=>{
  return fetch(`${urlBase}/api/auth`,{
     credentials: "include",
   }).then(res=>res.json()).then(user=>(user)).catch(err=>{console.log(err)})
}
//------- logOut --------
export const logOut =()=>{
 
  return fetch(`${urlBase}/api/logout`,{  
    credentials: "include",
  }) 
} 

// --------  login------
export const getAuthedUser = (authentcation)=>{
  console.log(authentcation)
  return  axios({ 
      method: "POST",
      data: {
        username: authentcation.email,
        password: authentcation.password,
      },
      withCredentials: true,
      url: `${urlBase}/api/login`,
      
    }).then((res) => (res.data));
}
//----- uploading files------

export const uploading = (files)=>{
  return axios({
    method:'POST',
    data:files,
    withCredentials:true,
    url:`${urlBase}/api/upload`
  })
}
//----------Quize End Points
export const quizeRank = (score) => {
  return axios({
    method: "POST",
    data: { score: score },
    withCredentials: true,
    url: `${urlBase}/api/rank`,
  }).then((res) => res.data.rank);
};
export const getQS = () => {
  return axios({
    method: "get",
    url: `${urlBase}/api/words`,
    responseType: "json",
  });
}
//------- teachers end point-----
export const getTeachers=()=>{
   return axios({
    method:"get",
    url:`${urlBase}/api/getteachers`
   })
}
//-------- set schedual-------
export const setSchedual = (data)=>{
  return axios({
    method:'POST',
    data:data,
    withCredentials:true,
    url:`${urlBase}/api/teacher/schedual`
  })
}
export const update_Teacher = (teacher)=>{
  console.log(teacher)
  return axios({
    method:'POST',
    data:teacher,
    withCredentials:true,
    url:`${urlBase}/api/teacher/update`
  })
}
//-------- Students end points-----

export const getClients=()=>{
  return axios({
    method:'get',
    url:`${urlBase}/api/Clients/get`,
    responseType: "json",
  });
}
// -----------Appointments ----------------

// fetch all
export const getAppointments =async ()=>{
  return axios({
    method:'get',
    url:`${urlBase}/api/get/appointments`,
    responseType:"json",
  }).then(data => {console.log(data); return data})
}
// 
export const createAppointment =(data)=>{
   return axios({
    method:'post',
    url:`${urlBase}/api/appointment`,
    data:data,
   })
}
export const updateAppointment =(data)=>{
  return axios({
    method:'post',
    url:`${urlBase}/api/update/appointment`,
    data:data
  });
}