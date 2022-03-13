import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Row, Table} from 'react-native-table-component';
import {connect} from "react-redux";

const AcademicResults = ({navigation,academicResults,isAuthenticated}) => {
    const tableHead = [ 'Subject','Type','Score','Date' ];
    const width = [110, 80, 80,90];
    const headerWidth = [100, 100, 80,120,];


    if (!isAuthenticated) {
        navigation.navigate('Login')
    }

    console.log(academicResults)

    const getData = () => {
        let tableData = []
        Object.entries(academicResults).forEach(item => {
            tableData.push([item[1].subject.match(/\(([^)]+)\)/)[1], removeClassExcisesText(item[1].assessmentName),item[1].score,item[1].markedOn ])
        });
        return tableData
    }

    const removeClassExcisesText = (assessment) => {
        const test = assessment.replace('Class Excises','')
        const test2 = test.replace('(','')
        return test2.replace(')', '')
    };

    return (
        <View style={styles.container}>
            <Table borderStyle={{ borderColor: '#C1C0B9'}}>
                <Row data={tableHead} widthArr={headerWidth} style={styles.head} textStyle={styles.HeaderText}/>
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
    academicResults: state.profile.user.academicResults
})

export default connect(mapStateToProps, { })(AcademicResults)


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

