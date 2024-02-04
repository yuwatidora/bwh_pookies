import { View, Text } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { SympContext } from "../Context/sympContext";
import { UserContext } from "../Context/userContext";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  const { activeMood, setSelectedMood, activeSymptoms, setSelectedSymptoms } =
    useContext(SympContext);
  const { name } = useContext(UserContext);

  return (
    <View>
        <SafeAreaView>
        <Text>{name}</Text>  
        </SafeAreaView>
    </View>
  );
}
