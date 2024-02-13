import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  FavoriteStack,
  HomeStack,
  NotificationStack,
  OrderStack,
  ProfileStack,
} from "../Stacks";
import { icons } from "../../../assets/icons";

const Tabs = createBottomTabNavigator();

const CustomerAppTabs = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Explore"
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
                source={icons.homeFilled}
                style={{ width: 23, height: 23 }}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={icons.homeOutlined}
                style={{ width: 25, height: 25 }}
                resizeMode="contain"
              />
            ),
        }}
        name="Explore"
        component={HomeStack}
      />
      <Tabs.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) =>
            focused ? (
              <Image
                source={icons.favoriteFilled}
                style={{ width: 23, height: 23 }}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={icons.favoriteOutlined}
                style={{ width: 25, height: 25 }}
                resizeMode="contain"
              />
            ),
        }}
        name="Favorite"
        component={FavoriteStack}
      />
      <Tabs.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) =>
            focused ? (
              <Image
                source={icons.truckFilled}
                style={{ width: 23, height: 23 }}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={icons.truckOutlined}
                style={{ width: 25, height: 25 }}
                resizeMode="contain"
              />
            ),
        }}
        name="Order"
        component={OrderStack}
      />
      <Tabs.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) =>
            focused ? (
              <Image
                source={icons.notificationFilled}
                style={{ width: 23, height: 23 }}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={icons.notificationOutlined}
                style={{ width: 25, height: 25 }}
                resizeMode="contain"
              />
            ),
        }}
        name="notification"
        component={NotificationStack}
      />
      <Tabs.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) =>
            focused ? (
              <Image
                source={icons.accountFilled}
                style={{ width: 23, height: 23 }}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={icons.accountOutlined}
                style={{ width: 25, height: 25 }}
                resizeMode="contain"
              />
            ),
        }}
        name="profile"
        component={ProfileStack}
      />
    </Tabs.Navigator>
  );
};

export default CustomerAppTabs;

const styles = StyleSheet.create({});
