import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react';

type EditProfileProps = {
    type: string;
}

const EditProfile: React.FC<EditProfileProps> = ({ type }) => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [bio, setBio] = useState<string>('');

  if(type === 'username') {
    return (
        <TextInput 
            placeholder='John Doe'
            placeholderTextColor={'#6B6E82'}
            style={{
                width: '100%',
                height: 56,
                borderRadius: 10,
                paddingLeft: 20,
                backgroundColor: '#F0F5FA',
                marginTop: 8,
            }}
            onChangeText={(text) => setUsername(text)}
        />
      )
  } else if(type === 'email'){
    return (
        <TextInput 
            placeholder='hello@email.com'
            placeholderTextColor={'#6B6E82'}
            style={{
                width: '100%',
                height: 56,
                borderRadius: 10,
                paddingLeft: 20,
                backgroundColor: '#F0F5FA',
                marginTop: 8,
            }}
            onChangeText={(text) => setEmail(text)}
        />
      )
  } else if(type === 'phone'){
    return (
        <TextInput 
            placeholder='408-841-0926'
            placeholderTextColor={'#6B6E82'}
            keyboardType='numeric'
            style={{
                width: '100%',
                height: 56,
                borderRadius: 10,
                paddingLeft: 20,
                backgroundColor: '#F0F5FA',
                marginTop: 8,
            }}
            onChangeText={(text) => setPhone(text)}
        />
      )
  } else if(type === 'bio'){
    return (
        <TextInput 
            placeholder='I love crispy food'
            placeholderTextColor={'#6B6E82'}
            keyboardType='numeric'
            multiline
            style={{
                width: '100%',
                height: 103,
                borderRadius: 10,
                paddingHorizontal: 20,
                backgroundColor: '#F0F5FA',
                marginTop: 8,
                paddingTop: 20
            }}
            onChangeText={(text) => setBio(text)}
        />
      )
  } else {
    return null;
  }
}

export default EditProfile;

const styles = StyleSheet.create({});