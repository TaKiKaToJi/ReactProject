import { View, Text } from "react-native";
import React from "react";

const TextName = ({ FirstName, Lastname }) => {
  return (
    <view>
      <text style={{ color: "#333", marginTop: 20 }}>
        {`Your First Name is ${FirstName} And Last Name is ${Lastname}`}
      </text>
    </view>
  );
};

const MycustomTextWith = () => {
  return (
    <View style={{ alignItems: "center", top: 400 }}>
      <TextName  FirstName="Phattaradol" Lastname=" Noppaket" />
      <TextName FirstName="Kittiphop" Lastname=" Pitiwittayakul" />
    </View>
  );
};

export default MycustomTextWith;
