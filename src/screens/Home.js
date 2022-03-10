import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import MyHeader from '../components/MyHeader';
import imgAttendance from '../images/attendence.png';
import imgAcademic from '../images/academic.png';
import imgPayment from '../images/payment.png';
import imgTimeTable from '../images/time_table.png';
import PropTypes from "prop-types";
import {connect} from "react-redux";

const Home = ({navigation,isAuthenticated}) => {



    const [items] = React.useState([
        {name: 'Attendance', icon: '#1abc9c', image: imgAttendance},
        {name: 'Payments', icon: '#2ecc71', image: imgPayment},
        {name: 'Timetable', icon: '#3498db', image: imgTimeTable},
        {name: 'Academics', icon: '#9b59b6', image: imgAcademic},
    ]);

    const setRoute = item => () => {
            navigation.navigate(item.name)
    }

    if (!isAuthenticated) {
        navigation.navigate('Login')
    }

    const MenuView = () => {
        return (
            <FlatGrid
                itemDimension={108}
                data={items}
                style={styles.gridView}
                spacing={15}
                renderItem={({item}) => (
                    <TouchableOpacity
                        onPress={setRoute(item)}
                    >
                        <View  style={[styles.itemContainer, {backgroundColor: item.icon}]}>
                            <Image style={{width: 80, height: 80}} source={item.image}/>
                            <Text style={styles.itemName}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        );
    };

    return (
        <View style={styles.root}>
            <MyHeader />
            <MenuView/>
        </View>
    );
};

Home.propTypes = {
    isAuthenticated: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    isAuthenticated: state.profile.isAuthenticated,
})

export default connect(mapStateToProps, { })(Home)

const styles = StyleSheet.create({
    root: {
        height: '100%',
        width: '100%',
        backgroundColor: '#faf0f9',
    },
    gridView: {
        marginTop: 0,
        backgroundColor: '#faf0f9',
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
});
