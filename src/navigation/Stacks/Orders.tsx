import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyOrders from "../../screens/Orders/MyOrders";

const StackOrder = createNativeStackNavigator();

const OrderStack = () => {
  return (
    <StackOrder.Navigator initialRouteName="" screenOptions={() => ({ headerShown: false })}>
      <StackOrder.Screen name="MyOrders" component={MyOrders} />
    </StackOrder.Navigator>
  );
};

export default OrderStack;

const styles = StyleSheet.create({});
