//import liraries
import React from 'react';
import {View, Text} from 'react-native';

import {Provider} from 'react-redux';
import store from './src/config/Store';

import AddData from './src/components/addData/AddData';
import ShowData from './src/components/showData/ShowData';

// stack navigation start=================

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddTasks from './src/components/addTasks/AddTasks';

const Stack = createStackNavigator();

// const Tab = createBottomTabNavigator();

// stack navigation end===============

// create a component
function App() {
  return (
    <Provider store={store}>
      
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Add Data">
          <Stack.Screen
            name="Add Data"
            component={AddData}
            options={{
              title: 'Tassker',
              headerStyle: {
                // backgroundColor: '#f4511e',
              },
            }}
          />

          <Stack.Screen name="Show Data" component={ShowData} />
          <Stack.Screen name="Add Task" component={AddTasks} />
        </Stack.Navigator>
      </NavigationContainer>
     
     
    </Provider>
  );
}

//make this component available to the app
export default App;
