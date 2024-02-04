import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ForYouComponent from "../Components/forYouComponent";
import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { UserContext } from "../Context/userContext";
import SympMoodTracker from "../Components/SympMoodTracker/SympMoodTracker";
import WaterTracker from "./WaterTracker";
import WaterCheck from "./WaterCheck";

export default function Home() {
  const { name } = useContext(UserContext);
  const [isVisible, setVisible] = useState(false);
  const navigation = useNavigation();

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handleProfile = () => {
    navigation.navigate("Profile");
    toggleModal();
    console.log("profiel!")
  }

  const handleNavigation = (screenName) => {
    console.log("navigatingg")
    navigation.navigate(screenName);
  };
  const toggleModal = () => {
    setVisible(!isVisible);
  };
  return (
    <SafeAreaView style={{ flexGrow: 1 }}>
      <ScrollView style={styles.scroller}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.menu} onPress={toggleModal}>
            <Image
              source={require("../../assets/icons/menu.png")}
              style={styles.buttonImageIconStyle}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 25, color: "#777373", fontWeight: 700 }}>
            Hi, {name}
          </Text>
        </View>

      <Modal
          animationType="slide"
          transparent={true}
          visible={isVisible}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
            <TouchableOpacity onPress={handleProfile}>
                <Text style={styles.modalText} >Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleLogout}>
                <Text style={styles.modalText}>Log Out</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleModal}>
                <Text style={styles.modalText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      <Text style={{alignItems: "flex-start", fontSize: 28, paddingLeft: 30, paddingTop: 10, color: "#817B7B", fontWeight:600}}>Upcoming Schedules</Text>

      <View style={styles.center_wrapper}>
          <View style={styles.foryou_container}>
            <TouchableOpacity
              onPress={() => navigation.navigate(SympMoodTracker)}
            >
              <ForYouComponent
                imageSource={require("../../assets/images/wellness.png")}
                color="#E0FFDD"
                title="Postpartum Wellness"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(WaterCheck)}
            >
            <ForYouComponent
              imageSource={require("../../assets/images/water.png")}
              color="#E8F7FF"
              title="Water Tracker"
            />
            </TouchableOpacity>

            <ForYouComponent
              imageSource={require("../../assets/images/calendar-icon.png")}
              color="#FFDDDD"
              title="Schedule Appointment"
            />
            <ForYouComponent
              imageSource={require("../../assets/images/magglass.png")}
              color="#FFF3C8"
              title="Find a Gynecologist"
            />

            <TouchableOpacity onPress={handleLogout}>
              <Text style={styles.modalText}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    //alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 27,

    //borderWidth: "1px"
  },
  logo:{
    width:65,
    height: 65,
    overflow: "visible",
  },
  upcoming: {
    alignItems: "center",

    height: "20%",
    // paddingVertical: 10,

    //borderWidth: "1px",

  },
  calendarView: {
    width: "88%",
    height: "80%",
    
    marginTop: 10,
    alignItems: "center",
  },
  image_card:{
    width: "98%",
    height: 150,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity:10,
    shadowOffset: {
      width: 0,
      height: 2,
    },

  },
  foryou_container:{
    width: "88%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 5,
  },
  center_wrapper: {
    alignItems: "center",
  },

  logOut: {
    textAlign: "center",
    marginTop: 10,
    fontWeight: "600",
    color: "grey",
    fontSize: 16,
  },
  Email: {
    textAlign: "center",
    marginTop: 20,
    fontWeight: "600",
    color: "grey",
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
  },
  modalContent: {
    width: "50%",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    marginRight:30,
    alignContent:"center"
  },
  modalText: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#675D5D",
    margin: 10,
    padding: 10,
    textAlign: "center",
    borderRadius: 20,
  },
  LogOutText: {
    textAlign: "center",
    borderWidth: 1,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "10%",
    padding: 5,
    borderRadius: 5,
  },
});
