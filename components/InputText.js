import { StyleSheet, Text, View, TextInput } from 'react-native'
import React,{useState} from 'react'

const InputText = () => {

const[userName,setUserName]=useState('')

  return (
    <View style={{flex:1,marginTop:20,alignItems:'center'}}>
      <Text>Insert anytext in below input</Text>

<TextInput
value = {userName}
onChangeText = {(userName)=>{setUserName(userName)}}
style = {styles.TextInput}
placeholder='please input username'

/>
<Text style = {{color:'blue',fontSize:30}}>{userName}</Text>
    </View>
  )
}

export default InputText

const styles = StyleSheet.create({
TextInput:{
   padding: 10,
    height:45,
    width:300,
    marginBottom: 50,   
}
  
})