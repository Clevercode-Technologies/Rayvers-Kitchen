import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { icons } from "../../../assets/icons";
import { SCREEN_WIDTH, colors } from "../../components/DEFAULTS";
import FoodListTab from "../../components/Chef/FoodListTab";

const FoodList = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      {/* FoodList Header */}
      <View
        style={{
          width: SCREEN_WIDTH,
          paddingHorizontal: 24,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={icons.back}
          style={{
            width: 45,
            height: 45,
            borderRadius: 45 / 2,
          }}
        />

        <Text
          style={{
            color: "#181C2E",
            fontSize: 17,
            fontFamily: "Regular-Sen",
            marginLeft: 16,
          }}
        >
          My Food List
        </Text>
      </View>

    {/* Tabs - Connectivity */}
      <View style={{ flex: 1, marginTop: 32 }}>
          <FoodListTab />
      </View>
    </SafeAreaView>
  );
};

export default FoodList;

const styles = StyleSheet.create({});
