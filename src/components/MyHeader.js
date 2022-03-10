import React from 'react';
import {ImageBackground, StyleSheet, Text, useColorScheme} from 'react-native';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import background from "../images/home_background.jpeg"
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Avatar} from 'react-native-paper';

const MyHeader = ({username,className}) => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <ImageBackground
            accessibilityRole="image"
            testID="new-app-screen-header"
            style={[
                styles.background,
                {
                    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
                },
            ]}
            source={background}
            imageStyle={styles.logo}
        >
            <Avatar.Image size={150} style={styles.avatar} source={require('../../src/images/books.png')} />
            <Text
                style={[
                    {
                        fontWeight: '700',
                        textAlign: 'center',
                        fontSize:18
                    },
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}
            >
                {className}
            </Text>
            <Text
                style={[
                    styles.text,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}
            >
                {username}
            </Text>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    avatar:{
        alignSelf:'center'
    },
    background: {
        paddingBottom: 5,
        backgroundColor: '#faf0f9',
        paddingTop: 10,
        paddingHorizontal: 32,
    },
    logo: {
        opacity: 0.9,
        overflow: 'visible',
        resizeMode: 'cover',
        marginLeft: -128,
        marginBottom: -192,
    },
    text: {
        fontSize: 22,
        fontWeight: '700',
        textAlign: 'center',
    },
});


MyHeader.propTypes = {
    isAuthenticated: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
    isAuthenticated: state.profile.isAuthenticated,
    username: state.profile.user.personalInfo.Name,
    className: state.profile.user.classname
})

export default connect(mapStateToProps, { })(MyHeader)