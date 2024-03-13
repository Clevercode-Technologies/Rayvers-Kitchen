import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Notification, TrackMsg } from "../../../screens";

const StackNotification = createNativeStackNavigator();

const NotificationStack = () => {
  return (
    <StackNotification.Navigator
      initialRouteName="Notification"
      screenOptions={() => ({ headerShown: false })}
    >
      <StackNotification.Screen
        name="NotificationScreen"
        component={Notification}
      />
      {/* @ts-ignore */}
      <StackNotification.Screen name="TrackMsg" component={TrackMsg} />
    </StackNotification.Navigator>
  );
};

export default NotificationStack;

const styles = StyleSheet.create({});
