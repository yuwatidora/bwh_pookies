import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Welcome from '../Screens/Welcome';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import WaterTracker from '../Screens/WaterTracker';
import WaterCheck from '../Screens/WaterCheck';

const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='WaterTracker'>
        <Stack.Screen name="Home" options={{headerShown: false}} component={Home} />
        <Stack.Screen name="Welcome" options={{headerShown: false}} component={Welcome} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
        <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUp} />
        <Stack.Screen name ="WaterTracker" options={{headerShown: false}} component={WaterTracker}/>
        <Stack.Screen name ="WaterCheck" options={{headerShown: false}} component={WaterCheck}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
