import axios from "axios"
const urlBase = 'http://localhost:8081'
 
export const newPr = (data)=>{
      return axios({
        method:'POST',
        data:data,
        withCredentials:true,
        url:`${urlBase}/api/newproduct`
      })
}
export const fetchProducts = ()=>{
      return axios({
        method:'get',
        url:`${urlBase}/api/getproducts`
      })
}
export const deleteproduct = (id)=>{
  return axios({
    method:'post',
    data:{id:id},
    withCredentials:true,
    url:`${urlBase}/api/deleteproduct`
  }) 
} 
export const updateproduct = (id,product)=>{
  return axios({
    method:'post',
    data:{id:id,product:product},
    withCredentials:true,
    url:`${urlBase}/api/updateproduct`
  }) 
}