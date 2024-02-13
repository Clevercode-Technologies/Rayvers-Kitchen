import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ChefHome,
} from "../../../screens";

const RootChefHomeStack = createNativeStackNavigator();

const ChefHomeStack = () => {
  return (
    <RootChefHomeStack.Navigator
      initialRouteName="ChefHome"
      screenOptions={{ headerShown: false }}
    >
      <RootChefHomeStack.Screen name="ChefHome" component={ChefHome} />
    </RootChefHomeStack.Navigator>
  );
};

export default ChefHomeStack;

const styles = StyleSheet.create({});
