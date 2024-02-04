import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity, SafeAreaView, ImageBackground } from "react-native";
import React from "react";
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';


export default function ProfileStatusCard() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeftIcon style={styles.backArrow} />
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    backArrow: {
        color:"black",
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center",
        marginTop: "15%"
    }
})