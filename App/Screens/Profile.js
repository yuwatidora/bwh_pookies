import { View, Text } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { SympContext } from "../Context/sympContext"

export default function Profile() {
    const { activeMood, setSelectedMood, activeSymptoms, setSelectedSymptoms } = useContext(SympContext);

    return (
        console.log(activeMood, activeSymptoms)
    )
}