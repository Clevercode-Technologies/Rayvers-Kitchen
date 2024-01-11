import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SCREEN_WIDTH, colors } from "../DEFAULTS";
import { images } from "../../../assets/images";
import { generateRandomNumber } from "../../utils/idGenerator";
import { formatNumber } from "../../utils/currencyFormatter";
import { STATUS } from "../../DATA";

interface OrderItemProps {
  data: {
    id: number;
    name: string;
    category: string;
    image: ImageSourcePropType;
    price: number;
    number: number;
    date?: string;
    time?: string;
    status?: STATUS;
  };
  type: string;
}

const OrderItem: React.FC<OrderItemProps> = ({ data, type }) => {
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
          {data.category}
        </Text>
        {type === "history" && (
          <Text
            style={{
              fontSize: 14,
              fontFamily: "SemiBold-Sen",
              color: data.status === "Completed" ? "#059C6A" : "#FF0000",
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
          source={data.image}
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
                {data.name}
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
              ₦{formatNumber(data.price)}
            </Text>
            <View
              style={{
                width: 1,
                height: "100%",
                backgroundColor: "#CACCDA",
                marginLeft: type === "history" ? 10 : 0,
              }}
            />
            {type === "ongoing" && (
              <Text
                style={{
                  color: "#6B6E82",
                  fontSize: 14,
                  fontFamily: "Regular-Sen",
                }}
              >
                {data.number.toString().padStart(2, "0")} Items
              </Text>
            )}
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
                {data.date +
                  "," +
                  " " +
                  data.time +
                  " · " +
                  data.number.toString().padStart(2, "0") +
                  " " +
                  "Items"}
              </Text>
            )}
          </View>
        </View>
      </View>

      {/* bottom Buttons */}
      <View style={{ flexDirection: "row" }}>
        <Pressable
          onPress={() =>
            alert("Shows you the logistic locator screen for tracking")
          }
          style={{
            backgroundColor: colors.primaryBg,
            width: 139,
            height: 38,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 24,
          }}
        >
          <Text
            style={{
              color: colors.white,
              fontFamily: "SemiBold-Sen",
              fontSize: 12,
            }}
          >
            Track Order
          </Text>
        </Pressable>
        <Pressable
          onPress={() => alert("Should cancel the order")}
          style={{
            backgroundColor: colors.white,
            width: 139,
            height: 38,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: colors.primaryBg,
            marginTop: 24,
            marginLeft: 50,
          }}
        >
          <Text
            style={{
              color: colors.primaryBg,
              fontFamily: "SemiBold-Sen",
              fontSize: 12,
            }}
          >
            Cancel
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({});
