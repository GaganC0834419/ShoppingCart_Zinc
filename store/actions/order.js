

export const ADD_ORDER = 'ADD_ORDER';
export const GET_ORDERS = 'GET_ORDER';
export const SET_CL_ID = "SET_CL_ID";

export const addOrder = (cartItems ,totalAmount) => {
    return {
        type:ADD_ORDER,
        orderData:{items:cartItems,amount:totalAmount}
    }
}

export const getOrders = (data) => {    
    return {
        type: GET_ORDERS,
        data
    }
}   

export const setClId = (id, isAdmin) => {
    return {type: SET_CL_ID, id, isAdmin}
}