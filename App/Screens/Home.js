import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { UserContext } from "../Context/userContext";


export default function Home({navigation}) {
  const { user } = useContext(UserContext);
  const handleLogout = async () => {
    await signOut(auth);
  };
  return (
    <SafeAreaView className="flex-1 flex-row justify-center items-center">
      <Text
        style={{
          textAlign: "center",
          marginTop: 20,
          fontWeight: "600",
          color: "grey",
          fontSize: 16,
        }}
      >
        Home Page: {user.email}
      </Text>
      <TouchableOpacity
        onPress={handleLogout}
        className="p-1 bg-red-400 rounded-lg"
      >
        <Text
          style={{
            textAlign: "center",
            marginTop: 20,
            fontWeight: "600",
            color: "grey",
            fontSize: 16,
          }}
        >
         <TouchableOpacity 
          onPress={() => navigation.navigate("Appointment")}
          style={{
            padding: 10,
            borderRadius: 120,
            alignItems: "center",
            marginTop: 20,
            width: Dimensions.get("screen").width * 0.6,
          }}>
            <Text>Appointment</Text>
          </TouchableOpacity>
          Logout
        </Text>
      </TouchableOpacity>
      <View>
        
      </View>
    </SafeAreaView>
  );
}
