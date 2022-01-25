import React from 'react';
import {ImageBackground, StyleSheet, Text, useColorScheme} from 'react-native';
import HermesBadge from 'react-native/Libraries/NewAppScreen/components/HermesBadge';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';

const MyHeader = ({username}) => {
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
            imageStyle={styles.logo}
        >
            <HermesBadge/>
            <Text
                style={[
                    styles.text,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}
            >
                Welcome
                {'\n'}
                {username}
            </Text>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        paddingBottom: 30,
        backgroundColor: '#faf0f9',
        paddingTop: 30,
        paddingHorizontal: 32,
    },
    logo: {
        opacity: 0.2,
        overflow: 'visible',
        resizeMode: 'cover',
        marginLeft: -128,
        marginBottom: -192,
    },
    text: {
        fontSize: 40,
        fontWeight: '700',
        textAlign: 'center',
    },
});

export default MyHeader;
