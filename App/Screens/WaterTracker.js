import React from 'react';
import {Text, Dimensions,View, StyleSheet,Button, TouchableOpacity, onPressLearnMore} from 'react-native';
import WaterProgress from '../Components/WaterProgress';
import WaterCheck from './WaterCheck';
import { ArrowLeftIcon } from "react-native-heroicons/solid";

export default function WaterTracker({navigation}) {
  return (
    <View style = {styles.container} >
      <View style = {styles.backCont}>
        <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.button}
            >
              <ArrowLeftIcon size="30" color="black" />
        </TouchableOpacity>
      </View>
      <WaterProgress style= {styles.progressContainer}/>

      <TouchableOpacity
          style={styles.checkInButton}
          onPress={() => navigation.navigate(WaterCheck)}
      ><Text style={styles.trackText}>Daily Check In</Text>
      </TouchableOpacity>

      

      </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFE9E9',
        justifyContent: 'center',

    },
    backCont:{
      marginTop: 50,
      
    },
    progressContainer:{
      
    },
    checkInButton:{
      padding: 20,
      backgroundColor: "white",
      borderRadius: 120,
      alignItems: "center",
      marginBottom: 100,
      width: Dimensions.get("screen").width * 0.6,
      alignSelf:"center"
    }
});
  
