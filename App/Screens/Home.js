import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ForYouComponent from '../Components/forYouComponent'

export default function Home() {
  return (
    <SafeAreaView>
  
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/icons/menu.png")}
            style={styles.buttonImageIconStyle}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 25, color: "#777373", fontWeight:700}}>Hi, Person</Text>
      </View>

      <Text style={{alignItems: "flex-start", fontSize: 28, paddingLeft: 30, paddingTop: 10, color: "#817B7B", fontWeight:600}}>Upcoming Schedules</Text>
      <View style={styles.upcoming}>
        <View style = {styles.calendarView}>
          <Text>Calendar here</Text>
        </View>
      </View>

      <Text style={{fontSize: 28, paddingLeft: 30, color: "#777373", fontWeight:600}}>For you</Text>
      <View style={styles.center_wrapper}>
        <View style={styles.foryou_container}>
          <ForYouComponent imageSource={require("../../assets/images/wellness.png")} color="#E0FFDD" title="Postpartum Wellness"/>
          <ForYouComponent imageSource={require("../../assets/images/water.png")} color="#E8F7FF" title="Water Tracker"/>
          <ForYouComponent imageSource={require("../../assets/images/calendar-icon.png")}color="#FFDDDD" title="Schedule Appointment"/>
          <ForYouComponent imageSource={require("../../assets/images/magglass.png")}color="#FFF3C8" title="Find a gynecologist"/>
        </View>
      </View>
    
    </SafeAreaView>
  )
}

const styles =StyleSheet.create({
  header:{
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 60,
    paddingHorizontal: 26,

    //borderWidth: "1px"
  },
  upcoming:{
    alignItems: "center",
    height: "16%",
    // paddingVertical: 10,

    //borderWidth: "1px",
  },
  calendarView:{
    width: "88%",
    height: "80%",
    backgroundColor: "#FFC9AA",
    borderRadius: 20,
    marginTop: 10,

    alignItems: "center",

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