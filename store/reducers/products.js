import PRODUCTS from '../../data/dummy-data'
import { DELTE_PRODUCT, CREATE_PRODUCT, UPDATE_PRODUCT, SET_PRODUCTS } from '../actions/products';
import Product from '../../model/product';
import { setProduct } from '../../service/firebaseService';

const intialState={
    availableProducts: [],
    userProducts: [],
    id: '',
};

export default (state = intialState ,action)=>{
    switch (action.type){
        case CREATE_PRODUCT:
            const newProduct  = new Product(new Date().toString(),'u1',action.productData.title,action.productData.imageUrl,action.productData.description,action.productData.price,action.productData.category)
            setProduct(newProduct);
            return state;
        case UPDATE_PRODUCT:
            let productIndex = state.userProducts.findIndex((prod) => prod.id === action.pid)
            const updatedProduct = new Product(action.pid,
                state.userProducts[productIndex].ownerId,
                action.productData.title,
                action.productData.imageUrl,
                action.productData.description,
                action.productData.price,
                action.productData.category,
                );
                setProduct(updatedProduct);
                return state
             
        case DELTE_PRODUCT:
            return {
                ...state,
                userProducts : state.userProducts.filter(
                    product => product.id !== action.pid),
                    availableProducts : state.availableProducts.filter(
                        product => product.id !== action.pid)
            }

        case SET_PRODUCTS: 
            return {
                ...state,
                availableProducts: action.data,
                userProducts: action.data.filter(prod=> prod.ownerId === 'u1' ) 
            }
       
    }
    return state;
}