import React, { useState } from 'react';
import { View, StyleSheet, TextInput,Button, Text } from "react-native"

import Colors from '../../../constants/Colors';

const Signup = (props) => {

    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [isValid, setIsValid] = useState(true);

    const textChangeHandler = ( callback, text) => {
        callback(text);
    }

    const submitLogin = () => {
        props.toggleScreen();
    }
    return <View style={styles.form}>
    <View style={styles.formControl}>
        <Text style={styles.label}> Name </Text>
            <TextInput style={styles.input} value={name}  keyboardType='default' autoCapitalize='sentences' autoCorrect
           onChangeText={textChangeHandler.bind(this,setName)}
           returnKeyType='next'
            />  
    </View>
    <View style={styles.formControl}>
        <Text style={styles.label}> Username </Text>
            <TextInput style={styles.input} value={username}  keyboardType='default' autoCapitalize='sentences' autoCorrect
           onChangeText={textChangeHandler.bind(this,setUsername)}
           returnKeyType='next'
            />  
    </View>
    <View style={styles.formControl}>
            <Text style={styles.label}> Password</Text>
            <TextInput style={styles.input} value={password} textContentType = "password" keyboardType='default' autoCapitalize='sentences' autoCorrect
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

export default Signup;