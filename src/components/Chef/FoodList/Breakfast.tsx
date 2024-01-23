import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../DEFAULTS";
import { foodListData } from "../../../DATA";
import FoodItem from "./FoodItem";

const Breakfast = () => {
  const breakfastItems = foodListData.filter((item) => item.category === 'Breakfast');
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={{ padding: 24 }}>
        <Text style={{
          color: '#9C9BA6',
          fontSize: 14,
          fontFamily: 'Regular-Sen',
          marginBottom: 20
        }}>Total {breakfastItems.length} items</Text>


        {breakfastItems.map((item, index) => (
          <View key={index}>
            <FoodItem data={item} />
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Breakfast;

const styles = StyleSheet.create({});
