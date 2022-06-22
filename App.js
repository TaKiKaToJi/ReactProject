import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from './components/logo'
import styles from './components/styles'

const App = () => {
  return (
    <View style={styles.container} >
      <Logo/>
      <Text style={[styles.title,styles.warning]}>HELLO HELLO</Text>
      
    </View>
  )
}

export default App
