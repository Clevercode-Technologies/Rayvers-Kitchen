import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyOrders from "../../screens/Orders/MyOrders";
import { Cart, FoodDetails, Notification, TrackMsg, TrackOrder } from "../../screens";

const StackOrder = createNativeStackNavigator();

const OrderStack = () => {
  return (
    <StackOrder.Navigator initialRouteName="" screenOptions={() => ({ headerShown: false })}>
      <StackOrder.Screen name="MyOrders" component={MyOrders} />
      <StackOrder.Screen name="TrackOrder" component={TrackOrder} />
      {/* @ts-ignore */}
      <StackOrder.Screen name="FoodDetails" component={FoodDetails} />
      <StackOrder.Screen name="Cart" component={Cart} />
      <StackOrder.Screen name="Notification" component={Notification} />
      <StackOrder.Screen name="TrackMsg" component={TrackMsg} />
    </StackOrder.Navigator>
  );
};

export default OrderStack;

const styles = StyleSheet.create({});
