import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import CheckInCard from "../Components/checkInCards";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";
import WaterTracker from "./WaterTracker";

export default function WaterCheck({navigation}) {
  return (
    <View style={styles.container}>
        <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.button}
          >
            <ArrowLeftIcon size="30" color="black" />
          </TouchableOpacity>
      <View style={styles.headingCont}>
        <Text style={styles.heading}>Your Daily Check In</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator="false" style={styles.ScrollView}>
        <CheckInCard question="How many minutes did you exercise today?" />
        <CheckInCard question="Did you breastfeed today?" />
        <CheckInCard question="What is the temperature today?" />
        <CheckInCard />
        <CheckInCard />
        <TouchableOpacity
            style={styles.trackButton}
          onPress={() => navigation.navigate(WaterTracker)}
        ><Text style={styles.trackText}>Start Tracking!</Text></TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E1F4FF",
    marginBottom:20
  },
  button: {
    marginRight:"70%",
    marginTop:"20%",
    padding: 10
  },
  headingCont: {
    marginRight: 50,
    marginBottom: 15,
    alignItems:"center"
  },
  heading: {
    
    fontSize: 30,
  },
  card: {},
  trackButton: {
    padding: 20,
    backgroundColor: "pink",
    borderRadius: 120,
    alignItems: "center",
    marginTop: 20,
    width: Dimensions.get("screen").width * 0.6,
    alignSelf:"center"
  },
  trackText:{
    textAlign:"center",
    fontWeight: 500,
    fontSize: 15
  },
  ScrollView: {
    marginBottom: 20
  }

});
