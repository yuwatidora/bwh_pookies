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

const Appointment = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
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

        <View style={styles.inPutcontainer}>
          <TextInput style={styles.appointmentInput} placeholder="Reason of Appointment"></TextInput>
          <TextInput style={styles.gyno} placeholder="Name of Gynecologist"></TextInput>
        </View>
        <View style={styles.dateTimeContainer}>
          <View>
            <Button onPress={showDatepicker} title="Pick a Date" />
          </View>
          <View>
            <Button onPress={showTimepicker} title="Pick a Time" />
          </View>
          {show && (
            <DateTimePicker style={styles.picker}
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              onChange={onChange}
              minimumDate={new Date(2024, 1, 4)}
            />
          )}
        </View>
        <Text style={styles.timeSlot}>Time Slot Selected:</Text>
        <Text style={styles.dateTime}>
          {" "}
          {date.toLocaleString()}
        </Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.appointButtonContainer}>
          <View style={styles.appointmentContainer}>
            <Text style={styles.appointmentText}>
              Book Your Appointment
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    
  },
  appointmentText: {
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "600",
    color: "#403939",
    fontSize: 16,
  },
});


export default Appointment;