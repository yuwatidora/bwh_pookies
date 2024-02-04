import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity, SafeAreaView, ImageBackground } from "react-native";
import React from "react";
import { ArrowLeftIcon, HomeIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';


export default function ProfileStatusCard() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeftIcon style={styles.backArrow} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <HomeIcon outline={24} style={styles.home}/>
            </TouchableOpacity>
            

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: "15%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems: "center"
    },
    backArrow: {
        color:"black",
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center",
        marginTop: "15%"
    },
    home: {
        color: "black",
    }
})