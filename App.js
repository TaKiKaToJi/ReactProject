import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from './components/logo'
import styles from './components/styles'

const App = () => {
  return (
    <View style={styles.container} >
      <Text style={[styles.title,styles.warning]}>HELLO HELLO</Text>
      <Logo></Logo>

    </View>
  )
}

export default App
