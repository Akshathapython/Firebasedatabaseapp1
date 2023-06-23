import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddItem from './screens/AddItem';
import List from './screens/List';
import Home from './screens/Home';
import Login from './screens/Login';
const Stack = createStackNavigator();
const App = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
   
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='AddItem' component={AddItem}/>
      <Stack.Screen name='List' component={List}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App