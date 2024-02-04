import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import Colors from "../Shared/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (email && password) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (err) {
        console.log("got error: ", err.message);
      }
    }
  };
  return (
    <View style={{ backgroundColor: Colors.white }}>
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              padding: 10,
              backgroundColor: "pink",
              borderRadius: 120,
              alignItems: "center",
              marginTop: 20,
              width: Dimensions.get("screen").width * 0.3,
            }}
          >
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Image
            source={require("../../assets/images/signup.png")}
            style={{ width: 165, height: 110 }}
          />
        </View>
      </SafeAreaView>
      <View
        className="flex-1 bg-white px-8 pt-8"
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
      >
        <View className="form space-y-2">
          <Text
            style={{
              textAlign: "center",
              marginTop: 20,
              fontWeight: "600",
              color: "grey",
              fontSize: 16,
            }}
          >
            Email Address
          </Text>
          <TextInput
            style={{
              textAlign: "center",
              marginTop: 20,
              fontWeight: "600",
              color: "grey",
              fontSize: 16,
            }}
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder="Enter Email Here"
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
          <Text
            style={{
              textAlign: "center",
              marginTop: 20,
              fontWeight: "600",
              color: "grey",
              fontSize: 16,
            }}
          >
            Password
          </Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7"
            secureTextEntry
            style={{
              textAlign: "center",
              marginTop: 20,
              fontWeight: "600",
              color: "grey",
              fontSize: 16,
            }}
            placeholder="Enter Password Here"
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
          <TouchableOpacity
            style={{
              padding: 25,
              backgroundColor: "pink",
              borderRadius: 120,
              alignItems: "center",
              marginTop: 20,
              width: Dimensions.get("screen").width * 0.6,
            }}
            onPress={handleSubmit}
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
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="py-3 bg-yellow-400 rounded-xl">
            <Text
              style={{
                textAlign: "center",
                marginTop: 20,
                fontWeight: "600",
                color: "grey",
                fontSize: 16,
              }}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
