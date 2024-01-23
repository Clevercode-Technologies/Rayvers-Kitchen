import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SCREEN_WIDTH, colors } from "../../DEFAULTS";
import { icons } from "../../../../assets/icons";

interface FoodItemProps {
  data: {
    id: number;
    item: string;
    category: string;
    price: number;
    reviews: number;
    deliveryMode: string;
    image: ImageSourcePropType;
    rating: string;
  };
}

const FoodItem: React.FC<FoodItemProps> = ({ data }) => {
  return (
    <View
      style={{ marginVertical: 10, flexDirection: "row", alignItems: "center" }}
    >
      <Image
        source={data.image}
        style={{ width: 102, height: 102, borderRadius: 20, marginRight: 20 }}
        resizeMode="cover"
      />

      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: SCREEN_WIDTH - 180,
          }}
        >
          <Text
            style={{
              color: colors.primaryTxt,
              fontSize: 14,
              fontFamily: "SemiBold-Sen",
            }}
          >
            {data.item}
          </Text>
          <Pressable onPress={() => alert("add an Edit interface for here!")}>
            <Image
              source={icons.more}
              style={{ width: 17.64, height: 4.6 }}
              resizeMode="contain"
            />
          </Pressable>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: SCREEN_WIDTH - 180,
            marginTop: 11,
          }}
        >
          <Pressable
            style={{
              backgroundColor: "rgba(255,118,34,0.2)",
              paddingHorizontal: 12,
              paddingVertical: 5,
              borderRadius: 30,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: colors.primaryBg,
                fontFamily: "Regular-Sen",
              }}
            >
              {data.category}
            </Text>
          </Pressable>
          <Text
            style={{
              fontFamily: "SemiBold-Sen",
              fontSize: 17,
              color: colors.primaryTxt,
            }}
          >
            ₦{data.price}
          </Text>
        </View>

        {/* Review Section */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 13,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={icons.starReview}
              style={{
                width: 17,
                height: 17,
                marginRight: 5,
              }}
            />
            <Text
              style={{
                color: colors.primaryBg,
                fontFamily: "SemiBold-Sen",
                fontSize: 14,
              }}
            >
              {data.rating}
            </Text>

            <Text
              style={{
                color: "#AFAFAF",
                paddingLeft: 10,
                fontSize: 14,
                fontFamily: "Regular-Sen",
              }}
            >
              ({data.reviews} Review)
            </Text>
          </View>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Regular-Sen",
              color: "#AFAFAF",
            }}
          >
            {data.deliveryMode}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FoodItem;

const styles = StyleSheet.create({});
