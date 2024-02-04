import { View, Text } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { UserContext } from "../App/Context/userContext";

export default function useAuth() {
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (userFromFirebase) => {
      console.log("got user: ", userFromFirebase);
      if (userFromFirebase) {
        setUser(userFromFirebase);
      } else {
        setUser(null);
      }
    });
    return unsub;
  }, []);
}
