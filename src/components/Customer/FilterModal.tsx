import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Dispatch, SetStateAction, memo, useState } from "react";
import { SCREEN_HEIGHT, SCREEN_WIDTH, colors } from "../DEFAULTS";
import { icons } from "../../../assets/icons";

interface FilterModalProp {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const FilterModal: React.FC<FilterModalProp> = ({ setShowModal }) => {
  const [deliveryTime, setDeliveryTime] = useState<string>("");
  const [offers, setOffers] = useState<string>("");
  const [pricing, setPricing] = useState<string>("");
  const [rating, setRating] = useState<number | null>(null);

  return (
    <View
      style={{
        backgroundColor: colors.white,
        width: SCREEN_WIDTH - 48,
        paddingHorizontal: 24,
        paddingVertical: 48,
        height: SCREEN_HEIGHT - 200,
        borderRadius: 12,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Text
          style={{
            color: colors.abstractTxt,
            fontFamily: "Regular-Sen",
            fontSize: 17,
          }}
        >
          Filter your search
        </Text>
        <TouchableOpacity onPress={() => setShowModal(false)}>
          <Image
            source={icons.cross}
            style={{
              width: 45,
              height: 45,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {/* Offer */}
      <Text
        style={{
          marginTop: 19,
          fontFamily: "Regular-Sen",
          fontSize: 13,
          textTransform: "uppercase",
        }}
      >
        Offers
      </Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <Pressable
          onPress={() => setOffers("Online Payment available")}
          style={{
            padding: 10,
            borderWidth: 2,
            borderColor:
              offers === "Online Payment available" ? colors.white : "#EDEDED",
            margin: 5,
            borderRadius: 33,
            backgroundColor:
              offers === "Online Payment available"
                ? colors.primaryBg
                : colors.white,
          }}
        >
          <Text
            style={{
              color:
                offers === "Online Payment available"
                  ? colors.white
                  : colors.abstractTxt,
              fontFamily: "Regular-Sen",
              fontSize: 16,
            }}
          >
            Online Payment available
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setOffers("Delivery")}
          style={{
            padding: 10,
            borderWidth: 2,
            borderColor: offers === "Delivery" ? colors.white : "#EDEDED",
            margin: 5,
            borderRadius: 33,
            backgroundColor:
              offers === "Delivery" ? colors.primaryBg : colors.white,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Regular-Sen",
              color: offers === "Delivery" ? colors.white : colors.abstractTxt,
            }}
          >
            Delivery
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setOffers("Pick Up")}
          style={{
            padding: 10,
            borderWidth: 2,
            borderColor: offers === "Pick Up" ? colors.white : "#EDEDED",
            margin: 5,
            borderRadius: 33,
            backgroundColor:
              offers === "Pick Up" ? colors.primaryBg : colors.white,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Regular-Sen",
              color: offers === "Pick Up" ? colors.white : colors.abstractTxt,
            }}
          >
            Pick Up
          </Text>
        </Pressable>
      </View>

      {/* Delivery Time */}
      <View>
        <Text
          style={{
            marginTop: 32,
            fontFamily: "Regular-Sen",
            fontSize: 13,
            textTransform: "uppercase",
          }}
        >
          Delivery Time
        </Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 12,
          }}
        >
          <Pressable
            onPress={() => setDeliveryTime("10-15 min")}
            style={{
              padding: 10,
              borderWidth: 2,
              borderColor:
                deliveryTime === "10-15 min" ? colors.white : "#EDEDED",
              margin: 5,
              borderRadius: 33,
              backgroundColor:
                deliveryTime === "10-15 min" ? colors.primaryBg : colors.white,
            }}
          >
            <Text
              style={{
                color:
                  deliveryTime === "10-15 min"
                    ? colors.white
                    : colors.abstractTxt,
                fontFamily: "Regular-Sen",
                fontSize: 16,
              }}
            >
              10-15 min
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setDeliveryTime("20 min")}
            style={{
              padding: 10,
              borderWidth: 2,
              borderColor: deliveryTime === "20 min" ? colors.white : "#EDEDED",
              margin: 5,
              borderRadius: 33,
              backgroundColor:
                deliveryTime === "20 min" ? colors.primaryBg : colors.white,
            }}
          >
            <Text
              style={{
                color:
                  deliveryTime === "20 min" ? colors.white : colors.abstractTxt,
                fontFamily: "Regular-Sen",
                fontSize: 16,
              }}
            >
              20 min
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setDeliveryTime("30 min")}
            style={{
              padding: 10,
              borderWidth: 2,
              borderColor: deliveryTime === "30 min" ? colors.white : "#EDEDED",
              margin: 5,
              borderRadius: 33,
              backgroundColor:
                deliveryTime === "30 min" ? colors.primaryBg : colors.white,
            }}
          >
            <Text
              style={{
                color:
                  deliveryTime === "30 min" ? colors.white : colors.abstractTxt,
                fontFamily: "Regular-Sen",
                fontSize: 16,
              }}
            >
              30 min
            </Text>
          </Pressable>
        </View>
      </View>

