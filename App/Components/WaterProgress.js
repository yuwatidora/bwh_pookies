import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Image,
  Dimensions,
} from "react-native";
import Home from "../Screens/Home";
import { useNavigation } from "@react-navigation/core";


const WaterProgress = () => {
  const navigation = useNavigation();
  const [progress, setProgress] = useState(0);
  const translateY = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    // Update progress and trigger animation
    setProgress(progress + 1);
    animateUp();
  };

  const handleReset = () => {
    // Reset progress and trigger animation
    setProgress(0);
    animateUp();
  };

  const animateUp = () => {
    Animated.timing(translateY, {
      toValue: -40 * progress,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    animateUp();
  }, [progress]);

  return (
    
    <View style={styles.container}>
      <View style={styles.container}>
   

        <TouchableOpacity style={styles.pressMebutton} onPress={handlePress}>
          {/* <Text style={styles.buttonText}>Press me</Text> */}
          <Image source={require("../../assets/images/waterButton.png")}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>

        <Text style={styles.progressText}>You Drank {progress} cups today!</Text>

      </View>

      <View>

        <Animated.Image
            source={require("../../assets/images/waterTrack.png")}
            style={[styles.image, { transform: [{ translateY }] }]}
          />

      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    marginBottom: -2500,
    marginRight: -254
  },

  progressIndicator: {
    backgroundColor: '#3498DB',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  progressText: {
    color: "grey",
    fontSize: 18,
    position: "absolute",
    top:"65%"
    // transform: [{ translateX: -9 }, { translateY: -9 }],
  },
  pressMebutton: {
    marginTop: 80,
    padding: 10,

  },
  resetButton: {
    marginTop: 40,
    padding: 10,
    backgroundColor: "#FF6347", // Red color for reset button
    borderRadius: 5,
  },
  homeButton: {
    color: "#fff",
    marginTop: -10,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#FF6347"
    
  },
});

export default WaterProgress;

