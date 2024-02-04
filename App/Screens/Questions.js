import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity,TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from "react-native";
import Home from "./Home";

export default function Questions({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 26, fontWeight: 600, color: "#777373", paddingTop: 40}}>Tell us more about yourself...</Text>
            <View style={styles.question}>
                <Text style={{paddingBottom: 5, alignItems: "flex-start",
            fontSize: 17,
            paddingLeft: 15,
            paddingTop: 20,
            paddingBottom: 15,
            color: "#817B7B",
            fontWeight: 600}}>When did you give birth?</Text>
                <TextInput
                style={{
                    paddingVertical: 10,
                    borderWidth: 1,
                    borderRadius:15,
                    width: "80%",
                }}
                placeholder="mm/dd/yy">
                </TextInput>
            </View>
            <View style={styles.question}>
                <Text style={{paddingBottom: 5, alignItems: "flex-start",
            fontSize: 17,
            paddingLeft: 15,
            paddingTop: 20,
            paddingBottom: 15,
            color: "#817B7B",
            fontWeight: 600}}>Is this your first time being a mother?</Text>
                <TextInput
                style={{
                    paddingVertical: 10,
                    borderWidth: 1,
                    borderRadius:15,
                    width: "80%",
                }}
                placeholder="Yes/No">
                </TextInput>
            </View>
            <View style={styles.question}>
                <Text style={{paddingBottom: 5, alignItems: "flex-start",
            fontSize: 17,
            paddingLeft: 15,
            paddingTop: 20,
            paddingBottom: 15,
            color: "#817B7B",
            fontWeight: 600}}>How old are you?</Text>
                <TextInput
                style={{
                    paddingVertical: 10,
                    borderWidth: 1,
                    borderRadius:15,
                    width: "80%",
                }}
                placeholder="Enter age">
                </TextInput>
            </View>
            <View style={styles.question}>
                <Text style={{paddingBottom: 5, alignItems: "flex-start",
            fontSize: 17,
            paddingLeft: 15,
            paddingTop: 20,
            paddingBottom: 15,
            color: "#817B7B",
            fontWeight: 600}}>How tall are you?</Text>
                <TextInput
                style={{
                    paddingVertical: 10,
                    borderWidth: 1,
                    borderRadius:15,
                    width: "80%",
                }}
                placeholder="Enter height">
                </TextInput>
            </View>
            <TouchableOpacity
            style={{
              padding: 15,
              backgroundColor: "#FFDDDD",
              borderRadius: 120,
              alignItems: "center",
              marginTop: 20,
              width: Dimensions.get("screen").width * 0.6,
            }}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={{
              textAlign: "center",
              fontWeight: "600",
              color: "grey",
              fontSize: 20,
            }}>Submit</Text>
          </TouchableOpacity>
          <Image source={require("../../assets/images/people.png")} style={{width: 300, height: 300, marginTop: 45, overflow: "visible"}}/>
        </View>
    )
}
const styles =StyleSheet.create({
    container:{
        marginTop: 50,
        paddingHorizontal: 20,
        alignItems: "center",
        // borderWidth: "1px",
    },
    input:{
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
    },
    question:{
        padding: 10,
        width:400,
        alignItems: "center",
    },
});