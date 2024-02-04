import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  Dimensions,
  SafeAreaView,
  Button,
} from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { ArrowLeftIcon } from "react-native-heroicons/solid";

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
    <View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          padding: 15,
          backgroundColor: "pink",
          borderRadius: 120,
          alignItems: "center",
          marginTop: 20,
          width: Dimensions.get("screen").width * 0.4,
        }}
      >
        <ArrowLeftIcon size="20" color="black" />
      </TouchableOpacity>
      <SafeAreaView>
        <Text
          style={{
            textAlign: "center",
            marginTop: 20,
            fontWeight: "600",
            color: "grey",
            fontSize: 16,
          }}
        >
          Start Booking!
        </Text>

        <View>
          <View></View>
          <TextInput
            style={{
              textAlign: "center",
              marginTop: 20,
              fontWeight: "600",
              color: "grey",
              fontSize: 16,
            }}
            placeholder="Reason of Appointment"
          ></TextInput>
          <TextInput
            style={{
              textAlign: "center",
              marginTop: 20,
              fontWeight: "600",
              color: "grey",
              fontSize: 16,
            }}
            placeholder="Name of Gynecologist"
          ></TextInput>
        </View>
        <Button onPress={showDatepicker} title="Pick a Date" />
        <Button onPress={showTimepicker} title="Pick a Time" />
        <Text
          style={{
            textAlign: "center",
            marginTop: 20,
            fontWeight: "600",
            color: "grey",
            fontSize: 16,
          }}
        >
          Time Slot Selected:
        </Text>
        <Text
          style={{
            textAlign: "center",
            marginTop: 20,
            fontWeight: "600",
            color: "grey",
            fontSize: 16,
          }}
        >
          {" "}
          {date.toLocaleString()}
        </Text>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
            minimumDate={new Date(2024, 1, 4)}
          />
        )}

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            padding: 10,
            backgroundColor: "pink",
            borderRadius: 40,
            alignItems: "center",
            marginTop: 20,
            width: Dimensions.get("screen").width * 0.34,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              marginTop: 20,
              marginBottom: 20,
              fontWeight: "600",
              color: "grey",
              fontSize: 16,
              alignItems: "center",
            }}
          >
            Book Your Appointment
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default Appointment;
