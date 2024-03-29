import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function forYouComponent({imageSource, color, title}) {
  return (
    <SafeAreaView style={styles.whole}>

        <TouchableOpacity style={[styles.card, { backgroundColor: color }]}>
          <Image
          source={imageSource}
          style={styles.image} 
          />
        </TouchableOpacity>
        <Text style={{color: "#777373", fontWeight:400}}>{title}</Text>
    
    </SafeAreaView>
  )
}

const styles =StyleSheet.create({
  card:{
    backgroundColor: "#FFDDDD",
    width: 150,
    height: 150,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 20,
  },
  image:{
    width: "80%",
    height:100,
    // borderWidth: "1px",
    
  },
  whole:{
    alignItems: "center",
  },

})