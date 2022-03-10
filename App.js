import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home'
import AcademicResults from './src/screens/AcademicResults'
import PaymentDetails from './src/screens/PaymentDetails'
import Timetable from './src/screens/Timetable'
import Attendance from './src/screens/Attendance'
import Login from "./src/screens/Login";
import {Provider} from "react-redux";
import store from "./src/redux/store";
import LogoTitle from "./src/components/AppBar";

const Stack = createNativeStackNavigator();

export default function App() {
    const schoolName = store.getState().profile.user.schoolName
    if(!schoolName){
        console.log("schoolName::",schoolName)
    }
    return (
        <>
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerShadowVisible: false
                        }}
                        initialRouteName="Login">
                        <Stack.Screen options={{headerShown: false}} name="Login" component={Login}/>
                        <Stack.Screen
                            name="Home"
                            component={Home}
                            options={{
                                headerTitle: () => <LogoTitle />
                            }}
                        />
                        <Stack.Screen
                            name="Attendance"
                            component={Attendance}
                            options={{
                                headerTitle: () =><LogoTitle />
                            }}
                        />
                        <Stack.Screen
                            name="Timetable"
                            component={Timetable}
                            options={
                                {
                                headerTitle: () => <LogoTitle />,
                                    orientation: 'landscape'
                            }}
                        />
                        <Stack.Screen
                            name="Payments"
                            component={PaymentDetails}
                            options={{
                                headerTitle: () => <LogoTitle />
                            }}
                        />
                        <Stack.Screen
                            name="Academics"
                            component={AcademicResults}
                            options={{
                                headerTitle: () => <LogoTitle />
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        </>

    );
}

