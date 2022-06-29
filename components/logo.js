import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./stySheet";

const logo = () => {
  const testLogo = "Thai-Nichi";
const isTH = true;

  return (
    <View>
      <Text style={styles.testLogo}>TNI</Text>
      <View style={styles.testLogo}>
        <Text>{testLogo}</Text>

      {/* {
       isTH && <Text>Thai</Text>
      } */}
{/* {use if/else or con OP} */}



{
  isTH 
  ?(<Text>Thai</Text>)
  :(<Text>English</Text>)
}


      </View>

    </View>
  );
};

export default logo;
