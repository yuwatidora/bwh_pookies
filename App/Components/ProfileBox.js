import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity, SafeAreaView, ImageBackground } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../Context/userContext";



export default function ProfileBox() {
    const { name } = useContext(UserContext);
    return (
        <View style={styles.main}>
            <View style={styles.imageContainer}>
                <Image source={require("../../assets/images/default.png")} style={styles.image}/>
                <Text style={styles.userName}>{name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        marginTop: "5%",
    },
    imageContainer: {
        alignItems:"center",
        justifyContent: "center"
    },
    image:{
        width: 100,
        height: 100,
        borderRadius:100,
        marginBottom: 5
    },
    userName: {
        fontSize: 16,
        color: "black",
        fontWeight: 500
    }
})