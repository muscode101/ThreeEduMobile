import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Row, Table} from 'react-native-table-component';

const Attendance = ({navigator}) => {
    const tableHead = ['Date', 'Status', 'Reason'];
    const width = [100, 130, 130];

    const data = [
        {date: "20/11/2021", status: "absent", reason: "Sick"},
        {date: "20/05/2021", status: "present", reason: "Math"},
        {date: "20/04/2021", status: "absent", reason: "Sick"},
        {date: "20/11/2021", status: "present", reason: "Math"},
        {date: "20/02/2021", status: "absent", reason: "Sick"},
        {date: "20/11/2021", status: "present", reason: "Math"},
        {date: "20/01/2021", status: "absent", reason: "Sick"},
        {date: "20/10/2021", status: "present", reason: "Math"},
        {date: "20/12/2021", status: "absent", reason: "Sick"},
        {date: "20/06/2021", status: "present", reason: "Math"},
        {date: "20/07/2021", status: "absent", reason: "Sick"},
        {date: "20/07/2021", status: "absent", reason: "Sick"},
        {date: "20/07/2021", status: "absent", reason: "Sick"},
        {date: "20/07/2021", status: "absent", reason: "Sick"},
        {date: "20/07/2021", status: "absent", reason: "Sick"},
        {date: "20/07/2021", status: "absent", reason: "Sick"},
        {date: "20/07/2021", status: "absent", reason: "Sick"},
        {date: "20/07/2021", status: "absent", reason: "Sick"},
    ];

    const getData = () => {
        let tableData = []
        data.forEach((item) => {
            tableData.push([item.date, item.status, item.reason])
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

export default Attendance;

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
        backgroundColor: '#6F7BD9',
        color: '#fff',
    },
    headerText: {
        textAlign: 'right',
        fontWeight: '500',
    },
    text: {
        textAlign: 'center',
        fontWeight: '200'
    },
    dataWrapper: {
        marginTop: -1
    },
    row: {
        height: 40,
        backgroundColor: '#F7F8FA'
    }
});