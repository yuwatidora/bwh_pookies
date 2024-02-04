import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function forYouComponent({imageSource, color, title}) {
  return (
    <SafeAreaView style={styles.whole}>
      
        <View style={[styles.card, { backgroundColor: color }]}>
          {/* <Text>Image</Text>  */}
          <Image
          source={imageSource}
          style={styles.image} 
          />
        </View>
        <Text style={{color: "#777373", fontWeight:400}}>{title}</Text>
    
    </SafeAreaView>
  )
}

const styles =StyleSheet.create({
  card:{
    backgroundColor: "#FFDDDD",
    width: 150,
    height: "40%",
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