import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../Shared/Colors";
import motherbaby from "./../../assets/images/motherbaby.png";
import SignInWithOAuth from "../Components/SignInWithOAuth";
export default function Login() {
  return (
    <View style={{ alignItems: "center" }}>
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
            marginTop: 55,
            fontWeight: "600",
            color: Colors.fontColor,
            fontSize: 16
          }}
        >
          Track, Care & Heal
        </Text>
        <SignInWithOAuth/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appImage: {
    width: 500,
    height: 800,
    marginTop: 10,
    alignSelf: "center",
    objectFit: "contain",
  },

  heading: {
    fontSize: 26,
    fontWeight: "bold",
    color: Colors.fontColor,
  },
});
