import { ADD_ORDER, GET_ORDERS, SET_CL_ID } from "../actions/order";
import Order from "../../model/order";
import { getOrders, setOrder } from "../../service/firebaseService";

const intialState={
    orders:[],
    clId: '',
    isAdmin: false
};

export default (state=intialState,action)=>{
    switch(action.type){
        case ADD_ORDER:
            const newOrder = new Order(new Date().toString(),action.orderData.items,action.orderData.amount,new Date());
            console.log(newOrder);
            setOrder(newOrder, state.clId);
            return {
                ...state,
                orders:state.orders.concat(newOrder)
            }
            case GET_ORDERS: 

                return {
                    ...state,
                    orders: action.data
                }
                case SET_CL_ID: 
                console.log(action.id)
        return{
            ...state,
            clId: action.id,
            isAdmin: action.isAdmin
        }
        }


        
    return state
}