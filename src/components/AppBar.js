import {Dimensions, Image, Text, View} from "react-native";
import TouchableOpacity from "react-native-gesture-handler/src/components/touchables/TouchableOpacity";
import React from "react";
import {connect} from "react-redux";
import userProfile from "../../src/images/user_profile.png";
import notification from "../../src/images/notification.png";

const windowWidth = Dimensions.get('window').width;

const LogoTitle = ({schoolName}) =>
        <View style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            width: windowWidth - 70
        }}>
            <Text style={{width: '70%', alignSelf: 'center', fontSize: 20,}}>
                {schoolName}
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


const mapStateToProps = state => ({
    schoolName: state.profile.user.schoolName
})

export default connect(mapStateToProps, { })(LogoTitle)
