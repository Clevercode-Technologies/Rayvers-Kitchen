import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { All, Breakfast, Dinner, Launch } from "../../components";
import { colors } from "../DEFAULTS";

const Tab = createMaterialTopTabNavigator();

const FoodListTab = () => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator initialRouteName="All" screenOptions={{
        tabBarActiveTintColor: colors.primaryBg,
        tabBarInactiveTintColor: colors.primaryTxt,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primaryBg
        },
        tabBarLabelStyle: {
          fontFamily: 'SemiBold-Sen',
        }
      }}>
        <Tab.Screen name="All" component={All} />
        <Tab.Screen name="Breakfast" component={Breakfast} />
        <Tab.Screen name="Lunch" component={Launch} />
        <Tab.Screen name="Dinner" component={Dinner} />
      </Tab.Navigator>
    </View>
  );
};

export default FoodListTab;

const styles = StyleSheet.create({});
