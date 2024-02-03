import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Login from "./App/Screens/Login";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import SignInWithOAuth from "./App/Components/SignInWithOAuth";
import Home from "./App/Screens/Home";

export default function App() {
  return (
    <ClerkProvider
      publishableKey={
        "pk_test_Y29oZXJlbnQtZ2xvd3dvcm0tODUuY2xlcmsuYWNjb3VudHMuZGV2JA"
      }
    >
      <SafeAreaView style={styles.container}>
        <SignedIn>
          <Home/>
        </SignedIn>
        <SignedOut>
          <Login/>
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
