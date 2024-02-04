import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Login from "./App/Screens/Welcome";
import Home from "./App/Screens/Home";
import AppNavigation from "./App/navigation/appNavigation";
import UserProvider from "./App/Context/userContext";
import SympProvider from "./App/Context/sympContext";

export default function App() {
  return (
    <SympProvider>
      <UserProvider>
        <AppNavigation />
      </UserProvider>
    </SympProvider>
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
