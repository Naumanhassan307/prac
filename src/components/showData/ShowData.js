//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {UseShowDAta} from './useShowData';

// create a component
function ShowData({navigation}) {
  const [store] = UseShowDAta();
  console.log("STORE IN SHOW COMP..", store);
  return (
    <View style={styles.container}>
      <Text>Show Student Data</Text>
     
          
            <Text>Name : {store.newStName}</Text>
            <Text>Roll# : {store.newStRoll}</Text>
      

      <Button
        title="Go to Add Data"
        onPress={() => navigation.navigate('Add Data')}
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
});

//make this component available to the app
export default ShowData;
