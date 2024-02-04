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
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
      <View style={styles.headingCont}>
        <Text style={styles.heading}>Your Daily Check In</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator="false">
        <CheckInCard question="How many minutes did you exercise today?" />
        <CheckInCard question="Did you breastfeed today?" />
        <CheckInCard question="What is the temperature today?" />
        <CheckInCard />
        <CheckInCard />
        <TouchableOpacity
            style={{
                padding: 25,
                backgroundColor: "pink",
                borderRadius: 120,
                alignItems: "center",
                marginTop: 20,
                width: Dimensions.get("screen").width * 0.6,
              }}
          onPress={() => navigation.navigate(WaterTracker)}
        ><Text>Start Tracking!</Text></TouchableOpacity>
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
  },
  button: {
    margin: 50,
    padding: 5,
    backgroundColor: "#2ECC71",
    borderRadius: 5,
  },
  headingCont: {
    marginRight: 50,
    marginBottom: 15,
  },
  heading: {
    marginTop: 100,
    fontSize: 30,
  },
  card: {},
});
