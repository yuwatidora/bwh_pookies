import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../Shared/Colors";
import { SafeAreaView } from 'react-native-safe-area-context';
import motherbaby from "./../../assets/images/motherbaby.png";
import { useNavigation } from '@react-navigation/native';


export default function Login({navigation}) {
  return (
    <View className="flex-1 flex justify-around my-4">
      <Image source={motherbaby} style={styles.appImage} />
      <View
        style={{
          backgroundColor: Colors.white,
          padding: 85,
          alignItems: "center",
          marginTop: -300,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <Text style={styles.heading}>The Postpartum Care</Text>
        <Text style={styles.heading}>You Need & Deserve.</Text>
        <Text
          style={{
            textAlign: "center",
            marginTop: 20,
            fontWeight: "600",
            color: Colors.fontColor,
            fontSize: 16
          }}
        >
          Track, Care & Heal
        </Text>
        <View className="space-y-4">
                <TouchableOpacity
                    onPress={()=> navigation.navigate('Login')}
                    className="py-3 bg-yellow-400 mx-7 rounded-xl"
                    style={{
                      padding: 25,
                      backgroundColor: Colors.pink,
                      borderRadius: 120,
                      alignItems: "center",
                      marginTop: 20,
                      width: Dimensions.get("screen").width * 0.6,
                    }}>
                        <Text 
                            className="text-xl font-bold text-center text-gray-700" style={{fontSize:19, color: Colors.fontColor, fontWeight: "bold"}}
                        >
                            Log In
                        </Text>
                </TouchableOpacity>
                <View className="flex-row justify-center">
                    <Text className="text-white font-semibold" style={{
            textAlign: "center",
            marginTop: 20,
            fontWeight: "600",
            color: Colors.fontColor,
            fontSize: 16
          }}>Don't have an account yet?</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
                        <Text className="font-semibold text-yellow-400" style={{
            textAlign: "center",
            marginTop: 10,
            fontWeight: "600",
            color: Colors.fontColor,
            fontSize: 16
          }}> Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appImage: {
    width: 500,
    height: 800,
    marginTop: 0,
    alignSelf: "center",
    objectFit: "contain",
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.fontColor,
    textAlign: "center",
    padding:2
  },
});