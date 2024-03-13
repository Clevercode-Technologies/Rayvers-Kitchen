import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Favorite, FoodDetails } from "../../../screens";

const StackFavorite = createNativeStackNavigator();

const FavoriteStack = () => {
  return (
    <StackFavorite.Navigator
      initialRouteName="Favorite"
      screenOptions={() => ({ headerShown: false })}
    >
      <StackFavorite.Screen name="FavoriteScreen" component={Favorite} />
      <StackFavorite.Screen name="FoodDetails" component={FoodDetails} />
    </StackFavorite.Navigator>
  );
};

export default FavoriteStack;

const styles = StyleSheet.create({});
