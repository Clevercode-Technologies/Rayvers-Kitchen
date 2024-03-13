import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SCREEN_WIDTH, colors } from "../DEFAULTS";
import { useDispatch } from "react-redux";
import { Dish, Popular } from "../../../type";
import { addCart } from "../../Redux/Splice/AppSplice";
import { formatNumber } from "../../utils/currencyFormatter";

const itemInfo: { price: number } = {
  price: 32,
};

interface FloatingCartActionProps {
  item: Dish;
}

const FloatingCartAction: React.FC<FloatingCartActionProps> = ({ item }) => {
  const [showToast, setShowToast] = useState<boolean>(false);

  const dispatch = useDispatch();

  useEffect(() => {
    showToast &&
      setTimeout(() => {
        setShowToast(false);
      }, 1000);
  }, [showToast]);

  return (
    <View
      style={{
        width: SCREEN_WIDTH,
        backgroundColor: "#F0F5FA",
        // height: 184,
        borderTopEndRadius: 24,
        borderTopStartRadius: 24,
        padding: 27,
        zIndex: 10,
      }}
    >
      {/* Final touch - Cart btn */}
      <Pressable
        onPress={() => {
          dispatch(addCart(item));
          setShowToast(true);
        }}
        style={{
          marginTop: 24,
          height: 62,
          width: SCREEN_WIDTH - 48,
          borderRadius: 12,
          backgroundColor: colors.primaryBg,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 50,
        }}
      >
        <Text
          style={{ fontSize: 16, fontFamily: "Bold-Sen", color: colors.white }}
        >
          Add To Cart
        </Text>
      </Pressable>

      {showToast && (
        <View
          style={{
            backgroundColor: colors.white,
            borderLeftColor: "green",
            borderLeftWidth: 4,
            padding: 10,
            height: 50,
            justifyContent: "center",
            position: 'absolute',
            bottom: 10,
            width: SCREEN_WIDTH - 48,
            left: '7%'
          }}
        >
          <Text style={{ fontFamily: "SemiBold-Sen", fontSize: 16 }}>
            Successfully Added ✅
          </Text>
        </View>
      )}
    </View>
  );
};

export default FloatingCartAction;

const styles = StyleSheet.create({});
