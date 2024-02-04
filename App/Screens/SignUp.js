import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

export default function SignUp() {
  const navigation = useNavigation();
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const handleSubmit = async ()=>{
    if(email && password){
        try{
            await createUserWithEmailAndPassword(auth, email, password);

        }catch(err){
            console.log('got error: ',err.message);
        }
    }
}
  return (
    <View style={{ backgroundColor: "white" }}>
      <SafeAreaView className="flex ">
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              padding: 25,
              backgroundColor: "pink",
              borderRadius: 120,
              alignItems: "center",
              marginTop: 20,
              width: Dimensions.get("screen").width * 0.6,
            }}
          >
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Image
            source={require("../../assets/images/signup.png")}
            style={{ width: 200, height: 200 }}
          />
        </View>
      </SafeAreaView>
      <View
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
        className="flex-1 bg-white px-8 pt-8"
      >
        <View className="form space-y-2">
        <Text style={{
              textAlign: "center",
              marginTop: 20,
              fontWeight: "600",
              color: "grey",
              fontSize: 16,
            }}>Name</Text>
          <TextInput
            style={{
              textAlign: "center",
              marginTop: 20,
              fontWeight: "600",
              color: "grey",
              fontSize: 16,
            }}
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            value="john snow"
            placeholder="Enter Name"
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
            placeholder="email"
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
            style={{
              textAlign: "center",
              marginTop: 20,
              fontWeight: "600",
              color: "grey",
              fontSize: 16,
            }}
            secureTextEntry
            placeholder="Enter Password"
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
          <TouchableOpacity
            onPress={handleSubmit}
            style={{
              padding: 25,
              backgroundColor: "pink",
              borderRadius: 120,
              alignItems: "center",
              marginTop: 20,
              width: Dimensions.get("screen").width * 0.6,
            }}
          >
            <Text style={{
              textAlign: "center",
              marginTop: 10,
              fontWeight: "600",
              color: "grey",
              fontSize: 20,
            }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center space-x-12">
        <TouchableOpacity
            style={{
              padding: 10,
              borderRadius: 120,
              alignItems: "center",
              marginTop: 20,
              width: Dimensions.get("screen").width * 0.6,
            }}
            className="p-2 bg-gray-100 rounded-2xl"
          >
          </TouchableOpacity>
          
        </View>
        <View className="flex-row justify-center mt-7">
          <Text style={{
              textAlign: "center",
              marginTop: 20,
              fontWeight: "600",
              color: "grey",
              fontSize: 16,
            }}>
            Already have an account?
          </Text>
          <TouchableOpacity 
          onPress={() => navigation.navigate("Login")}
          style={{
            padding: 10,
            borderRadius: 120,
            alignItems: "center",
            marginTop: 20,
            width: Dimensions.get("screen").width * 0.6,
          }}>
            <Text style={{
              textAlign: "center",
              marginTop: 20,
              fontWeight: "600",
              color: "orange",
              fontSize: 20,
            }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
