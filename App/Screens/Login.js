import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
  StyleSheet
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
    <View style={styles.whitePage}>
      <SafeAreaView style={styles.Page}>
        <View style={styles.Container}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backArrow}>
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.centerContainer}>
        <View style={styles.ImageContainer}>
          <Image source={require("../../assets/images/signup.png")} style={styles.Image}/>
        </View>

        <View className="flex-1 bg-white px-8 pt-8" style={styles.emailTitleBox}>
          <View className="form space-y-2">
            <Text style={styles.emailTitle}>
              Email Address
            </Text>
            <TextInput
              style={styles.emailInput}
              placeholder="Enter Email Here"
              value={email}
              onChangeText={(value) => setEmail(value)}
            />
            <Text style={styles.passwordText}>
              Password
            </Text>
            <TextInput
              secureTextEntry
              style={styles.passwordInput}
              placeholder="Enter Password Here"
              value={password}
              onChangeText={(value) => setPassword(value)}
            />
            <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
              <Text style={styles.loginText}>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.forgotButton}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>
      </SafeAreaView>
    </View>

  );
}

const styles = StyleSheet.create({ 
  whitePage:{
    flex: 1,
    alignContent:"center",
  },
  Page:{
    flex: 1,
    justifyContent:"center"
  },
  Container: {
    flexDirection:"row",
    justifyContent: "space-between",
    paddingHorizontal:20,
    paddingTop:20
  },
  centerContainer: {
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  backArrow: {
    padding: 10,
    alignItems: "center",
    marginTop: "5%",
    width: Dimensions.get("screen").width * 0.2,
  },
  Image: {
    
  },
  passwordText: {
    textAlign: "center",
    marginTop: 20,
    fontWeight: "600",
    color: "grey",
    fontSize: 16,
  },
  loginButton: {
    padding: 10,
    backgroundColor: Colors.pink,
    borderRadius: 120,
    alignContent: "center",
    marginTop: 20,
    textAlign: "center",
    width: Dimensions.get("screen").width * 0.5,
  },
  loginText: {
    textAlign: "center",
    fontWeight: "600",
    color: Colors.fontColor,
    fontSize: 16,
    padding: "3%"
  },
  forgotButton: {
    textAlign: "center",
    marginTop: 20,
    fontWeight: "600",
    color: "grey",
    fontSize: 16,
  },
  passwordInput: {
    textAlign: "center",
    marginTop: 20,
    fontWeight: "600",
    color: "grey",
    fontSize: 16,
  },
  emailInput: {
    textAlign: "center",
    marginTop: 20,
    fontWeight: "600",
    color: "grey",
    fontSize: 16,
  },
  emailTitle: {
    textAlign: "center",
    marginTop: 20,
    fontWeight: "600",
    color: "grey",
    fontSize: 16,
  },
  emailTitleBox: {
    flex: 1,
    borderTopLeftRadius: 50, 
    borderTopRightRadius: 50
  }
})