import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigation from "./Drawer/Drawer";
import { Onboard, RouteSelection } from "../screens";
import { ChefAuthStack, CustomerAuthStack, DriverAuthStack } from "./Stacks";

const AppStack = createNativeStackNavigator();

const AppRoot = () => {
  const token = useSelector((state: RootState) => state.data.token);
  const userType = useSelector((state: RootState) => state.data.userType);

  if (token) {
    return <DrawerNavigation />;
  } else {
    return (
      <AppStack.Navigator screenOptions={() => ({ headerShown: false })}>
        {!token && userType === "Customer" ? (
          <AppStack.Screen name="AuthStack" component={CustomerAuthStack} />
        ) : !token && userType === "Chef" ? (
          <AppStack.Screen name="AuthStack" component={ChefAuthStack} />
        ) : !token && userType === "Driver" ? (
          <AppStack.Screen name="AuthStack" component={DriverAuthStack} />
        ) : (
          <>
            <AppStack.Screen name="Onboard" component={Onboard} />
            <AppStack.Screen name="RouteSelection" component={RouteSelection} />
            <AppStack.Screen
              name="CustomerLogin"
              component={CustomerAuthStack}
            />
            <AppStack.Screen name="DriverLogin" component={DriverAuthStack} />
            <AppStack.Screen name="ChefLogin" component={ChefAuthStack} />
          </>
        )}
      </AppStack.Navigator>
    );
  }
};

export default AppRoot;

const styles = StyleSheet.create({});
