export const ADD_TO_Cart = 'ADD_TO_Cart';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const IS_LOGGED_IN = 'IS_LOGGED_IN';

export const removeFromCart = productId =>{
    return {type:REMOVE_FROM_CART , pid:productId}
}

export const addToCart = product => {
    return {
        type: ADD_TO_Cart,
        product: product
    }
}

export const isLoggedIn = (isLoggedIn) => {
    return {
        type: IS_LOGGED_IN,
        isLoggedIn: isLoggedIn
    }
}