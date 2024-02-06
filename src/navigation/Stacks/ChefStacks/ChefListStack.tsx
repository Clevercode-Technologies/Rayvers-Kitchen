import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddNewFood, FoodList } from "../../../screens";
import FoodDetails from "../../../screens/Chef/FoodDetails";

const RootChefListStack = createNativeStackNavigator();

const ChefListStack = () => {
  return (
    <RootChefListStack.Navigator
      initialRouteName="ChefHome"
      screenOptions={{ headerShown: false }}
    >
      <RootChefListStack.Screen name="ChefList" component={FoodList} />
      <RootChefListStack.Screen name="ChefFoodDetails" component={FoodDetails} />
      <RootChefListStack.Screen name="CreateItem" component={AddNewFood} />
    </RootChefListStack.Navigator>
  );
};

export default ChefListStack;

const styles = StyleSheet.create({});
