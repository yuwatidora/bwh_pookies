import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity, SafeAreaView, ImageBackground } from "react-native";
import React from "react";
import ProfileStatusCard from "../Components/profileStatusCard";
import ProfileBox from "../Components/ProfileBox";



export default function Profile() {
 
    return (
        <>
            <ImageBackground source={require("../../assets/images/profile.png")} style={styles.bgImage}>
                <View style={styles.container}>
                <ProfileStatusCard/>
                <ProfileBox/>
                <View style={styles.botContainer}>
                <View style={styles.CardContainer}>
                    <View style={styles.MoodContainer}>
                        <Text style={styles.cardText}>Today's Mood</Text>
                    
                    </View>
                    <View style={styles.SympContainer}>
                        <Text style={styles.cardText}>Today's Symptoms</Text>
                        
                    </View>
            </View>
        </View>
                </View>
            </ImageBackground>
        </>
    )
}

const styles = StyleSheet.create({
    bgImage: {
        flex:1,
        resizeMode:"cover",
        width:"100%",
        height: "100%"
    },
    container: {
        marginHorizontal:30,
        marginTop:10
    },
    CardContainer: {
        backgroundColor: "white",
        width: "100%",
        height: "60%",
        borderRadius: 10,
        padding: 10,
        marginTop:20,
        alignItems: "center",

    },
    cardText:{
        fontSize: 20,
        fontWeight:400,
        marginVertical:15
    }
})