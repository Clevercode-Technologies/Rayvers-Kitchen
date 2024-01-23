import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../Redux/store'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './Stacks/AuthStack';
import DrawerNavigation from './Drawer/Drawer';

const AppStack = createNativeStackNavigator();

const AppRoot = () => {
  const token = useSelector((state: RootState) => state.data.token);
  const [accessToken, setAccessToken] = useState<string>("hjhjh");



  if(accessToken) {
    return (
      <DrawerNavigation />
    )
  } else {
    return (
      <AppStack.Navigator screenOptions={() => ({ headerShown: false })}>
        <AppStack.Screen name="AuthStack" component={AuthStack} />
      </AppStack.Navigator>
    )
  }
}

export default AppRoot

const styles = StyleSheet.create({});