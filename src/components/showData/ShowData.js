//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {UseShowDAta} from './useShowData';

// create a component
function ShowData({navigation}) {

  const [storeData] = UseShowDAta();
  // const Arr=[]
  console.log('STORE IN SHOW COMP..', storeData);
  return (
    <View style={styles.container}>
      <Text>Show Student Data</Text>

      {storeData.map(item => {
        return (
          <View>
            <Text>Name : {item.newStName}</Text>
            <Text>Roll# : {item.newStRoll}</Text>
          </View>
        );
      })}
      {/* <View>
        <Text>Name : {storeData.newStName}</Text>
        <Text>Roll# : {storeData.newStRoll}</Text>
      </View> */}

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
