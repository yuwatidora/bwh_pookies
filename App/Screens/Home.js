
import React from 'react';
import { SafeAreaView, Text, StyleSheet, View, Button } from "react-native";
import { ClerkProvider, SignedIn, SignedOut,useAuth } from "@clerk/clerk-expo";
import { SignInWithOAuth } from "./../Components/SignInWithOAuth";
export default function Home() {
    const { isLoaded,signOut } = useAuth();
    return (
        <View>
            <Button title="Signout"
            onPress={()=>signOut()}></Button>
            <Text>Home</Text>
        </View>
    )
}