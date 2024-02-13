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
  const [itemCount, setItemCount] = useState<number>(1);
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{ fontSize: 28, fontFamily: "Regular-Sen", color: "#181C2E" }}
        >
          ₦{formatNumber(Number(item.price) * itemCount)}
        </Text>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#121223",
            width: 135,
            height: 55,
            borderRadius: 50,
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            disabled={itemCount <= 1}
            onPress={() =>
              setItemCount((prevCount) => (prevCount >= 2 ? prevCount - 1 : 1))
            }
            style={{
              backgroundColor: itemCount <= 1 ? colors.primaryBg : "#41414F",
              width: 30,
              height: 30,
              borderRadius: 30 / 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Bold-Sen",
                fontSize: 20,
                color: colors.white,
              }}
            >
              -
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              fontFamily: "Bold-Sen",
              color: colors.white,
              fontSize: 16,
            }}
          >
            {itemCount}
          </Text>

          <TouchableOpacity
            onPress={() => setItemCount((prevCount) => prevCount + 1)}
            style={{
              backgroundColor: "#41414F",
              width: 30,
              height: 30,
              borderRadius: 30 / 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Bold-Sen",
                fontSize: 20,
                color: colors.white,
              }}
            >
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>

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
