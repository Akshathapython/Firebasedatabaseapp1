import { View, Text ,Button} from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
      <Button
      title='Add Item'
      onPress={() =>navigation.navigate('AddItem')}
      />
       <Button
      title='List'
      onPress={()=>navigation.navigate('List')}
      />
    </View>
  )
}

export default Home