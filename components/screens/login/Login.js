import React, { useState } from 'react';
import { View, StyleSheet, TextInput,Button, Text } from "react-native"
import { useDispatch } from 'react-redux';
import Colors from '../../../constants/Colors';
import adminData from '../../../data/admin-data';
import userData from '../../../data/user-data';
import { isLoggedIn } from '../../../store/actions/cart';
import { setClId } from '../../../store/actions/order';

const Login = (props) => {
       
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [isValid, setIsValid] = useState(true);
    

    const dispatch = useDispatch();

    const textChangeHandler = ( callback, text) => {
        callback(text);
    }


    const submitLogin = () => {
        let check = false;
        userData.forEach(data => {
            if(data.userName === username) {
                check = true;
                if(data.password === password) {
                    setIsValid(true);
                    console.log(data.userId);
                    dispatch(setClId(data.userId, false))
                    dispatch(isLoggedIn(true));

                } else {
                    setIsValid(false);
                }
            }
        })
        if(!check) {
            adminData.forEach(data => {
                if(data.userName === username) {
                    check = true;
                    if(data.password === password) {
                        setIsValid(true);
                        dispatch(setClId(data.userId, true))

                         dispatch(isLoggedIn(true));
                    } else {
                        setIsValid(false);
                    }
                }
            })
        }
        
        if(!check) {
            setIsValid(false);
        }
    }

    return <View style={styles.form}>
    
    <View style={styles.formControl}>
        <Text style={styles.label}> Username </Text>
            <TextInput style={styles.input} value={username}  keyboardType='default' autoCapitalize='sentences' autoCorrect
           onChangeText={textChangeHandler.bind(this,setUsername)}
           returnKeyType='next'
            />  
    </View>
    <View style={styles.formControl}>
            <Text style={styles.label}> Password</Text>
            <TextInput style={styles.input} value={password} textContentType = "password" keyboardType='default'  autoCapitalize='sentences' 
           onChangeText={textChangeHandler.bind(this, setPassword)}
           returnKeyType='next'
            />  
    </View>
    <View style={styles.mt}>
        <Button color={Colors.primary} title="Submit" 
        onPress={()=> submitLogin()}
        />
    </View>
    <View style={styles.error}>
    {!isValid && <Text>Please Check Username And Password </Text>}
    </View>
    </View>
}

const styles= StyleSheet.create({
    form : {
        margin:60
    },
    formControl:{
        width : '100%'
    },
    label:{
        fontFamily : 'open-sans-bold',
        marginVertical: 8
    },
    input:{
        paddingHorizontal: 2,
        paddingVertical:5,
        borderBottomColor : '#ccc',
        borderBottomWidth:1
    }, mt: {
        width : '100%',
        marginTop: 40
    }, error :{
        marginLeft: 15 ,
        marginTop: 25
    }
});

export default Login;