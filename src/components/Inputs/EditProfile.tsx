import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setProfileBio, setProfileEmail, setProfileName, setProfileNumber } from '../../Redux/Splice/AppSplice';

type EditProfileProps = {
    type: string;
}

const EditProfile: React.FC<EditProfileProps> = ({ type }) => {
    const dispatch = useDispatch();


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
            onChangeText={(text) => dispatch(setProfileName(text))}
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
            onChangeText={(text) => dispatch(setProfileNumber(text))}
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
            onChangeText={(text) => dispatch(setProfileBio(text))}
        />
      )
  } else {
    return null;
  }
}

export default EditProfile;

const styles = StyleSheet.create({});