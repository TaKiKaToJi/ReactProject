import { View, Text } from "react-native";
import React from "react";

const User = () => {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jeb" },
  ];
  return (
    <View>
      <Text></Text>
      {users.map((user, index) => {
        return (
          <Text
          style={{color:"red",
          fontSize:40,
          backgroundColor: "#61dafb",
          padding: 10,
          width:700,
          textAlign: "center",
          marginBottom: 50,
          paddingVertical: 8,
          borderWidth: 4,
          borderRadius: 6,
  }}
          key={user.id}>
            {" "}
            {index + 1}. {user.name}{" "}
          </Text>
        );
      })}
    </View>
  );
};

export default User;
