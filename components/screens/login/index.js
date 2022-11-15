
import React, { useEffect, useState } from 'react';
import {View,Text,FlatList,Button,StyleSheet} from 'react-native';
import Login from './Login';
import Signup from './Signup';
import CustomHeaderButton from '../../UI/HeaderButton';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';

const LoginScreen = props => {
    const [selectedScreen, setSelectedScreen] = useState('Login');
    const toggleScreen = () => {
        if(selectedScreen === "Login") {
            setSelectedScreen("SignUp")
        } else {
            setSelectedScreen("Login")
        }
    }
    useEffect(() => {props.navigation.setParams({selectedScreen: selectedScreen, toggleScreen: toggleScreen})}, [selectedScreen]);
    return <View>
        {
            selectedScreen === "Login" ? <Login /> : <Signup toggleScreen = {toggleScreen} />
         }
    </View>
}

LoginScreen.navigationOptions=navData => {

    const toggleNav = navData.navigation?.state?.params?.toggleScreen;
    return{headerTitle: navData.navigation?.state?.params?.selectedScreen, 
        headerRight:<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title={navData.navigation?.state?.params?.selectedScreen ===  "SignUp" ? "Login" : "SignUp"}  onPress={toggleNav}/>
            </HeaderButtons>
    }
};



export default LoginScreen;