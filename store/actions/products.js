import { delProduct, getProducts, setProduct } from "../../service/firebaseService";

export const DELTE_PRODUCT = 'DELETE_PRODUCT'

export const CREATE_PRODUCT = 'CREATE_PRODUCT'

export const UPDATE_PRODUCT='UPDATE_PRODUCT'

export const SET_PRODUCTS = "SET_PRODUCTS";

export const SET_IS_ADMIN = "SET_IS_ADMIN";


export const deleteProduct = productId =>{
    console.log(productId);
    delProduct(productId);
    return {
       type:DELTE_PRODUCT,
       pid : productId
    }
}

export const createProduct = (title,description,imageUrl,price,category)=>{
    return {type:CREATE_PRODUCT , productData:{
        title ,
        description,
        imageUrl,
        price,
        category
    }}
}

export const updateProduct = (id,title,description,imageUrl, price,category)=>{
    return {type:UPDATE_PRODUCT ,pid:id, productData:{
        title ,
        description,
        imageUrl, 
        price,
        category  
      }}
}

export const setProducts = (data) => {
        return {type: SET_PRODUCTS, data: data};
}

