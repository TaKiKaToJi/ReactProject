import { View, Text } from 'react-native'
import React from 'react'
import Logo from "./components/logo";
import User from './components/User';
import LotsOfGreetings from './components/LotsOfGreetings';
import MycustomTextWith from './components/MyCustomTextWith';
import Count from './components/Count';
import { StyleSheet } from 'react-native-web';
import InputText from './components/inputText';
import UserNamePassword from './components/UserNameandPassWord';

const App = () => {
  return (
    <View>
<UserNamePassword/>
      {/* <InputText/> */}
        {/* <Count/> */}
        {/* <LotsOfGreetings/> */}
        {/* <MycustomTextWith/> */}
         {/* <Logo/>
        <User/> */}
    </View>
  )
}

export default App

// const styles = StyleSheet.create({
//   container:{
// flex:1,
// justifyContent:'center',
// alignItems:'center',

//   }
// }