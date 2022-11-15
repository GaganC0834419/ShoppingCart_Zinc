import React, { useEffect } from 'react';
import {FlatList,Platform} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';


import CustomHeaderButton from '../../UI/HeaderButton';
import OrderItem from '../../OrderItem';
import { getOrders as getOrdrs } from '../../../store/actions/order';
import { getOrders } from '../../../service/firebaseService';
import Order from '../../../model/order';

const OrdersScreen = props =>{
    const orders = useSelector(state => state.orders.orders);
    const clId = useSelector(state => state.orders.clId);
    const dispatch = useDispatch();
    useEffect(() => {
        getOrders(clId).then((data) =>
            dispatch(getOrdrs(data))
        )
       //dispatch(getOrders());
    }, [])
    console.log(orders);
    return <FlatList data={orders} keyExtractor={item => item.id} renderItem={itemData => {
        const date = itemData.item.date?.seconds ?  new Date(itemData.item.date.seconds*1000) : itemData.item.date;

        const  newItemData = new Order(itemData.item.id, itemData.item.items, itemData.item.totalAmount, date);

    return <OrderItem items={newItemData.items} amount={newItemData.totalAmount} date={newItemData.readableDate}/>}}/>
}

OrdersScreen.navigationOptions=navData => {
    
    return{headerTitle: 'Your Orders',
    headerLeft: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
    <Item title="Menu" iconName={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'} onPress={()=>{
        navData.navigation.toggleDrawer();
    }}/>
</HeaderButtons>
}
};

export default OrdersScreen;