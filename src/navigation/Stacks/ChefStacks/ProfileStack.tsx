import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FoodList } from "../../../screens";
import Notifications from "../../../screens/Chef/Notifications";
import Profile from "../../../screens/Chef/Profile";

const RootProfileStack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <RootProfileStack.Navigator
      initialRouteName="ChefHome"
      screenOptions={{ headerShown: false }}
    >
      <RootProfileStack.Screen name="ProfileStack" component={Profile} />
    </RootProfileStack.Navigator>
  );
};

export default ProfileStack;

const styles = StyleSheet.create({});
