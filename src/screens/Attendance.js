import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Row, Table} from 'react-native-table-component';
import {connect} from "react-redux";

const Attendance = ({navigation,attendance,isAuthenticated}) => {
    const tableHead = [ 'Reason','Status','Date' ];
    const width = [100, 130, 130];

    if (!isAuthenticated) {
        navigation.navigate('Login')
    }

    console.log(attendance)

    const getData = () => {
        let tableData = []
        Object.entries(attendance).forEach(item => {
            tableData.push([item[1].reason, item[1].status,item[1].markOn ])
        });
        return tableData
    }

    return (
        <View style={styles.container}>
            <Table borderStyle={{ borderColor: '#C1C0B9'}}>
                <Row data={tableHead} widthArr={width} style={styles.head} textStyle={styles.HeaderText}/>
                <ScrollView>
                    {
                        getData().map((totalRows, index) => (
                            <Row
                                key={index}
                                data={totalRows}
                                textStyle={styles.text}
                                widthArr={width}
                                style={[styles.row, index % 2 && {backgroundColor: '#ffffff'}]}
                            />
                        ))
                    }
                </ScrollView>
            </Table>
        </View>

    )
}


const mapStateToProps = state => ({
    isAuthenticated: state.profile.isAuthenticated,
    attendance: state.profile.user.attendance
})

export default connect(mapStateToProps, { })(Attendance)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignSelf: "center",
        backgroundColor: '#faf0f9',
        color: '#fff'
    },
    table: {
        width: '100%',
    }
    ,
    head: {
        height: 50,
        paddingLeft: 90,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
        background:'#fff',
        color: '#fff',
    },
    HeaderText: {
        fontWeight: '900',
        color: '#fff',
    },
    text: {
        textAlign: 'center',
        fontWeight: '200',
        color:'black'
    },
    dataWrapper: {
        marginTop: -1
    },
    row: {
        height: 40,
        backgroundColor: '#D6EEEE'
    }
});