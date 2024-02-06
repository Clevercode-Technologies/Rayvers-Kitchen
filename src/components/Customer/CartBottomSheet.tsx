import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { SCREEN_WIDTH, colors } from "../DEFAULTS";
import { formatNumber } from "../../utils/currencyFormatter";
import { useNavigation } from "@react-navigation/native";

const CartBottomSheet = () => {
  const [address, setAddress] = useState<string>("");

  const navigation = useNavigation();

  return (
    <ScrollView
      style={{
        flex: 1,
        height: 310,
        backgroundColor: colors.white,
        width: SCREEN_WIDTH,
        position: "absolute",
        borderTopEndRadius: 24,
        borderTopStartRadius: 24,
        bottom: 0,
        padding: 24,
      }}
    >
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            textTransform: "uppercase",
            fontSize: 14,
            fontFamily: "Regular-Sen",
            color: "#A0A5BA",
          }}
        >
          Delivery Address
        </Text>

        <Pressable 
        // @ts-ignore
        onPress={() => navigation.navigate('AddNewAddress')}>
          <Text
            style={{
              color: colors.primaryBg,
              textDecorationLine: "underline",
              fontSize: 14,
              fontFamily: "Regular-Sen",
            }}
          >
            EDIT
          </Text>
        </Pressable>
      </View>

      {/* Address Input */}
      <TextInput
        style={{
          borderRadius: 10,
          width: "100%",
          height: 62,
          backgroundColor: "#F0F5FA",
          marginTop: 10,
          paddingLeft: 12,
          color: colors.grayText,
          marginBottom: 30,
        }}
        onChangeText={(text) => setAddress(text)}
        placeholder="2118 Thornridge Cir. Syracuse"
        placeholderTextColor={colors.grayText}
      />

      <View>
        <Text
          style={{ fontSize: 14, fontFamily: "Regular-Sen", color: "#A0A5BA" }}
        >
          Total:{" "}
          <Text style={{ fontSize: 30, color: "#181C2E", marginLeft: 12 }}>
            ₦{formatNumber(9560.06)}
          </Text>
        </Text>
      </View>

      <Pressable
        // @ts-ignore 
        onPress={() => navigation.navigate("Payment")}
        style={{
          borderRadius: 12,
          backgroundColor: colors.primaryBg,
          justifyContent: "center",
          alignItems: "center",
          height: 62,
          width: "100%",
          marginTop: 38,
        }}
      >
        <Text
          style={{
            textTransform: "uppercase",
            fontFamily: "SemiBold-Sen",
            color: colors.white,
            fontSize: 14,
          }}
        >
          Place Order
        </Text>
      </Pressable>
    </ScrollView>
  );
};

export default CartBottomSheet;

const styles = StyleSheet.create({});
