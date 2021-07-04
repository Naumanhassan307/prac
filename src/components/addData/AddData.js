//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button, TextInput} from 'react-native';


import {UseAddData} from "./useAddData";


// create a component
function AddData({navigation}) {

  const [setStName, setStRoll, ctaHandler, ctaEmptyHandler] = UseAddData();


  return (
    <View style={styles.container}>
      <Text>AddData</Text>
      <TextInput
        placeholder="Enter Student Name"
        style={styles.myClass}
        onChangeText={(val) => setStName(val)}
      />
      <TextInput
        placeholder="Enter Student Roll#"
        style={styles.myClass}
        onChangeText={(val) => setStRoll(val)}
      />
      <TouchableOpacity style={styles.myClass} onPress={ctaHandler}  onPressOut={ctaEmptyHandler}>
        <Text> Submit</Text>
      </TouchableOpacity>
      <Button
        title="Go to Show Data"
        onPress={() => navigation.navigate('Show Data')}
      />
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  myClass: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderColor: '#000000',
  },
});

//make this component available to the app
export default AddData;
