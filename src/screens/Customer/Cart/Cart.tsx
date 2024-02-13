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
import React, { memo, useEffect, useState } from "react";
import { icons } from "../../../../assets/icons";
import { cartData } from "../../../DATA";
import { CartBottomSheet, CartItem } from "../../../components";
import { SCREEN_WIDTH, colors } from "../../../components/DEFAULTS";
import { useNavigation } from "@react-navigation/native";
import { useDisclose } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import {
  getCartSubTotal,
  resetCartSubTotal,
} from "../../../Redux/Splice/AppSplice";

const Cart = () => {
  const carts = useSelector((state: RootState) => state.data.carts);

  const cartSubTotal: number = useSelector(
    (state: RootState) => state.data.cartSubTotal
  );

  const { isOpen, onOpen, onClose } = useDisclose();

  const dispatch = useDispatch();

  useEffect(() => {
    // re-calculate the amount of cart Items when an item is added automatically
    dispatch(getCartSubTotal());
  }, [carts]);

  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        marginTop: Platform.OS === "android" ? 25 : 0,
        backgroundColor: "#121223",
        position: "relative",
        flex: 1,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View
          style={{
            marginHorizontal: 24,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 30,
          }}
        >
          <Pressable
            onPress={() => {
              navigation.canGoBack() && navigation.goBack();
            }}
          >
            <Image
              source={icons.backArrDark}
              style={{
                width: 45,
                height: 45,
              }}
              resizeMode="contain"
            />
          </Pressable>

          <View
            style={{
              width: 45,
              height: 45,
              backgroundColor: colors.white,
              borderRadius: 45 / 2,
            }}
          >
            <Pressable
              onPress={onOpen}
              style={{ flexDirection: "row", justifyContent: "center" }}
            >
              <Image
                source={icons.buldEnergy}
                style={{
                  width: 35,
                  height: 35,
                }}
                resizeMode="contain"
              />
            </Pressable>
          </View>
        </View>

        {carts && carts.length ? (
          <View style={{ marginHorizontal: 24 }}>
            {carts?.map((item, index) => (
              <View key={index}>
                <CartItem item={item} />
              </View>
            ))}
          </View>
        ) : (
          <View
            style={{
              marginHorizontal: 24,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 50,
              borderWidth: 2,
              borderStyle: "dashed",
              borderColor: colors.primaryBg,
              padding: 24,
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontFamily: "SemiBold-Sen",
                color: colors.white,
              }}
            >
              Your Cart is Empty
            </Text>
          </View>
        )}

        <View style={{ height: 300 }} />
      </ScrollView>

      <CartBottomSheet item={carts} isOpen={isOpen} onClose={onClose} />
    </SafeAreaView>
  );
};

export default memo(Cart);

const styles = StyleSheet.create({});
