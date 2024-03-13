import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Onboard, RouteSelection } from "../../../screens";
import { Login as ChefLogin } from "../../../screens/Chef/Authentication/Login";

const StackAuth = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <StackAuth.Navigator
      initialRouteName="Login"
      screenOptions={() => ({ headerShown: false })}
    >
      <StackAuth.Screen name="Login" component={ChefLogin} />
      <StackAuth.Screen name="RouteSelection" component={RouteSelection} />
      <StackAuth.Screen name="Onboard" component={Onboard} />
      {/* @ts-ignore */}
    </StackAuth.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