      {/* Pricing */}
      <Text
        style={{
          marginTop: 32,
          fontFamily: "Regular-Sen",
          fontSize: 13,
          textTransform: "uppercase",
          marginBottom: 12,
        }}
      >
        Pricing
      </Text>
      <View
        style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 32 }}
      >
        <Pressable
          onPress={() => setPricing("₦")}
          style={{
            width: 48,
            height: 48,
            borderRadius: 48 / 2,
            justifyContent: "center",
            alignItems: "center",
            borderColor: pricing === "₦" ? colors.white : "#EDEDED",
            borderWidth: 2,
            margin: 5,
            backgroundColor: pricing === "₦" ? colors.primaryBg : colors.white,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Regular-Sen",
              color: pricing === "₦" ? colors.white : "#464E57",
            }}
          >
            ₦
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setPricing("₦₦")}
          style={{
            width: 48,
            height: 48,
            borderRadius: 48 / 2,
            justifyContent: "center",
            alignItems: "center",
            borderColor: pricing === "₦₦" ? colors.white : "#EDEDED",
            borderWidth: 2,
            margin: 5,
            backgroundColor: pricing === "₦₦" ? colors.primaryBg : colors.white,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Regular-Sen",
              color: pricing === "₦₦" ? colors.white : "#464E57",
            }}
          >
            ₦₦
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setPricing("₦₦₦")}
          style={{
            width: 48,
            height: 48,
            borderRadius: 48 / 2,
            justifyContent: "center",
            alignItems: "center",
            borderColor: pricing === "₦₦₦" ? colors.white : "#EDEDED",
            borderWidth: 2,
            margin: 5,
            backgroundColor:
              pricing === "₦₦₦" ? colors.primaryBg : colors.white,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Regular-Sen",
              color: pricing === "₦₦₦" ? colors.white : "#464E57",
            }}
          >
            ₦₦₦
          </Text>
        </Pressable>
      </View>

      {/* Rating */}
      <Text
        style={{
          fontFamily: "Regular-Sen",
          fontSize: 13,
          textTransform: "uppercase",
          marginBottom: 12,
        }}
      >
        Rating
      </Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <Pressable
          onPress={() => setRating(1)}
          style={{
            borderWidth: 2,
            borderColor: "#EDEDED",
            width: 48,
            height: 48,
            borderRadius: 48 / 2,
            justifyContent: "center",
            alignItems: "center",
            margin: 5,
          }}
        >
          <Image
            source={
              rating && rating >= 1 ? icons.starFilled : icons.starOutlined
            }
            style={{ width: 18.15, height: 18.15 }}
          />
        </Pressable>
        <Pressable
          onPress={() => setRating(2)}
          style={{
            borderWidth: 2,
            borderColor: "#EDEDED",
            width: 48,
            height: 48,
            borderRadius: 48 / 2,
            justifyContent: "center",
            alignItems: "center",
            margin: 5,
          }}
        >
          <Image
            source={
              rating && rating >= 2 ? icons.starFilled : icons.starOutlined
            }
            style={{ width: 18.15, height: 18.15 }}
          />
        </Pressable>
        <Pressable
          onPress={() => setRating(3)}
          style={{
            borderWidth: 2,
            borderColor: "#EDEDED",
            width: 48,
            height: 48,
            borderRadius: 48 / 2,
            justifyContent: "center",
            alignItems: "center",
            margin: 5,
          }}
        >
          <Image
            source={
              rating && rating >= 3 ? icons.starFilled : icons.starOutlined
            }
            style={{ width: 18.15, height: 18.15 }}
          />
        </Pressable>
        <Pressable
          onPress={() => setRating(4)}
          style={{
            borderWidth: 2,
            borderColor: "#EDEDED",
            width: 48,
            height: 48,
            borderRadius: 48 / 2,
            justifyContent: "center",
            alignItems: "center",
            margin: 5,
          }}
        >
          <Image
            source={
              rating && rating >= 4 ? icons.starFilled : icons.starOutlined
            }
            style={{ width: 18.15, height: 18.15 }}
          />
        </Pressable>
        <Pressable
          onPress={() => setRating(5)}
          style={{
            borderWidth: 2,
            borderColor: "#EDEDED",
            width: 48,
            height: 48,
            borderRadius: 48 / 2,
            justifyContent: "center",
            alignItems: "center",
            margin: 5,
          }}
        >
          <Image
            source={
              rating && rating >= 5 ? icons.starFilled : icons.starOutlined
            }
            style={{ width: 18.15, height: 18.15 }}
          />
        </Pressable>
      </View>

      {/* Final Touch - Filter Button */}
      <Pressable
        onPress={() => setShowModal(false)}
        style={{
          backgroundColor: colors.primaryBg,
          width: "100%",
          height: 62,
          borderRadius: 12,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 31,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Bold-Sen",
            color: colors.white,
          }}
        >
          Filter
        </Text>
      </Pressable>
    </View>
  );
};

export default memo(FilterModal);

const styles = StyleSheet.create({});
