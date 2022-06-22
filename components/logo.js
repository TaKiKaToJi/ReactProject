import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const logo = () => {
  return (
    <View>
      <Text style={styles.testLogo} >TNI</Text>
    </View>
  )
}

export default logo

const styles = StyleSheet.create({
    testLogo:{
        color:"green",
        fontSize:40
        
    }
})