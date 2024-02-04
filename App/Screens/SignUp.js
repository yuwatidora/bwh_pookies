import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
  StyleSheet
} from "react-native";
import Colors from "../Shared/Colors";

import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { UserContext } from "../Context/userContext";

export default function SignUp() {
  const { name, setName } = useContext(UserContext);
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (email && password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);

      } catch (err) {
        console.log('got error: ', err.message);
      }
    }
  }
  return (
    <View style={styles.whitePage}>
      <SafeAreaView style={styles.Page}>
        <View style={styles.Container}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backArrow}
          >
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.centerContainer}>
          <View style={styles.ImageContainer}>
            <Image
              source={require("../../assets/images/signup.png")}
              style={styles.image}
            />
          </View>

          <View
            style={styles.nameTitleBox}
            className="flex-1 bg-white px-8 pt-8"
          >
            <View style={styles.inputField} className="form space-y-2">
              <Text style={styles.nameText}>Name</Text>
              <TextInput style={styles.nameTextInput} className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                value={name}
                onChangeText={(value) => setName(value)}
                placeholder="Enter Name"
              />
              <Text style={styles.emailTitleBox}>
                Email Address
              </Text>
              <TextInput style={styles.emailInput} placeholder="Enter Email" value={email}
                onChangeText={(value) => setEmail(value)}
              />
              <Text style={styles.passwordTitle}>
                Password
              </Text>
              <TextInput style={styles.passwordInput} secureTextEntry placeholder="Enter Password"
                value={password}
                onChangeText={(value) => setPassword(value)}
              />
              <TouchableOpacity onPress={handleSubmit} style={styles.SignUpBox}>
                <Text style={styles.signUpText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.botContainer} className="flex-row justify-center space-x-12">
              <TouchableOpacity style={styles.signupTextButton} className="p-2 bg-gray-100 rounded-2xl">
              </TouchableOpacity>
            </View>
            <View className="flex-row justify-center mt-7">
              <Text style={styles.accountText}>
                Already have an account?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}
                style={styles.loginButton}>
                <Text style={styles.LoginText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>

  );
}

const styles = StyleSheet.create({
  whitePage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  Page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  Image: {
    width: 200,
    height: 200
  },
  Container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  backArrow: {
    alignItems: "center",
    marginTop: "2%",
    marginRight: "77%",
    width: Dimensions.get("screen").width * 0.2,
  },
  loginButton: {
    textAlign: "center",
    margin: 0,
    fontWeight: "600",
    color: "grey",
    fontSize: 16,
  },
  inputField: {
    justifyContent: "center",
    alignItems: "center"
  },
  nameTitleBox: {
    textAlign: "center",
    marginTop: 20,
    fontWeight: "600",
    color: "grey",
    fontSize: 16,
  },
  nameText: {
    textAlign: "center",
    marginTop: 20,
    fontWeight: "500",
    color: "#403939",
    fontSize: 16,
  },
  nameTextInput: {
    textAlign: "center",
    marginTop: 20,
    fontWeight: "600",
    color: "grey",
    fontSize: 16,
  },
  emailTitleBox: {
    textAlign: "center",
    marginTop: 20,
    fontWeight: "500",
    color: "#403939",
    fontSize: 16,
  },
  emailInput: {
    textAlign: "center",
    marginTop: 20,
    fontWeight: "600",
    color: "grey",
    fontSize: 16,
  },
  passwordTitle: {
    textAlign: "center",
    marginTop: 20,
    fontWeight: "500",
    color: "#403939",
    fontSize: 16,
  },
  passwordInput: {
    textAlign: "center",
    marginTop: 20,
    fontWeight: "600",
    color: "grey",
    fontSize: 16,
  },
  SignUpBox: {
    padding: 10,
    backgroundColor: Colors.pink,
    borderRadius: 120,
    alignContent: "center",
    marginTop: 20,
    textAlign: "center",
    width: Dimensions.get("screen").width * 0.5,
  },
  signUpText: {
    textAlign: "center",
    fontWeight: "600",
    color: Colors.fontColor,
    fontSize: 16,
    padding: "3%"
  },
  signupTextButton: {
    padding: 10,
    borderRadius: 120,
    alignItems: "center",
    width: Dimensions.get("screen").width * 0.6,
  },
  accountText: {
    textAlign: "center",
    fontWeight: "600",
    color: "grey",
    fontSize: 16,
  },
  LoginText: {
    textAlign: "center",
    fontWeight: "600",
    color: "orange",
    fontSize: 16,
  },
  botContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
})