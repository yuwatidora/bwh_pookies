import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ForYouComponent from '../Components/forYouComponent'
import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { UserContext } from "../Context/userContext";


export default function Home() {
  const { user } = useContext(UserContext);
  const handleLogout = async () => {
    await signOut(auth);
  };
  return (
    <ScrollView>
    <SafeAreaView>
  
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/icons/menu.png")}
            style={styles.buttonImageIconStyle}
          />
        </TouchableOpacity>
        {/* <Text style={{fontSize: 25, color: "#777373", fontWeight:700}}>Hi, Person</Text> */}
        <Image style={styles.logo} source={require('../../assets/images/motherbaby.png')}/>
      </View>

      <Text style={{alignItems: "flex-start", fontSize: 28, paddingLeft: 35, paddingTop: 10, color: "#817B7B", fontWeight:600}}>Hi, Person</Text>
      <View style={styles.upcoming}>
        <View style = {styles.calendarView}>
          <Image style = {styles.image_card}source={require('../../assets/images/homecard.png')}/>
        </View>
      </View>

      <Text style={{fontSize: 28, paddingLeft: 35, color: "#777373", fontWeight:600}}>For you</Text>
      <View style={styles.center_wrapper}>
        <View style={styles.foryou_container}>
          <ForYouComponent imageSource={require("../../assets/images/wellness.png")} color="#E0FFDD" title="Postpartum Wellness"/>
          <ForYouComponent imageSource={require("../../assets/images/water.png")} color="#E8F7FF" title="Water Tracker"/>
          <ForYouComponent imageSource={require("../../assets/images/calendar-icon.png")}color="#FFDDDD" title="Schedule Appointment"/>
          <ForYouComponent imageSource={require("../../assets/images/magglass.png")}color="#FFF3C8" title="Find a gynecologist"/>
        </View>
      </View>
                  <Text
                style={{
                    textAlign: "center",
                    marginTop: 20,
                    fontWeight: "600",
                    color: "grey",
                    fontSize: 16,
                }}
            >
                Home Page: {user.email}
            </Text>
            
            <TouchableOpacity
                onPress={handleLogout}
                className="p-1 bg-red-400 rounded-lg"
            >
                <Text
                    style={{
                        textAlign: "center",
                        marginTop: 20,
                        fontWeight: "600",
                        color: "grey",
                        fontSize: 16,
                    }}
                >
                    Logout
                </Text>
            </TouchableOpacity>
    </SafeAreaView>
    </ScrollView>
  )
}

const styles =StyleSheet.create({
  header:{
    flexDirection: 'row',
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
  upcoming:{
    alignItems: "center",
    height: "20%",
    // paddingVertical: 10,

    //borderWidth: "1px",
  },
  calendarView:{
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
    
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-between',
    marginTop: 5,

    //borderWidth: "1px",
    
  },
  center_wrapper:{
    alignItems: "center",
  },

})

  