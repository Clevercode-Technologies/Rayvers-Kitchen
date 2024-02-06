import { Image, StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    ChefNotificationStack, ChefProfileStack,
} from "../Stacks";
import { icons } from "../../../assets/icons";
import ChefHomeStack from "../Stacks/ChefStacks/ChefHomeStack";
import ChefListStack from "../Stacks/ChefStacks/ChefListStack";
import CreateItemStack from "../Stacks/ChefStacks/CreateItemStack";

const Tabs = createBottomTabNavigator();

const ChefAppTab = () => {
  return (
    <Tabs.Navigator
      initialRouteName="ChefHomeStack"
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
        name="ChefHomeStack"
        component={ChefHomeStack}
      />
      <Tabs.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) =>
            focused ? (
              <Image
                source={icons.chefListActive}
                style={{ width: 27, height: 27 }}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={icons.chefList}
                style={{ width: 30, height: 30 }}
                resizeMode="contain"
              />
            ),
        }}
        name="ChefListStack"
        component={ChefListStack}
      />
      <Tabs.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) =>
            focused ? (
              <Image
                source={icons.createItems}
                style={{ width: 50, height: 50 }}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={icons.createItems}
                style={{ width: 50, height: 50 }}
                resizeMode="contain"
              />
            ),
        }}
        name="CreateItems"
        component={CreateItemStack}
      />
       <Tabs.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) =>
            focused ? (
              <Image
                source={icons.chefBellActive}
                style={{ width: 27, height: 27 }}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={icons.chefBell}
                style={{ width: 30, height: 30 }}
                resizeMode="contain"
              />
            ),
        }}
        name="NotificationStack"
        component={ChefNotificationStack}
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
        component={ChefProfileStack}
      />
    </Tabs.Navigator>
  );
};

export default memo(ChefAppTab);

const styles = StyleSheet.create({});
