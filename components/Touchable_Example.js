import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";
import React from "react";

const Touchable_Example = () => {
  const onPress = (msg) => {
    alert(" Alert for: " + msg);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View>
          <TouchableNativeFeedback
            style={styles.button}
            onPress={() => onPress("TouchableNativeFeeback")}
          >
            <Text>TouchableNativeFeeback</Text>
          </TouchableNativeFeedback>
        </View>

        <TouchableHighlight
          style={styles.button}
          onPress={() => onPress("TouchableHighlight")}
        >
          <Text>TouchableHighlight</Text>
        </TouchableHighlight>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => onPress("TouchableOpacity")}
          >
            <View>
              <Text>TouchableOpacity</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableWithoutFeedback onPress={() => onPress("TouchableOpacity")}>
          <View style={styles.button}>
            <Text>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default Touchable_Example;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});
