import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-web";

const Saparator = () => {
  return <View style={styles.saparator} />;
};

const ButtonExample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
      </Text>
      <Button title="Press Me" onPress={() => alert("Simple Text input")} />
      <Saparator />
      <View>
        <Text style={styles.title}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown industry. Lorem Ipsum has been the
          industry's standard
        </Text>
        <Button
          title="Press Me"
          onPress={() => alert("Simple Text input")}
          color="#ff6f00"
        />
        <Saparator />
      </View>
      <View>
        <Text style={styles.title}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </Text>
        <Button title="Press me" disabled />
        <Saparator />
      </View>
      <View >
        <Text style={styles.title}>
          This layout strategy lets the title define the width of the button.
        </Text>
        <View style={styles.fixToText}>
          <Button
            title="Left button"
            onPress={() => alert("Left Button pressed")}
            color="#0e8a00"
          />
          <Button
            title="Right button"
            onPress={() => alert("Left Button pressed")}
            color="#0e8a00"
          />
        </View>
      </View>
    </View>
  );
};

export default ButtonExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  saparator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
