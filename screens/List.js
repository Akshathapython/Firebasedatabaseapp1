import { View, Text, StyleSheet ,ScrollView, Button, TextInput} from 'react-native'
import React,{useState,useEffect} from 'react';
import database from '@react-native-firebase/database'
import { TouchableHighlight } from 'react-native-gesture-handler';
let itemRef = database().ref('/Items');

function List () {
  const [itemArray, setItemArray] = useState([]);
  const [keys,setKey]=useState();
  const [ifUpdate,setIfUpdate]=useState(true)
  const [updateText,setUpdateText]=useState('')
  const [updateIndex,setUpdateIndex] =useState(null);
  useEffect(()=>{
      itemRef.on('value', snapshot =>{
      let data = snapshot.val();
      console.log(data)
      setKey(Object.keys(data))
      console.log(keys)
      const items = Object.values(data);
      
      setItemArray(items);
      
      })
         },[])
    const handleDelete =(index) =>{
      let childkey =keys[index];
      itemRef.child(childkey).remove();
     }
     const handleUpdate =(name,index)=>{
      setUpdateText(name)   
      setUpdateIndex(index)    
      setIfUpdate(true)
     }
     const submitUpdate =()=>{
      let childkey =keys[updateIndex];
      itemRef.child(childkey).update({
        name: updateText
      })
      setIfUpdate(false)
     }
  return (
    <View style={styles.container}>
      {(itemArray.length > 0) 
      ?
      ifUpdate
      ?
      <View style={styles.container}>
        <TextInput style={styles.inputContainer} value={updateText} onChangeText={setUpdateText}/>
        <Button  style ={styles.button3}title='Submit' onPress={()=> submitUpdate()}/>
        <Button style ={styles.button3} title='Cancel' onPress={()=> setIfUpdate(false)}/>

      </View>
      :
      
      <View >
      {itemArray.map((item,index) =>{
         return(
         <View>
           <Text style={styles.card}>{item.name}</Text>
          <View>
          <TouchableHighlight style={styles.button1} onPress={()=> handleUpdate(item.name,index)} >
            <Text>Update</Text>
           </TouchableHighlight>
           <TouchableHighlight style={styles.button1} onPress={()=>handleDelete(index)}>
            <Text>Delete</Text>
           </TouchableHighlight>
          </View>
         </View>
         )
})}
      </View>
      :<Text>No data found</Text>
      }
     
    </View>
  )
}
const styles = StyleSheet.create({
  container :{
    flex:1,
    
    backgroundColor:'grey'

  },
  card:{
    width: 360,
    backgroundColor:'lightblue',
    padding:20,
    marginTop:10,
    marginLeft:15,
    borderRadius:5
    
  },
  button1:{
    width:100,
    backgroundColor:'blue',
    padding:10,
    marginTop:5,
    marginLeft:10,
    borderRadius:5,
    flexDirection:'column'
    
    
  },
  inputContainer:{
    borderColor:'black',
     width:260,
     padding:10,
     marginBottom:20,
     borderWidth:3,
     borderRadius:5,
    
   },
  
  button3:{
    padding:20,
    marginTop:10
  }
})
export default List