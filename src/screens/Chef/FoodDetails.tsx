import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { icons } from "../../../assets/icons";
import { SCREEN_WIDTH, colors } from "../../components/DEFAULTS";
import ChefFoodDetailsSlider from "../../components/Chef/ChefFoodDetailsSlider";
import { formatNumber } from "../../utils/currencyFormatter";
import { useNavigation } from "@react-navigation/native";

const ingredients = [
  { item: "Salt", image: icons.newItemSaltActive },
  { item: "Chicken", image: icons.newItemChickenNewActive },
  { item: "Onion", image: icons.newItemOnionNewActive },
  { item: "Garlic", image: icons.newItemGarlicNewActive },
  { item: "Pepper", image: icons.newItemPepperActive },
  { item: "Ginger", image: icons.newItemGingerNewActive },
  { item: "Broccoli", image: icons.newItemBroccoliNewActive },
  { item: "Orange", image: icons.newItemOrangeActive },
  { item: "Walnut", image: icons.newItemWalnutActive },
];

const FoodDetails = () => {
    const navigation = useNavigation();

  return (
    <SafeAreaView style={{ backgroundColor: colors.white, flex: 1 }}>
      {/* Header for Food Details */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 24,
        }}
      >
        <Pressable onPress={() => navigation.canGoBack() && navigation.goBack()} style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={icons.back} style={{ width: 45, height: 45 }} />
          <Text
            style={{
              fontSize: 17,
              color: "#181C2E",
              fontFamily: "Regular-Sen",
              marginLeft: 16,
            }}
          >
            Food Details
          </Text>
        </Pressable>

        <Pressable onPress={() => {}} style={{ padding: 10 }}>
          <Text
            style={{
              textTransform: "uppercase",
              color: colors.primaryBg,
              fontSize: 14,
              fontFamily: "SemiBold-Sen",
            }}
          >
            Edit
          </Text>
        </Pressable>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <ChefFoodDetailsSlider />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 24,
            marginTop: 13,
          }}
        >
          <Text
            style={{
              color: colors.primaryTxt,
              fontSize: 16,
              fontFamily: "SemiBold-Sen",
            }}
          >
            Chicken Thai Biriyani
          </Text>
          <Text
            style={{
              color: colors.primaryTxt,
              fontSize: 16,
              fontFamily: "SemiBold-Sen",
            }}
          >
            ₦{formatNumber(3450)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 24,
            marginTop: 9,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={icons.locationFD}
              style={{
                width: 12,
                height: 12,
              }}
            />
            <Text
              style={{
                color: "#AFAFAF",
                fontSize: 13,
                fontFamily: "SemiBold-Sen",
              }}
            >
              Kentucky 39495
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 6,
              }}
            >
              <Image
                source={icons.starReview}
                style={{ width: 17, height: 17 }}
              />
              <Text
                style={{
                  color: colors.primaryBg,
                  fontSize: 14,
                  fontFamily: "SemiBold-Sen",
                }}
              >
                {"4.9"}
              </Text>
            </View>
            <Text
              style={{
                color: "#AFAFAF",
                fontSize: 14,
                fontFamily: "Regular-Sen",
              }}
            >
              ({"10"} Reviews)
            </Text>
          </View>
        </View>

        {/* Ingredients */}
        <View
          style={{
            marginHorizontal: 24,
            paddingVertical: 20,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: "#F0F4F9",
            marginTop: 24,
          }}
        >
          <Text
            style={{
              color: colors.primaryTxt,
              fontSize: 14,
              textTransform: "uppercase",
            }}
          >
            Ingredients
          </Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {ingredients.map((item, index) => (
              <View
                key={index}
                style={{
                  alignItems: "center",
                  width: 50,
                  marginTop: 20,
                  marginBottom: 30,
                  marginRight: 19,
                }}
              >
                <Image
                  source={item.image}
                  style={{
                    width: 50,
                    height: 50,
                  }}
                  resizeMode="contain"
                />

                <Text
                  style={{
                    color: "#747783",
                    fontSize: 12,
                    fontFamily: "Regular-Sen",
                  }}
                >
                  {item.item}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View style={{ marginHorizontal: 24, marginTop: 20 }}>
          <Text
            style={{
              fontFamily: "Regular-Sen",
              fontSize: 14,
              color: colors.primaryTxt,
            }}
          >
            Description
          </Text>
          <Text
            style={{
              fontFamily: "Regular-Sen",
              fontSize: 13,
              color: "#747783",
              marginTop: 14,
            }}
          >
            Lorem ipsum dolor sit amet, consetdur Maton adipiscing elit.
            Bibendum in vel, mattis et amet dui mauris turpis.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FoodDetails;

const styles = StyleSheet.create({});
