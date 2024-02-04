import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  Dimensions,
  SafeAreaView,
  Button,
  StyleSheet
} from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import Colors from "../Shared/Colors";
import { StatusBar } from "expo-status-bar";
import Home from "./Home";



export default function Appointment({ navigation }) {
  const [date, setDate] = useState(new Date());

  const onChange = (e, selectedDate) => {
    setDate(selectedDate);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backArrow}
      >
        <ArrowLeftIcon size="20" color="black" />
      </TouchableOpacity>
      <View>
        <Text style={styles.heading}>
          Start Booking!
        </Text>
      </View>
        <View style={styles.inPutcontainer}>
          <TextInput style={styles.appointmentInput} placeholder="Reason of Appointment"></TextInput>
          <TextInput style={styles.appointmentInput} placeholder="Name of Gynecologist"></TextInput>
        </View>
        <Text></Text>
      <DateTimePicker
        value={date}
        mode={"date"}
        is24Hour={true}
        onChange={onChange}
      />
      <Text></Text>
      <View>
      </View>
      <DateTimePicker
        value={date}
        mode={"time"}
        is24Hour={true}
        onChange={onChange}
      />
      <Text> </Text>
      <Text>Time Slot Selected:</Text>
      <Text> </Text>
      <Text>{date.toLocaleString()}</Text>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={() => navigation.navigate(Home)} style={styles.appointButtonContainer}>
          <View style={styles.appointmentContainer}>
            <Text style={styles.appointmentText}>
              Book Your Appointment
            </Text>
          </View>
        </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
  backArrow: {
    position: "absolute",
    color: "black",
    top: "10%",
    left: "10%",
    zIndex: 1,
  },
  heading: {
    textAlign: "center",
    marginTop: "30%",
    marginBottom: "15%",
    fontWeight: "600",
    color: "#403939",
    fontSize: 30,
    letterSpacing: 2,
  },
  inPutcontainer: {
    justifyContent: "center",
  },
  appointmentContainer: {
    alignContent: "center",
  },
  appointmentInput: {
    textAlign: "center",
    height: 40,
    fontWeight: "600",
    color: "grey",
    fontSize: 16,
    paddingLeft: 10,
    marginBottom: 10,
    borderWidth: .5,
    borderColor: "#403939",
    borderRadius: 20
  },
  gyno: {
    textAlign: "center",
    height: 40,
    borderWidth: .5,
    paddingLeft: 10,
    marginBottom: 10,
    borderColor: "#403939",
    borderRadius: 20
  },
  timeSlot: {
    marginVertical:"10%",
    fontSize: 16,
    marginBottom: 10,
    textAlign:"center"
  },
  dateTime: {

    fontSize: 16,
    marginBottom: 20,
    textAlign:"center"
  },
  appointButtonContainer: {
    alignItems: 'center', // Align button to the center
    marginTop: 20,
    backgroundColor:Colors.pink,
    borderRadius: 20,
    padding: 25,

    borderRadius: 100,
    marginTop: 20,
    
  },
  appointmentText: {
    textAlign: "center",
    marginTop: 4,
    marginBottom: 4,
    fontWeight: "600",
    color: "#403939",
    fontSize: 16,
  },
});
