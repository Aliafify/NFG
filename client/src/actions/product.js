import { deleteproduct, fetchProducts, newPr, updateproduct } from "../utils/productApi"

export const NEW_PRODUCT= 'NEW_PRODUCT'
export const CURRENT_PRODUCT ='CURRENT_PRODUCT'
export const DELETE_CURRENT = 'DELETE_CURRENT'
export const INETIALIZE_PRODUCTS = 'INETIALIZE_PRODUCTS'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCT ='DELETE_PRODUCT'

const inetializeProducts = (products)=>{
    return{
        type:INETIALIZE_PRODUCTS,
        products
    }
}
export const Inetialize_Products = ()=>{
    return (dispatch)=>{
        return fetchProducts().then(res=>{
            dispatch(inetializeProducts(res.data))
        })
    }
}
// UPDATE PRODUCT 
 const updateProduct = (id,product)=>{
    return{
        type:UPDATE_PRODUCT,
        id,
        product
    }
 }
export const Update_Product = (id,product)=>{
    return (dispatch)=>{
        return updateproduct(id,product).then(res=>{
            if(res.status===201){
                dispatch(updateProduct(id,product))
                alert("saved")
            }
            else{
                alert("error")
            }
        })
    }
}

// DELETE PRODUCT
const deleteProduct = (id)=>{
    return {
        type:DELETE_PRODUCT,
        id
    }
}
export const Delete_Product=(id)=>{
    return (dispatch)=>{
        return deleteproduct(id).then(res=>{
            if(res.status===201){
                dispatch(deleteProduct(id))
                alert("deleted")
            }
            else{
                alert("error")
            }
        })
    }
}

const newProduct = (product)=>{
    return{
        type:NEW_PRODUCT,
        product
    }
}
const currentProduct = (product)=>{
    return{
        type:CURRENT_PRODUCT,
        product,
    }
}
const deleteCurrent = ()=>{
    return{
        type:DELETE_CURRENT
    }
}

export const New_Product = (product)=>{
    return(dispatch)=>{
        return newPr(product).then(res=>{
            if(res.status===201){
                dispatch(newProduct(product))
                dispatch(currentProduct(res.data))
                alert("saved")
                
                window.location.replace='/admin-dashboard/products'
                console.log(res.data)
            }
            else if(res.status===200){alert('product exist')}
            else{
                alert('error')
            }
        })
    }
}
export const Current_Product = (product)=>{
    return (dispatch)=>{
        return dispatch(currentProduct(product))
    }
}
export const Delete_Current = ()=>{
    return (dispatch)=>{
        return dispatch(deleteCurrent())
    }
}
