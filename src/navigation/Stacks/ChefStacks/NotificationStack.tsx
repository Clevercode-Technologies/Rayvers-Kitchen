import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FoodList } from "../../../screens";
import Notifications from "../../../screens/Chef/Notifications";

const RootNotificationStack = createNativeStackNavigator();

const NotificationStack = () => {
  return (
    <RootNotificationStack.Navigator
      initialRouteName="ChefHome"
      screenOptions={{ headerShown: false }}
    >
      <RootNotificationStack.Screen name="Notification" component={Notifications} />
    </RootNotificationStack.Navigator>
  );
};

export default NotificationStack;

const styles = StyleSheet.create({});
