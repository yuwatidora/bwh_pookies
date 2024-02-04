// import { View, Text, TouchableOpacity, Modal } from "react-native";
// import React, { useState } from "react";
// import { Calendar } from "react-native-calendars";
// const Appointment = () => {
//   const [showModal, setShowModal] = useState(false);
//   return (
//     <View>
//       <TouchableOpacity
//         onPress={() => setShowModal(true)}
//         style={{
//           backgroundColor: "pink",
//           borderRadius: 10,
//           margin: 40,
//           padding: 10,
//           width: 200,
//           alignItems: "center",
//         }}
//       >
//         <Text style={{ color: "black", fontSize: 22 }}>Show Calendar</Text>
//       </TouchableOpacity>
//       <Modal visible={showModal} animationType="fade">
//         <Calendar
//           style={{ borderRadius: 50, elevation: 20, marginTop: 150 }}
//           minDate="2024-02-01"
//           hideExtraDays= {true}
//           onDayPress={(date) => {
//             console.log(date)
//         }
//         }
//           markedDates={{
//             "2024-02-03": {marked: true, dotColor: "pink", selected: true, selectedColor: "pink"}
//           }}
//         />
//       </Modal>
//     </View>
//   );
// };
// export default Appointment;
"use strict";