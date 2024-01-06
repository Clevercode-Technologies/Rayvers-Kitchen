import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { icons } from "../../../../assets/icons";
import { cartData } from "../../../DATA";
import { CartBottomSheet, CartItem } from "../../../components";
import { SCREEN_WIDTH, colors } from "../../../components/DEFAULTS";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        marginTop: Platform.OS === "android" ? 25 : 0,
        backgroundColor: "#121223",
        position: 'relative',
        flex: 1
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View
          style={{
            marginHorizontal: 24,
          }}
        >
          <Pressable onPress={() => navigation.canGoBack() && navigation.goBack()}>
            <Image
              source={icons.backArrDark}
              style={{
                width: 45,
                height: 45,
              }}
              resizeMode="contain"
            />
          </Pressable>

          <View style={{ width: 45, height: 45 }} />
        </View>

        <View style={{ marginHorizontal: 24 }}>
          {cartData.map((item, index) => (
            <View key={index}>
              <CartItem item={item} />
            </View>
          ))}
        </View>

        <View style={{ height: 300 }} />
      </ScrollView>

      <CartBottomSheet />
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({});
