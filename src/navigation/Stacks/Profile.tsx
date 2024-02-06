import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddCard, AddNewAddress, Address, Cart, EditProfile, Favorite, Notification, Payment, Profile } from "../../screens";
import PersonalInfo from "../../screens/Customer/Profile/PersonalInfo";

const StackProfile = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <StackProfile.Navigator initialRouteName="Profile" screenOptions={() => ({ headerShown: false })}>
      <StackProfile.Screen name="ProfileScreen" component={Profile} />
      <StackProfile.Screen name="Address" component={Address} />
      <StackProfile.Screen name="AddNewAddress" component={AddNewAddress} />
      <StackProfile.Screen name="EditProfile" component={EditProfile} />
      <StackProfile.Screen name="PersonalInfo" component={PersonalInfo} />
      <StackProfile.Screen name="Favorite" component={Favorite} />
      <StackProfile.Screen name="CartScreen" component={Cart} />
      <StackProfile.Screen name="Notification" component={Notification} />
      <StackProfile.Screen name="Payment" component={Payment} />
      <StackProfile.Screen name="AddCard" component={AddCard} />
    </StackProfile.Navigator>
  );
};

export default ProfileStack;

const styles = StyleSheet.create({});
