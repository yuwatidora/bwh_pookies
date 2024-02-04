import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StyleSheet,
} from "react-native";
import React from "react";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import DoctorCard from "../Components/checkInCards";
import Appointment from "./Appointment";
const Doctors = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text></Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.button}
      >
        <ArrowLeftIcon size="20" color="black" />
      </TouchableOpacity>
      <View style={styles.headingCont}>
        <Text style={styles.heading}>Your Local Gynecologists</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator="false">
        <View>
          <Image
            source={require("../../assets/images/page1.png")}
            style={{
              width: 400,
              height: 200,
              alignSelf: "center",
              borderRadius: 20,
            }}
          />
          <Image
            source={require("../../assets/images/page2.png")}
            style={{
              width: 400,
              height: 200,
              marginTop: 20,
              borderRadius: 20,
              alignSelf: "center",
            }}
          />
          <Image
            source={require("../../assets/images/page3.png")}
            style={{
              width: 400,
              height: 200,
              marginTop: 20,
              borderRadius: 20,
              alignSelf: "center",
            }}
          />
          <Image
            source={require("../../assets/images/page5.png")}
            style={{
              width: 400,
              height: 200,
              marginTop: 20,
              borderRadius: 20,
              alignSelf: "center",
            }}
          />
          <Image
            source={require("../../assets/images/page6.png")}
            style={{
              width: 400,
              height: 200,
              marginTop: 20,
              borderRadius: 20,
              alignSelf: "center",
            }}
          />
          <Image
            source={require("../../assets/images/page7.png")}
            style={{
              width: 400,
              height: 200,
              marginTop: 20,
              borderRadius: 20,
              alignSelf: "center",
            }}
          />
          <Image
            source={require("../../assets/images/page8.png")}
            style={{
              width: 400,
              height: 200,
              marginTop: 20,
              borderRadius: 20,
              alignSelf: "center",
            }}
          />
          <Image
            source={require("../../assets/images/page1.png")}
            style={{
              width: 400,
              height: 200,
              marginTop: 20,
              borderRadius: 20,
              alignSelf: "center",
            }}
          />
          <Image
            source={require("../../assets/images/page3.png")}
            style={{
              width: 400,
              height: 200,
              marginTop: 20,
              borderRadius: 20,
              alignSelf: "center",
            }}
          />
        </View>
        <TouchableOpacity
          style={
            styles.button}
          onPress={() => navigation.navigate(Appointment)}
        >
          <Text
            style={{
              textAlign: "center",
              marginTop: 20,
              marginBottom: 20,
              fontWeight: "600",
              color: "#DF6265",
              fontSize: 16,
            }}
          >
            I'm Ready to Book an Appointment!
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "",
  },
  button: {
    margin: 40,
    padding: 5,
    backgroundColor: "pink",
    borderRadius: 15,
    alignSelf: "center"
  },
  headingCont: {
    marginRight: 50,
    marginBottom: 15,
    alignItems: "center"
  },
  heading: {
    textAlign: "center",
    marginTop: 20,
    fontWeight: "600",
    color: "#DF6265",
    fontSize: 30
  },
  card: {},
});

export default Doctors;
