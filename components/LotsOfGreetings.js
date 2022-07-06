import { View, Text } from "react-native";
import React from "react";

const Greeting = (props) => {
  return (
    <view style={{ alignItem: "center" }}>
      <text>{props.name}{props.date} </text>
    </view>
  );
};

const LotsOfGreetings = () => {
  return (
    <View style={{ alignItems: "center", top: 50 }}>
      <Greeting name="Marry Christmas "date='25-Dec-2022' />
      <Greeting name="Happy New Year " date='31-Dec-2022'/>
      <Greeting name="Songkran Festival " date='13-Apr-2022'/>
    </View>
  );
};

export default LotsOfGreetings;
