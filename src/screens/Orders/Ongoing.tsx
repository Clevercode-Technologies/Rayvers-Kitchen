import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../components/DEFAULTS";
import { OrderItem } from "../../components";
import { OngoingData } from "../../DATA";

const Ongoing = () => {
  return (
    <ScrollView
      style={{ width: SCREEN_WIDTH }}
      contentContainerStyle={{ alignItems: "center" }}
    >
      {OngoingData.map((item, index) => (
        <View style={{ marginTop: index !== 0 ? 24 : 0 }} key={index}>
          <OrderItem type={'ongoing'} data={item} />
        </View>
      ))}
    </ScrollView>
  );
};

export default Ongoing;

const styles = StyleSheet.create({});
