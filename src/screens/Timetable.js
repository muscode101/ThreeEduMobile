import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Row, Table} from 'react-native-table-component';
import {connect} from "react-redux";

const Timetable = ({navigation,timetable,isAuthenticated}) => {
    const tableHead = ['Days',"08:00 - 09:00",'09:00 - 10:00','10:00 - 11:00','11:00 - 12:00'] ;
    const width = [100, 115, 115,115,115,130];

    if (!isAuthenticated) {
        navigation.navigate('Login')
    }

    console.log("timetable:::",timetable)
    const getData = () => {
        const tableData = []
        const dayAndSubjects = []
        Object.entries(timetable).forEach(item => {
            const day = item[0];
            const collection = item[1]
            tableData.push([day,...collection])
        });
        console.log("dayAndSubjects",dayAndSubjects)
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
    timetable: state.profile.user.timetable
})

export default connect(mapStateToProps, { })(Timetable)


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
        paddingLeft: 10,
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