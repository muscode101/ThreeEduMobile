import React, {useState} from 'react';
import {Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import appLogo from "../images/appLogo.png";
import {connect} from "react-redux";
import {login} from "../redux/actions/auth";
import PropTypes from "prop-types";

const Login = ({login, isAuthenticated, navigation}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const btnLogin = () => {
        if (username && password) {
            console.log("login required")
            console.log("auth", isAuthenticated)
            login(username, password)
        } else {
            if (!username) {
                Alert.alert("Auth Error", "Username Required ")
                console.log('state::', isAuthenticated)
            } else {
                Alert.alert("Auth Error", "Password Required ")
                console.log('state::', isAuthenticated)
            }
        }
    }


    if (isAuthenticated) {
        navigation.navigate('Home', {username: username})
    }

    return (

        <View style={styles.container}>

            <View style={styles.imgContainer}>
                <Image style={styles.image} source={appLogo}/>
            </View>
            <Text style={styles.logoText}>Welcome to 3Eedu</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Username..."
                    placeholderTextColor="grey"
                    onChangeText={text => setUsername(text)}/>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Password..."
                    placeholderTextColor="grey"
                    onChangeText={text => setPassword(text)}/>
            </View>
            <TouchableOpacity style={styles.loginBtn}
                              onPress={() => btnLogin()}
            >
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>

            <View style={styles.forgotPassword}>
                <TouchableOpacity>
                    <Text>Remember Me</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Forgot Password</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#faf0f9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBtnContainer: {
        justifyContent: 'space-between',
    },
    imgContainer: {
        width: "80%",
        height: "30%",
        marginTop: '10%',
        alignItems: 'center',
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: 'contain'
    },
    logoText: {
        fontSize: 22,
        marginBottom: 30
    },
    inputView: {
        width: "80%",
        backgroundColor: "#FFF",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "black"
    },
    forgot: {
        color: "black",
        fontSize: 11
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#b321ff",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        marginBottom: 10
    },
    loginText: {
        color: "#fff"
    },
    forgotPassword: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 10,
        width: '80%',
        height: '10%',
    },
});

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    isAuthenticated: state.profile.isAuthenticated
})

export default connect(mapStateToProps, { login})(Login)