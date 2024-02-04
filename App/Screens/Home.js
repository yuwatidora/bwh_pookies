import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { UserContext } from "../Context/userContext";
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const { user } = useContext(UserContext);
    const navigation = useNavigation();
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
                onPress={() => navigation.navigate('Symptoms')}>
                <Text>
                    Symptom Check
                </Text>
            </TouchableOpacity>
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
                    Logout
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles =StyleSheet.create({
  header:{
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 60,
    paddingHorizontal: 26,

    //borderWidth: "1px"
  },
  upcoming:{
    alignItems: "center",
    height: "16%",
    // paddingVertical: 10,

    //borderWidth: "1px",
  },
  calendarView:{
    width: "88%",
    height: "80%",
    backgroundColor: "#FFC9AA",
    borderRadius: 20,
    marginTop: 10,

    alignItems: "center",

  },
  foryou_container:{
    width: "88%",
    
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-between',
    marginTop: 5,

    //borderWidth: "1px",
    
  },
  center_wrapper:{
    alignItems: "center",
  },
})