import { Image, StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    ChefNotificationStack, ChefProfileStack,
} from "../Stacks";
import { icons } from "../../../assets/icons";
import DriverHomeStack from "../Stacks/DriverStacks/Dashboard";
import MessageStack from "../Stacks/DriverStacks/Messages";
import ProfileStack from "../Stacks/DriverStacks/Profile";

const Tabs = createBottomTabNavigator();

const DriverAppTab = () => {
  return (
    <Tabs.Navigator
      initialRouteName="DriverHomeStack"
      screenOptions={{
        title: "",
        tabBarStyle: {
          paddingTop: 30,
          borderRadius: 30,
        },
      }}
    >
      <Tabs.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) =>
            focused ? (
              <Image
                source={icons.chefDashboardActive}
                style={{ width: 27, height: 27 }}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={icons.chefDashboard}
                style={{ width: 30, height: 30 }}
                resizeMode="contain"
              />
            ),
        }}
        name="DriverHomeStack"
        component={DriverHomeStack}
      />
       <Tabs.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) =>
            focused ? (
              <Image
                source={icons.messageActive}
                style={{ width: 27, height: 27 }}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={icons.messageInactive}
                style={{ width: 30, height: 30 }}
                resizeMode="contain"
              />
            ),
        }}
        name="MessageStack"
        component={MessageStack}
      />
       <Tabs.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) =>
            focused ? (
              <Image
                source={icons.chefProfileActive}
                style={{ width: 27, height: 27 }}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={icons.chefProfile}
                style={{ width: 30, height: 30 }}
                resizeMode="contain"
              />
            ),
        }}
        name="ProfileStackScreen"
        component={ProfileStack}
      />
    </Tabs.Navigator>
  );
};

export default memo(DriverAppTab);

const styles = StyleSheet.create({});
