import { View, Text, TouchableOpacity, Modal, TextInput, Dimensions } from "react-native";
import React, { useState } from "react";
import { Calendar } from "react-native-calendars";

const Appointment = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View>
      <TouchableOpacity
        onPress={() => setShowModal(true)}
        style={{
          backgroundColor: "pink",
          borderRadius: 10,
          margin: 40,
          padding: 10,
          width: 200,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "black", fontSize: 22 }}>Show Calendar</Text>
      </TouchableOpacity>
      <Modal visible={showModal} animationType="fade">
        <Calendar
          style={{ borderRadius: 50, elevation: 20, marginTop: 150 }}
          minDate="2024-02-01"
          hideExtraDays={true}
          onDayPress={(date) => {
            console.log(date);
            navigation.navigate("Home");
          }}
          markedDates={{
            "2024-02-03": {
              marked: true,
              dotColor: "pink",
              selected: true,
              selectedColor: "pink",
            },
          }}
        />
      </Modal>
      <View>
        <TouchableOpacity 
          onPress={() => navigation.navigate("Profile")}
          style={{
            padding: 10,
            borderRadius: 120,
            alignItems: "center",
            marginTop: 20,
            width: Dimensions.get("screen").width * 0.6,
          }}>
            <Text>Or</Text>
            <Text>Book Your Appointment</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default Appointment;
