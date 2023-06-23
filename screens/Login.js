import { View, Text ,Button,TextInput} from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View>
      <TextInput
      placeholder='Enter email'
      keyboardType='email-address'
      />
       <TextInput
      placeholder='Enter password'
      secureTextEntry={true}
      />
      <Button
      title='Sign Up'

      />
       <Button
      title='Login'
      
      />
    </View>
  )
}

export default Login