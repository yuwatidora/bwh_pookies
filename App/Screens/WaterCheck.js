import {ScrollView, View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import CheckInCard from "../Components/checkInCards";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { SafeAreaView } from 'react-native-safe-area-context'

export default function WaterCheck(){
    return(
        <View style = {styles.container}>
            <View style = {styles.headingCont}>
                <Text style = {styles.heading}>Your Daily Check In</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator = "false">
                <CheckInCard question = "How many minutes did you exercise today?"/>
                <CheckInCard question = "Did you breastfeed today?"/>
                <CheckInCard question = "What is the temperature today?"/>
                <CheckInCard/>
            </ScrollView>
        </View>


    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E1F4FF',
      
    },
    headingCont: {
       marginRight: 50,
       marginBottom: 15
    },
    heading: {
        marginTop: 100,
        fontSize: 30,
    },
    card: {
        
    }

});