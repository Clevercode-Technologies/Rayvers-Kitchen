
import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../../../screens/Driver/Dashboard";
import { DriverProfile } from "../../../screens/Driver";
import { EditProfile, TrackMsg } from "../../../screens";
import Messages from "../../../components/Chef/Messages";


const DriverMessageStack = createNativeStackNavigator();

const MessageStack = () => {
  return (
    <DriverMessageStack.Navigator
      initialRouteName="DriverProfile"
      screenOptions={{ headerShown: false }}
    >
      <DriverMessageStack.Screen name="DriverMessages" component={Messages} />
      {/* @ts-ignore */}
      <DriverMessageStack.Screen name="TrackMsg" component={TrackMsg} />
    </DriverMessageStack.Navigator>
  );
};

export default MessageStack;

const styles = StyleSheet.create({});
