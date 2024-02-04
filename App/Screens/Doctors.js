import { View, Text, TouchableOpacity, ScrollView, Dimensions, StyleSheet} from 'react-native'
import React from 'react'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import DoctorCard from "../Components/checkInCards";
const Doctors = ({navigation}) => {
  return (
    <View style={styles.container}>
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
        <DoctorCard />
        <DoctorCard question="Gyno 1" />
        <DoctorCard question="Gyno 2" />
        <DoctorCard />
        <DoctorCard />
        <TouchableOpacity
            style={{
                padding: 25,
                backgroundColor: "pink",
                borderRadius: 120,
                alignItems: "center",
                marginTop: 20,
                width: Dimensions.get("screen").width * 0.6,
              }}
          onPress={() => navigation.navigate(Home)}
        ><Text>Book an Appointment</Text></TouchableOpacity>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "",
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
  
export default Doctors