import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../DEFAULTS";
import { foodListData } from "../../../DATA";
import FoodItem from "./FoodItem";

const All = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={{ margin: 24 }}>
        <Text style={{ fontFamily: "Regular-Sen", color: "#9C9BA6", marginBottom: 20 }}>
          Total ({foodListData.length}) items
        </Text>

        <ScrollView>
          {foodListData.map((item, index) => (
            <View key={index}>
              <FoodItem data={item} />
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default All;

const styles = StyleSheet.create({});
