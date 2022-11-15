import React,{useState} from 'react';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import {createStore, combineReducers} from 'redux';
import {Provider, useSelector} from 'react-redux';
import {AppLoading} from 'expo';
import * as Font from 'expo-font';

import './firebaseCOnfig';


import productReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import ordersReducer from './store/reducers/order';
import ShopNavigator, { AppNavigatorClient, LoginNav } from './navigation/ShopNavigator'
import LoginScreen from './components/screens/login';
import { createStackNavigator } from 'react-navigation-stack';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  orders: ordersReducer
});

const store =createStore(rootReducer);

const fetchFonts = () =>{
  return Font.loadAsync({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

function Login() {
  const [fontLoaded,setFontLoaded] = useState(false);
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const isLoggedIn = useSelector(state => state.cart.isLoggedIn);
  const isAdmin = useSelector(state => state.orders.isAdmin)
  if(!fontLoaded){
    return <AppLoading startAsync={fetchFonts} onFinish={()=>{
        setFontLoaded(true);
    }}/>
  }

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  } 

  return (
    <>
        {!isLoggedIn ? <LoginNav  /> : isAdmin ? <ShopNavigator/> : <AppNavigatorClient />}
    </>
  );
}

export default function App() { 
  //LogBox.ignoreLogs(['Warning: ...'])
  //LogBox.ignoreAllLogs(true);
  console.disableYellowBox = true;
  return(
    <Provider store={store}>
      <Login></Login>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
