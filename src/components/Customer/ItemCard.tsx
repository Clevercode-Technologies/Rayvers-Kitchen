import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { images } from "../../../assets/images";
import { colors } from "../DEFAULTS";
import { useNavigation } from "@react-navigation/native";
import { ItemCardProp } from "../../../type";
import { RootState } from "../../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addCart, deleteCart } from "../../Redux/Splice/AppSplice";
import { formatNumber } from "../../utils/currencyFormatter";

const ItemCard: React.FC<ItemCardProp> = ({ item }) => {
  const carts = useSelector((state: RootState) => state.data.carts);
  const [existInCart, setExistInCart] = useState<boolean | undefined>(false);
  const [cartItem, setCartItem] = useState<boolean | undefined>(existInCart);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const isInCartAlready = carts?.some(
      (stateCart) => stateCart.id === item.id
    );
    setExistInCart(isInCartAlready);
    setCartItem(isInCartAlready);
  }, [carts, item]);

  // console.log('Item Image: ', item);

  return (
    <Pressable
      // @ts-ignore
      onPress={() => navigation.navigate("FoodDetails", { data: item })}
      style={{ alignItems: "center", width: 153, marginBottom: 21 }}
    >
      <Image
        source={{ uri: item?.images?.[0]?.file }}
        style={{
          width: 122,
          height: 84,
          borderRadius: 15,
          marginBottom: -35,
          zIndex: 1,
        }}
        resizeMode="cover"
      />

      <ImageBackground
        source={images.skewedBg}
        style={{
          width: 153,
          // height: 130,
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 7,
          },
          shadowOpacity: 0.19,
          shadowRadius: 10.84,
          elevation: 2,
          padding: 12,
        }}
      >
        <View style={{ height: 30 }} />
        <Text
          style={{
            fontSize: 15,
            color: colors.primaryTxt,
            fontFamily: "Bold-Sen",
          }}
        >
          {item?.name}
        </Text>
        <Text
          style={{ color: "#646982", fontSize: 13, fontFamily: "Regular-Sen" }}
        >
          {item?.restaurant_details.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: colors.primaryTxt,
              fontFamily: "Bold-Sen",
            }}
          >
            ₦{formatNumber(Number(item?.price))}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setCartItem((prevState) => !prevState);
              if (!cartItem) {
                dispatch(
                  addCart({
                    ...item,
                    itemCount: 0,
                  })
                );
              } else {
                dispatch(deleteCart(item.id));
              }
            }}
            style={{
              backgroundColor: colors.primaryBg,
              width: 30,
              height: 30,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 100,
            }}
          >
            {cartItem && existInCart ? (
              <Text
                style={{
                  fontSize: 25,
                  color: colors.white,
                  marginTop: Platform.OS === "android" ? -4 : 0,
                }}
              >
                -
              </Text>
            ) : (
              <Text
                style={{
                  fontSize: 25,
                  color: colors.white,
                  marginTop: Platform.OS === "android" ? -4 : 0,
                }}
              >
                +
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default ItemCard;

const styles = StyleSheet.create({});
