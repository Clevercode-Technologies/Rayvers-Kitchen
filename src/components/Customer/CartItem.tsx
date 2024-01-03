import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../DEFAULTS";
import { icons } from "../../../assets/icons";

interface CartItemProps {
  item: {
    preview: ImageSourcePropType;
    id: number;
    price: number;
    item: string;
    restaurant: string;
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const [count, setCount] = useState<number>(1);

  return (
    <View
      style={{
        flexDirection: "row",
        marginBottom: 32,
        position: "relative",
      }}
    >
      <Image
        source={item.preview}
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
          {item.item}
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontFamily: "Regular-Sen",
            color: colors.white,
          }}
        >
          {item.restaurant}
        </Text>
        <Text
          style={{
            marginTop: 10,
            fontSize: 20,
            fontFamily: "SemiBold-Sen",
            color: colors.white,
          }}
        >
          ₦{item.price}
        </Text>
      </View>

      <View
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
      </View>

      <View
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <Pressable
          onPress={() => setCount((prevState) => count <= 1 ? 1 : prevState - 1)}
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
            marginHorizontal: 20
          }}
        >
          {count}
        </Text>

        <Pressable
          onPress={() => setCount((prevState) => prevState + 1)}
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

export default CartItem;

const styles = StyleSheet.create({});
