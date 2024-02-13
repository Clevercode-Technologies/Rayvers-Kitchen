import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddNewFood } from "../../../screens";

const RootCreateItemStack = createNativeStackNavigator();

const CreateItemStack = () => {
  return (
    <RootCreateItemStack.Navigator
      initialRouteName="CreateItem"
      screenOptions={{ headerShown: false }}
    >
      <RootCreateItemStack.Screen name="CreateItem" component={AddNewFood} />
    </RootCreateItemStack.Navigator>
  );
};

export default CreateItemStack;

const styles = StyleSheet.create({});
