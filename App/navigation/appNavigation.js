import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import Welcome from "../Screens/Welcome";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
import Profile from "../Screens/Profile";
import useAuth from "../../hooks/useAuth";
import { UserContext } from "../Context/userContext";
import ProfileStatusCard from "../Components/profileStatusCard";


const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const { user } = useContext(UserContext);
  useAuth();
  
  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={Home}
          />
          <Stack.Screen
            name="Symptoms"
            options={{ headerShown: false }}
            component={Symptoms}
          />
          <Stack.Screen
            name="ProfileStatus"
            options={{ headerShown: false }}
            component={ProfileStatusCard}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          options={{ headerShown: false }}
          component={Welcome}
        />
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />
        <Stack.Screen
          name="SignUp"
          options={{ headerShown: false }}
          component={SignUp}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
