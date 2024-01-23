import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FoodList } from "../../../screens";

const RootChefListStack = createNativeStackNavigator();

const ChefListStack = () => {
  return (
    <RootChefListStack.Navigator
      initialRouteName="ChefHome"
      screenOptions={{ headerShown: false }}
    >
      <RootChefListStack.Screen name="ChefList" component={FoodList} />
    </RootChefListStack.Navigator>
  );
};

export default ChefListStack;

const styles = StyleSheet.create({});
