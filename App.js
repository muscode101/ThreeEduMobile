import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home'
import AcademicResults from './src/screens/AcademicResults'
import PaymentDetails from './src/screens/PaymentDetails'
import Timetable from './src/screens/Timetable'
import Attendance from './src/screens/Attendance'
import React from "react";
import NewLogin from "./src/screens/NewLogin";
import {Dimensions, Image, Text, View} from 'react-native';
import userProfile from "./src/images/user_profile.png";
import notification from "./src/images/notification.png";
import TouchableOpacity from "react-native-gesture-handler/src/components/touchables/TouchableOpacity";

const Stack = createNativeStackNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function LogoTitle() {
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            width: windowWidth - 70
        }}>
            <Text style={{width: '70%', alignSelf: 'center', fontSize: 20,}}>
                Lusaka High
            </Text>
            <TouchableOpacity>
                <Image
                    style={{width: 42, height: 42, marginBottom: 5, marginRight: 10}}
                    source={notification}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    style={{width: 50, height: 50, marginRight: 10}}
                    source={userProfile}
                />
            </TouchableOpacity>
        </View>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShadowVisible: false
                }}
                initialRouteName="Login">
                <Stack.Screen options={{headerShown: false}} name="Login" component={NewLogin}/>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerTitle: (props) => <LogoTitle/>
                    }}
                />
                <Stack.Screen
                    name="Attendance"
                    component={Attendance}
                    options={{
                        headerTitle: (props) => <LogoTitle/>
                    }}
                />
                <Stack.Screen
                    name="Timetable"
                    component={Timetable}
                    options={{
                        headerTitle: (props) => <LogoTitle/>
                    }}
                />
                <Stack.Screen
                    name="Payments"
                    component={PaymentDetails}
                    options={{
                        headerTitle: (props) => <LogoTitle/>
                    }}
                />
                <Stack.Screen
                    name="Academics"
                    component={AcademicResults}
                    options={{
                        headerTitle: (props) => <LogoTitle/>
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

