//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';

import AddTasksStyles from "./AddTasksStyle"
// create a component
const AddTasks = () => {
    return (
      <View style={AddTasksStyles.container}>
        <Text>AddTasks</Text>
        <View style={AddTasksStyles.mdl}></View>
        <View style={{flex: 1}}>
          <TouchableOpacity style={AddTasksStyles.btn} onPress={()=>{alert("Hello World")}}>
            <Text style={{textAlign: 'center', color: '#FFFFFF'}}>
              + Add a New Task
            </Text>
          </TouchableOpacity>
        </View>
        {/* <Button title="+ Add a New Task" style={AddTasksStyles.btn} color="#FF0000" /> */}
      </View>
    );
};

// define your styles

//make this component available to the app
export default AddTasks;
