import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { memo, useEffect, useState } from "react";
import { colors } from "../DEFAULTS";
import { icons } from "../../../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCartCount,
  deleteCart,
  getCartSubTotal,
  incrementCartCount,
} from "../../Redux/Splice/AppSplice";
import { RootState } from "../../Redux/store";
import { formatNumber } from "../../utils/currencyFormatter";
import { Dish } from "../../../type";

interface CartItemProps {
  item: Dish;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const [count, setCount] = useState<number>(item.itemCount);
  const carts = useSelector((state: RootState) => state.data.carts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartSubTotal());
  }, [carts, count]);


  return (
    <View
      style={{
        flexDirection: "row",
        marginBottom: 32,
        position: "relative",
      }}
    >
      <Image
        source={{ uri: item?.images[0].file }}
        style={{
          width: 117,
          height: 117,
          borderRadius: 25,
        }}
        resizeMode="cover"
      />

      <View style={{ marginLeft: 20 }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Regular-Sen",
            color: colors.white,
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontFamily: "Regular-Sen",
            color: colors.white,
          }}
        >
          {item?.restaurant_details.name}
        </Text>
        <Text
          style={{
            marginTop: 10,
            fontSize: 20,
            fontFamily: "SemiBold-Sen",
            color: colors.white,
          }}
        >
          ₦{formatNumber(Number(item.price) * count)}
        </Text>
      </View>

      <Pressable
        onPress={() => dispatch(deleteCart(item.id))}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
        }}
      >
        <Image
          source={icons.delete}
          style={{
            width: 27,
            height: 27,
          }}
        />
      </Pressable>

      <View
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Pressable
          onPress={() => {
            setCount((prevState) => (count <= 1 ? 1 : prevState - 1));
            dispatch(decrementCartCount(item.id));
          }}
          style={{
            backgroundColor: count <= 1 ? colors.primaryBg : "#41414F",
            width: 22,
            height: 22,
            borderRadius: 22 / 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: "SemiBold-Sen",
              color: colors.white,
            }}
          >
            -
          </Text>
        </Pressable>

        <Text
          style={{
            fontSize: 16,
            fontFamily: "SemiBold-Sen",
            color: colors.white,
            marginHorizontal: 20,
          }}
        >
          {count}
        </Text>

        <Pressable
          onPress={() => {
            setCount((prevState) => prevState + 1);
            dispatch(incrementCartCount(item.id));
          }}
          style={{
            backgroundColor: "#41414F",
            width: 22,
            height: 22,
            borderRadius: 22 / 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: "SemiBold-Sen",
              color: colors.white,
            }}
          >
            +
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default memo(CartItem);

const styles = StyleSheet.create({});
