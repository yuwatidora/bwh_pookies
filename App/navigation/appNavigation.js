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
import Appointment from "../Screens/Appointment";
import SympMoodTracker from "../Components/SympMoodTracker/SympMoodTracker";
import WaterTracker from "../Screens/WaterTracker";
import WaterCheck from "../Screens/WaterCheck";
import Doctors from "../Screens/Doctors";
import Questions from "../Screens/Questions";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const { user } = useContext(UserContext);
  useAuth();

  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Questions">
          <Stack.Screen
            name="Questions"
            options={{ headerShown: false }}
            component={Questions}
          />
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={Home}
          />
          <Stack.Screen
            name="SympMoodTracker"
            options={{ headerShown: false }}
            component={SympMoodTracker}
          />
          <Stack.Screen
            name="Appointment"
            options={{ headerShown: false }}
            component={Appointment}
          />
          <Stack.Screen
            name="Profile"
            options={{ headerShown: false }}
            component={Profile}
          />
          <Stack.Screen
            name="ProfileStatus"
            options={{ headerShown: false }}
            component={ProfileStatusCard}
          />

          <Stack.Screen
            name="WaterCheck"
            options={{ headerShown: false }}
            component={WaterCheck}
          />

          <Stack.Screen
            name="WaterTracker"
            options={{ headerShown: false }}
            component={WaterTracker}
          />

          <Stack.Screen
            name="Homescreen"
            options={{ headerShown: false }}
            component={Home}
          />
          <Stack.Screen
            name="Doctors"
            options={{ headerShown: false }}
            component={Doctors}
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
