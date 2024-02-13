import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { memo, useEffect, useState } from "react";
import { SCREEN_WIDTH, colors } from "../DEFAULTS";
import { formatNumber } from "../../utils/currencyFormatter";
import { useNavigation } from "@react-navigation/native";
import { Actionsheet } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { getCartSubTotal, resetCartSubTotal } from "../../Redux/Splice/AppSplice";
import { Cart } from "../../../type";

interface CartBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  item: Cart[] | null;
}

const CartBottomSheet: React.FC<CartBottomSheetProps> = ({
  isOpen,
  onClose,
  item
}) => {
  const [address, setAddress] = useState<string>("");
  const cartSubTotal: number = useSelector(
    (state: RootState) => state.data.cartSubTotal
  );
  const carts = useSelector((state: RootState) => state.data.carts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartSubTotal());
  }, [carts])

  const navigation = useNavigation();

  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content>
        <ScrollView
          style={{
            // flex: 1,
            backgroundColor: colors.white,
            width: SCREEN_WIDTH,
            borderTopEndRadius: 24,
            borderTopStartRadius: 24,
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
              onPress={() => navigation.navigate("AddNewAddress")}
            >
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

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Regular-Sen",
                color: "#A0A5BA",
              }}
            >
              Total:{" "}
              <Text style={{ fontSize: 30, color: "#181C2E", marginLeft: 12 }}>
                {item?.length === 1 && item[0]?.itemCount === 1 ? item[0]?.price : `₦${formatNumber(cartSubTotal)}` }
              </Text>
            </Text>

            <Pressable style={{
              backgroundColor: colors.primaryBg,
              width: 55,
              borderRadius: 10
            }} onPress={() => dispatch(resetCartSubTotal())}>
              <Text style={{ color: colors.white, fontSize: 16, fontFamily: 'Regular-Sen', padding: 5 }}>Reset</Text>
            </Pressable>
          </View>

          <Pressable
            onPress={() => {
              // @ts-ignore
              navigation.navigate("Payment");
              // controlModal && onClose();
            }}
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
      </Actionsheet.Content>
    </Actionsheet>
  );
};

export default memo(CartBottomSheet);

const styles = StyleSheet.create({});
