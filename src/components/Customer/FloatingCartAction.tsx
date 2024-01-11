import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SCREEN_WIDTH, colors } from "../DEFAULTS";

const itemInfo: { price: number } = {
  price: 32,
};

const FloatingCartAction = () => {
  const [itemCount, setItemCount] = useState<number>(1);
  return (
    <View
      style={{
        position: "absolute",
        bottom: -35,
        left: 0,
        right: 0,
        width: SCREEN_WIDTH,
        backgroundColor: "#F0F5FA",
        // height: 184,
        borderTopEndRadius: 24,
        borderTopStartRadius: 24,
        padding: 27,
        zIndex: 10
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
          ₦{itemInfo.price * itemCount}
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
      onPress={() => {}}
        style={{
          marginTop: 24,
          height: 62,
          width: SCREEN_WIDTH - 48,
          borderRadius: 12,
          backgroundColor: colors.primaryBg,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 50
        }}
      >
        <Text style={{ fontSize: 16, fontFamily: 'Bold-Sen', color: colors.white }}>Add To Cart</Text>
      </Pressable>
    </View>
  );
};

export default FloatingCartAction;

const styles = StyleSheet.create({});
