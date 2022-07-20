import { StyleSheet, View, TextInput , Button} from "react-native";
import React, { useState } from "react";

const UserNamePassword = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


    const showAlert = ()=> {
        if(!name){
	   alert( "Please Enter Name")
	}
        else if(!email){
	   alert( "Please Enter Email")
	}
        else{
	   alert("Succes")
	}
    }



  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInputStyle}
        placeholder="Enter Name"
        onChangeText={(val) => setName(val)}
        value={name}
      />

      <TextInput
        style={styles.textInputStyle}
        placeholder="Enter Email"
        onChangeText={(val) => setEmail(val)}
        value={email}
      />

      <View>
        <Button onPress={showAlert} title="Submit" />
      </View>
    </View>
  );
};

export default UserNamePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    width: "100%",
    fontSize:40,
    backgroundColor: "#61dafb",
    padding: 10,
    width:700,
    textAlign: "center",
    marginBottom: 50,
    paddingVertical: 8,
    borderWidth: 4,
    borderRadius: 6,
  },
  textInputStyle: {
    width: "100%",
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
    fontSize:20,
  },
});