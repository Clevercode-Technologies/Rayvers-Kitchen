import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { memo, useState } from "react";
import { BASE_URL, SCREEN_WIDTH, colors } from "../DEFAULTS";
import { images } from "../../../assets/images";
import { generateRandomNumber } from "../../utils/idGenerator";
import { formatNumber } from "../../utils/currencyFormatter";
import { useNavigation } from "@react-navigation/native";
import { OrderOngoingPayload } from "../../../type";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { addCart } from "../../Redux/Splice/AppSplice";

interface OrderItemProps {
  data: OrderOngoingPayload;
  type: string;
  setCancelledLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}

enum STATUS {
  COMPLETED = "completed",
  CANCELLED = "cancelled",
  PENDING = "pending",
}

const OrderItem: React.FC<OrderItemProps> = ({
  data,
  type,
  setCancelledLoading,
}) => {
  const [error, setError] = useState<any | null>("");
  const [message, setMessage] = useState<string | null>("");

  // Redux States
  const token = useSelector((state: RootState) => state.data.token);

  const cancelOrder = async () => {
    setCancelledLoading && setCancelledLoading(true);
    try {
      const response = await fetch(`${BASE_URL}api/orderitems/${data.id}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify({
          status: STATUS.CANCELLED,
        }),
      });

      if (response.ok) {
        setMessage("Order Cancelled Successfully");
        setError(null);
        setCancelledLoading && setCancelledLoading(false);
      } else {
        setMessage(null);
        setError("Failed to cancel order");
        setCancelledLoading && setCancelledLoading(false);
      }
    } catch (error: any) {
      console.log(error.message);
      setMessage(null);
      setError(error.message);
    }
  };

  const navigation = useNavigation();

  const dispatch = useDispatch();

  return (
    <View
      style={{
        width: SCREEN_WIDTH - 48,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Regular-Sen",
            color: colors.tertiaryTxt,
          }}
        >
          {data.dish.get_category.name}
        </Text>
        {type === "history" && (
          <Text
            style={{
              fontSize: 14,
              fontFamily: "SemiBold-Sen",
              color: data.status === STATUS.COMPLETED ? "#059C6A" : "#FF0000",
              marginLeft: 28,
            }}
          >
            {data.status}
          </Text>
        )}
      </View>

      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#EEF2F6",
          marginTop: 16,
        }}
      />
      {/* Main Item */}
      <View
        style={{
          flexDirection: "row",
          marginTop: 16,
        }}
      >
        <Image
          source={{ uri: data.dish.images[0].file }}
          style={{
            width: 70,
            height: 70,
            borderRadius: 8,
            marginRight: 14,
          }}
          resizeMode="cover"
        />

        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: SCREEN_WIDTH - 130,
            }}
          >
            <Pressable
              onPress={() => alert("Takes you to the food detailed page")}
              style={{}}
            >
              <Text
                style={{
                  fontFamily: "SemiBold-Sen",
                  fontSize: 14,
                  color: colors.tertiaryTxt,
                }}
              >
                {data.dish.name}
              </Text>
            </Pressable>
            <Text
              style={{
                color: "#6B6E82",
                fontSize: 14,
                fontFamily: "Regular-Sen",
                textDecorationLine: "underline",
              }}
            >
              #{generateRandomNumber(6)}
            </Text>
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              width: SCREEN_WIDTH - 300,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontFamily: "SemiBold-Sen",
                color: colors.tertiaryTxt,
              }}
            >
              ₦{formatNumber(data.dish.price)}
            </Text>
            <View
              style={{
                width: 1,
                height: "100%",
                backgroundColor: "#CACCDA",
                marginHorizontal: 10,
              }}
            />
            {
              <Text
                style={{
                  color: "#6B6E82",
                  fontSize: 14,
                  fontFamily: "Regular-Sen",
                }}
              >
                {data.quantity.toString().padStart(2, "0")} Items
              </Text>
            }
            {type === "history" && (
              <Text
                style={{
                  color: "#6B6E82",
                  fontSize: 14,
                  fontFamily: "Regular-Sen",
                  marginLeft: 10,
                  width: SCREEN_WIDTH / 2,
                }}
              >
                {/* {data.date +
                  "," +
                  " " +
                  data.time +
                  " · " +
                  data.number.toString().padStart(2, "0") +
                  " " +
                  "Items"} */}
              </Text>
            )}
          </View>
        </View>
      </View>

      {/* bottom Buttons */}
      <View style={{ flexDirection: "row" }}>
        <Pressable
          onPress={() => {
            if (type === "ongoing") {
              // @ts-ignore
              navigation.navigate("TrackOrder", { data });
            } else if (type === "history") {
              // @ts-ignore
              navigation.navigate('FoodDetails', {data: data.dish})
            }
          }}
          style={{
            backgroundColor:
              type === "ongoing" ? colors.primaryBg : colors.white,
            width: 139,
            height: 38,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 24,
            borderWidth: type === "history" ? 1 : 0,
            borderColor: colors.primaryBg,
          }}
        >
          <Text
            style={{
              color: type === "ongoing" ? colors.white : colors.primaryBg,
              fontFamily: "SemiBold-Sen",
              fontSize: 12,
            }}
          >
            {type === "ongoing"
              ? "Track Order"
              : type === "history"
              ? "View More"
              : ""}
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            if (type === "ongoing") {
              cancelOrder();
            } else if (type === "history") {
              // @ts-ignore
              dispatch(addCart({
                itemCount: 1,
                ...data.dish,
                favourite: [],
                category: 0,
              }));
              // @ts-ignore
              navigation.navigate("Cart");
            }
          }}
          style={{
            backgroundColor:
              type === "history" ? colors.primaryBg : colors.white,
            width: 139,
            height: 38,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: type === "ongoing" ? 1 : 0,
            borderColor: colors.primaryBg,
            marginTop: 24,
            marginLeft: 50,
          }}
        >
          <Text
            style={{
              color: type === "history" ? colors.white : colors.primaryBg,
              fontFamily: "SemiBold-Sen",
              fontSize: 12,
            }}
          >
            {type === "ongoing" ? "Cancel" : "Re-Order"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default memo(OrderItem);

const styles = StyleSheet.create({});
