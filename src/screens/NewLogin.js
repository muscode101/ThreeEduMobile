import React, {useState} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import appLogo from "../images/appLogo.png";

export default function NewLogin ({navigation}) {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

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
                        onChangeText={text => setUsername( text)}/>
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Password..."
                        placeholderTextColor="grey"
                        onChangeText={text => setPassword( text)}/>
                </View>
                <TouchableOpacity style={styles.loginBtn}
                                  onPress={() => navigation.navigate('Home',{username:username})}
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