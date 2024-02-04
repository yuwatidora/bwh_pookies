import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const WaterProgress = () => {
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
      <Animated.View style={[styles.progressIndicator, { transform: [{ translateY }] }]}>
        <Text style={styles.progressText}>{progress}</Text>
      </Animated.View>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Press me</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    color: '#fff',
    fontSize: 18,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#2ECC71',
    borderRadius: 5,
  },
  resetButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#FF6347', // Red color for reset button
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default WaterProgress;
