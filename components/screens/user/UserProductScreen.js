import React, { useEffect } from 'react';
import {FlatList,Platform,Button,Alert} from 'react-native';
import { useSelector,useDispatch} from "react-redux";
import {HeaderButtons,Item} from 'react-navigation-header-buttons';


import ProductItem from '../../ProductItem';
import CustomHeaderButton from '../../UI/HeaderButton';
import Colors from '../../../constants/Colors';
import * as productsActions from '../../../store/actions/products'
import { getOrders, getProducts } from '../../../service/firebaseService';

let unsubscribe;
const UserProductScreen = props =>{
    const userProducts= useSelector(state => state.products.userProducts);
    const dispatch=useDispatch();

    useEffect(() => {
        unsubscribe = props.navigation.addListener('didFocus', () => {
            setData();
        });
        setData();
         return () => unsubscribe()
    }, []);


    const setData = () => {
        console.log(props);
        if(props.navigation.state.routeName === "UserProducts")
        getProducts().then(data => dispatch(productsActions.setProducts(data)));
    }
    const deleteHandler = (id) => {
        // console.log('dsadsa')
        //dispatch(productsActions.deleteProduct(id))
        Alert.alert('Are You sure?','Do you really want to delete this item', [{text : 'No',style : 'default'},{text:'Yes',style:'destructive',onPress:()=>
        {dispatch(productsActions.deleteProduct(id))
        }}])
    }

   
    const editProductHandler = (id) =>{
        props.navigation.navigate('EditProducts',{productId: id})
    }
    return(
        <FlatList data={userProducts} keyExtractor={item=> item.id} renderItem={itemData=> <ProductItem 
            image={itemData.item.imageUrl} 
            title={itemData.item.title} 
            price={itemData.item.price} 
            onSelect={()=>{editProductHandler(itemData.item.id)}}>
            <Button color={Colors.primary} title="Edit" onPress={()=>{editProductHandler(itemData.item.id)}}/>
            <Button color={Colors.primary} title="Delete" onPress={deleteHandler.bind(this,itemData.item.id)}/>
            </ProductItem>   
                }/>
    )
}

UserProductScreen.navigationOptions = navData =>
{return {
    headerTitle :"Your Products",
    headerLeft: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
    <Item title="Menu" iconName={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'} onPress={()=>{
        navData.navigation.toggleDrawer();
    }}/>
</HeaderButtons>,
headerRight: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
<Item title="Add" iconName={Platform.OS === 'ios' ? 'ios-add' : 'md-add'} onPress={()=>{
    navData.navigation.navigate('EditProducts')
}}/>
</HeaderButtons>
}
}




export default UserProductScreen;