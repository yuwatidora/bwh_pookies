import { React, useState, useEffect, axios, useContext } from "react";
import { React, useState, useEffect, axios, useContext } from "react";
import * as WebBrowser from "expo-web-browser";
import { Button, Dimensions, Text, TouchableOpacity, StatusBar, View, ScrollView, SafeAreaView, FlatList, StyleSheet } from "react-native";
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import Colors from "../../Shared/Colors";
import moodsAndSymptoms from '../../../assets/data/moodSympData.json';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { SympContext } from "../../Context/sympContext"


const SympMoodTracker = ({navigation}) => {
    const { activeMood, setSelectedMood, activeSymptoms, setSelectedSymptoms } = useContext(SympContext);
const SympMoodTracker = ({navigation}) => {
    const { activeMood, setSelectedMood, activeSymptoms, setSelectedSymptoms } = useContext(SympContext);
    const [mood, setMoodStatus] = useState([]);
    const [symptom, setSymptomsStatus] = useState([]);

    useEffect(() => {
        const moods = moodsAndSymptoms[0].moods.map(item => ({ key: item.id, value: item.name }));
        const moods = moodsAndSymptoms[0].moods.map(item => ({ key: item.id, value: item.name }));
        const symptoms = moodsAndSymptoms[0].symptoms.map(item => ({ key: item.id, value: item.name}));

        setMoodStatus(moods);
        setSymptomsStatus(symptoms);
    }, []);
    
    const handleApply = () => {
        navigation.navigate('Profile', { activeMood, activeSymptoms });
      };

    
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <ArrowLeftIcon style={styles.backArrow} />
            </TouchableOpacity>
            <ScrollView>
                <ScrollView style={styles.scrollView}>
                    <Text style={{
                        alignSelf: "center",
                        fontSize: 23,
                        color: "#777373",
                        fontWeight: 700,
                        marginBottom: 5
                    }}>How are you feeling today?</Text>
                    <View style={styles.boxContainer}>
                        <MultipleSelectList
                            dropdownShown={true}
                            option={mood}
                            search={false}
                            setSelected={(item) => setSelectedMood(item)}
                            try= {() => console.log(item)}
                            try= {() => console.log(item)}
                            data={mood}
                            label="Mood"
                            save="value"
                            onSelect={() => console.log(activeMood)}
                            placeholder="How are you today?"
                            labelStyles={{ fontWeight: "500", fontSize: "25", background: "black", color: "#777373" }}
                            badgeStyles={{ backgroundColor: "#FFC9AA" }}
                            badgeTextStyles={{ color: "black", fontSize: "15" }}
                            scrollViewHeight={100}
                            checkBoxStyles={{ backgroundColor: "transparent", borderColor: "transparent" }}
                        />
                    </View>
                </ScrollView>
                <ScrollView style={styles.scrollView}>
                    <Text style={{
                        alignSelf: "center",
                        fontSize: 23,
                        color: "#777373",
                        fontWeight: 700,
                        marginBottom: 5
                    }}>Any Symptoms?</Text>
                    <View style={[styles.symptomBox]}>
                        <MultipleSelectList
                            dropdownShown={true}
                            option={symptom}
                            search={false}
                            setSelected={(item) => setSelectedSymptoms(item)}
                            data={symptom}
                            label="Symptoms"
                            onSelect={() => console.log(activeSymptoms)}
                            save="value"
                            placeholder="Any Symptoms"
                            labelStyles={{ fontWeight: "500", fontSize: "25", background: "black", color: "777373" }}
                            badgeStyles={{ backgroundColor: "#FFC1C1" }}
                            badgeTextStyles={{ color: "black", fontSize: "15" }}
                            scrollViewHeight={100}
                            checkBoxStyles={{ backgroundColor: "transparent", borderColor: "transparent" }}
                        />
                    </View>
                </ScrollView>
            </ScrollView>
            <TouchableOpacity  onPress={() => navigation.navigate("Profile")} style={styles.applyButton}>
            <TouchableOpacity  onPress={() => navigation.navigate("Profile")} style={styles.applyButton}>
                <Text style={styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFDDDD',
        paddingTop: StatusBar.currentHeight
    },
    scrollView: {
        backgroundColor: '#FFFFFF',
        marginHorizontal: 20,
        marginTop: 20,
        padding: 20,
        borderRadius: 20,
        borderColor: "transparent"
    },
    boxContainer: {
        marginVertical: 20,
    },
    symptomBox: {
        marginVertical: 20,
    },
    heading: {
        fontSize: 25,
        alignSelf: "flex-start",
        marginLeft: 20,
        marginTop: 10,
        color: "#777373",
        fontWeight: 500
    },
    header: {
        alignSelf: "center",
        fontSize: 23,
        color: "#777373",
        fontWeight: 900,
        marginBottom: 10
    },
    applyButton: {
        position: "absolute",
        alignSelf: "center",
        bottom: 50,
        zIndex: 1,
        borderWidth: 1,
        backgroundColor: "#675D5D",
        borderColor: "#675D5D",
        borderRadius: 30,
        width: 120,
        padding: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    applyButtonText: {
        fontSize: 23,
        color: "white",
        textAlign: "center",
        fontWeight: 300,
        letterSpacing: 2,
    },
    backArrow: {
        size: "20",
        color: "black",
        marginHorizontal: 30,
        marginTop: 10
    },
})

export default SympMoodTracker;