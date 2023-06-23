import { View, Text,TextInput,TouchableHighlight, StyleSheet, Button, Alert } from 'react-native'
import React,{useState} from 'react'
import database from '@react-native-firebase/database';
let addItem = item =>{
  database().ref('/Items').push({
    name:item
  })
}
function AddItem  () {
  const [name,setName] =useState('');
  const handleSubmit =()=>{
    addItem(name);
    setName('');
    Alert.alert('Data saved successfully')
  }
  return (
    <View style={styles.container}>
      <Text>AddItem</Text>
      <TextInput
      value={name}
      onChangeText={text =>setName(text)}
      style={styles.inputContainer}
      />
      <Button title='AddItem' onPress={handleSubmit} style={styles.button}/>
      
      
    </View>
  )
}
 const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'grey',
  },
  inputContainer:{
   borderColor:'black',
    width:260,
    padding:10,
    marginBottom:20,
    borderWidth:3,
    borderRadius:5
  },
  button:{
    backgroundColor:'blue',
    marginTop:30
  }
 })
export default AddItem;