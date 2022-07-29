import { View, Text } from 'react-native'
import React from 'react'
import Logo from "./components/logo";
import User from './components/User';
import LotsOfGreetings from './components/LotsOfGreetings';
import MycustomTextWith from './components/MyCustomTextWith';
import Count from './components/Count';
import { StyleSheet } from 'react-native-web';
import InputText from './components/inputText';
// import UserNamePassword from './components/UserNameandPassWord';
import UserNamePassword from './components/UserNamePassword';
import AlertComponet from './components/AlertComponet';
import ImageWithTextInput from './components/ImageWithTextInput';
import ButtonExample from './components/ButtonExample';
import Touchable_Example from './components/Touchable_Example';
import TouchablePractice from './components/TouchablePractice';
import DynamicStyle from './components/DynamicStyle';
import ModalExample from './components/ModalExample';
import ModalPratice from './components/ModalPractice';

const App = () => {
  return (
    <View style={{flex:1}}>
<ModalPratice/>
      {/* <ModalExample/> */}
      {/* <DynamicStyle/> */}
      {/* <TouchablePractice/> */}
      {/* <ImageWithTextInput/> */}
{/* <Touchable_Example/> */}
      {/* <ButtonExample/> */}
{/* <AlertComponet/> */}
{/* <UserNamePassword/> */}
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