import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const App = () => {
  const showDate = () => {
    alert("Nuke in Coming");
  };

  return (
    <View style={styles.container}>
        <Text>Button Example</Text>
      <Button onPress={showDate} title="Click me" 
      color='#ff0037'/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'gray',

  },
});

export default App;
