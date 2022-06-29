import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import Logo from "./components/logo";
import styles from "./components/styles";
import TextInput from "./components/TextInputEX";
import Cat from "./components/Cafe";
import Cafe from "./components/Cafe";

const App = () => {
  const showNuke = () => {
alert("Nuke in Coming")


  };

  return (
    <View style={styles.container}>
      <Logo />

      <Button 
      onPress={showNuke}
      title="Eat me" />

      {/* <Text style={[styles.title,styles.warning]}>HELLO HELLO</Text>
      <TextInput/>
      <Cafe/> */}
    </View>
  );
};

export default App;
