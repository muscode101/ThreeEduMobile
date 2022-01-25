import React from 'react';
import { StyleSheet, TextInput, View} from 'react-native';

const UserInput = props => {
  return (
    <View style={styles.root}>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        autoCorrect={props.autoCorrect}
        autoCapitalize={props.autoCapitalize}
        returnKeyType={props.returnKeyType}
        placeholderTextColor={props.placeholderTextColor}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

export default UserInput;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#ffffff',
    width: '95%',
    height: 50,
    marginHorizontal: 20,
    fontSize: 15,
    alignItems: 'center',
    paddingLeft: 20,
    borderRadius: 50,
    color: 'black',
  },
  inputWrapper: {
    flex: 1,
  },
  root: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 50,
    width: '95%',
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(260, 300, 260, 0.10)',
  },
});
