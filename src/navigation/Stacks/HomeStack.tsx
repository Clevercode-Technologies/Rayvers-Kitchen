import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Customer/Home/Home";
import {
  AddCard,
  Cart,
  FoodDetails,
  Payment,
  RestaurantDetails,
  SearchResult,
  Success,
  TrackOrder,
} from "../../screens";
import Search from "../../screens/Customer/Search/Search";

const RootHomeStack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <RootHomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <RootHomeStack.Screen name="Home" component={Home} />
      <RootHomeStack.Screen name="FoodDetails" component={FoodDetails} />
      <RootHomeStack.Screen
        name="RestaurantDetails"
        component={RestaurantDetails}
      />
      <RootHomeStack.Screen name="Search" component={Search} />
      <RootHomeStack.Screen name="SearchResult" component={SearchResult} />
      <RootHomeStack.Screen name="Cart" component={Cart} />
      <RootHomeStack.Screen name="Payment" component={Payment} />
      <RootHomeStack.Screen name="AddCard" component={AddCard} />
      <RootHomeStack.Screen name="Success" component={Success} />
      <RootHomeStack.Screen name="TrackOrder" component={TrackOrder} />
    </RootHomeStack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
