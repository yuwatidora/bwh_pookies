import React from 'react';
import { View, Text,  StyleSheet } from 'react-native';

const DoctorCard = ({ question, initialValue, onChangeText }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{question}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    width: 300,
    padding: 10,
    paddingBottom: 50,
    borderRadius: 20,
    elevation: 3, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: { width: 1, height: 1 }, // for iOS shadow
    shadowOpacity: 0.3, // for iOS shadow
    marginHorizontal: 1,
    marginVertical: 20,

  },
  cardText: {
    fontSize: 18,
    color: '#833A3A',
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 10,
    
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 16,
    borderRadius: 20,
    marginHorizontal: 15
  },
});

export default DoctorCard;


