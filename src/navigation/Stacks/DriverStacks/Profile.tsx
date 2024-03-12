import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../../../screens/Driver/Dashboard";
import { DriverProfile } from "../../../screens/Driver";
import { EditProfile } from "../../../screens";


const DriverProfileStack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <DriverProfileStack.Navigator
      initialRouteName="DriverProfile"
      screenOptions={{ headerShown: false }}
    >
      <DriverProfileStack.Screen name="DriverProfile" component={DriverProfile} />
      <DriverProfileStack.Screen name="DriverEditProfile" component={EditProfile} />
    </DriverProfileStack.Navigator>
  );
};

export default ProfileStack;

const styles = StyleSheet.create({});
