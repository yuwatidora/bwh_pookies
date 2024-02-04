import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { FIRESTORE_DB } from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";

const List = () => {
  useEffect(() => {}, []);

  const addInfo = async () => {
    const doc = addDoc(collection(FIRESTORE_DB, 'user_info'), { name: 'Mafruha', breastfeeding: false })
    console.log(doc)
  };
  return (
    <View>
      <Button onPress={()=> addInfo()} title="Get Started"/>
    </View>
  );
};

export default List;
