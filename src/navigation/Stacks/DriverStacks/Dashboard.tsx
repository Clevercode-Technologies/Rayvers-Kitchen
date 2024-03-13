import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../../../screens/Driver/Dashboard";


const DriverDashboardStack = createNativeStackNavigator();

const DriverHomeStack = () => {
  return (
    <DriverDashboardStack.Navigator
      initialRouteName="DriverDashboard"
      screenOptions={{ headerShown: false }}
    >
      <DriverDashboardStack.Screen name="DriverDashboard" component={Dashboard} />
    </DriverDashboardStack.Navigator>
  );
};

export default DriverHomeStack;

const styles = StyleSheet.create({});
