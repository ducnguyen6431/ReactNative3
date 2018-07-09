import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

class LoginVC extends Component {
    id = "best"
    password = "hehe"
    state = { okay: true }

    _handlePress = () => {
        let username = this.state.username
        let pwd      = this.state.password
        var okay = false
        if(username === this.id && pwd === this.password)
            okay = true
        else
            okay = false
        this.setState({okay})
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('./ball.png')} />
                    <Text style={[{color: 'white', textAlign:'center'}, {fontSize:20, marginTop:15}]}>FIFA WORLDCUP 2018</Text>
                </View>
                <View style={styles.formContainer}>
                    <TextInput style = {styles.input} 
                        autoCapitalize="none"
                        onChangeText={(username)=> this.setState({username})}
                        autoCorrect={false} 
                        returnKeyType="next" 
                        placeholder='Email or Mobile Num' 
                        placeholderTextColor='rgba(225,225,225,0.7)'/>
                    <TextInput style = {styles.input}   
                        autoCapitalize="none"
                        returnKeyType="go" 
                        onChangeText={(password) => this.setState({password})}
                        placeholder='Password'
                        placeholderTextColor='rgba(225,225,225,0.7)' 
                        secureTextEntry
                        />
                    <TouchableOpacity style={styles.buttonContainer} onPress={this._handlePress}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity> 
                    <Text style={[{color: 'red', textAlign:'center'}, {fontSize:20, marginTop:15}]}>{ this.state.okay === false ? "Wrong id or password": null}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282f37',
    },
    logoContainer:{
        alignItems: 'center',
        flex: 0.5,
        justifyContent: 'center'
    },
    logo: {
        width: 300,
        height: 100
    },
    formContainer: {
        flex: 0.5
    },
    input:{
        borderRadius: 10,
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginLeft: 10,
        marginBottom:10,
        marginRight: 10,
        padding: 10,
        color: '#fff'
    },
    buttonContainer:{
        borderRadius:10,
        marginLeft: 10,
        marginBottom:10,
        marginRight: 10,
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }
})

export default LoginVC;