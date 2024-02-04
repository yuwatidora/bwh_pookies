import React from 'react';
import {Text, View, StyleSheet,Button, onPressLearnMore} from 'react-native';
import WaterProgress from '../Components/WaterProgress';


export default function WaterTracker({navigation}) {
  return (
    <View style = {styles.container} >
      <Button style = {styles.checkInButton}
      title ="Daily Check In" 
      onPress={()=> navigation.navigate('WaterCheck')}
      accessibilityLabel="Learn more about this purple button"
    />
    <WaterProgress/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFE9E9',
        justifyContent: 'center',

    },
    checkInButton:{
        backgroundColor: "#fff",
        alignSelf: 'flex-start'
    }
});
  
