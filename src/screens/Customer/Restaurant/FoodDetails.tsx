import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  colors,
} from "../../../components/DEFAULTS";
import { icons } from "../../../../assets/icons";
import { ingredients } from "../../../DATA";
import { FloatingCartAction, ImageSlider } from "../../../components";

const FoodDetails = () => {
  return (
    <SafeAreaView
      style={{
        marginTop: Platform.OS === "android" ? 25 : 0,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        backgroundColor: colors.white,
        flex: 1
      }}
    >

      {/* Main Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <ImageSlider />
        
        <View style={{ marginHorizontal: 24 }}>
          <Text
            style={{
              fontFamily: "Bold-Sen",
              fontSize: 20,
              color: "#181C2E",
              marginTop: 24,
            }}
          >
            Burger Bistro
          </Text>
          <View style={{ marginTop: 10 }}>
            <Image source={{}} style={{}} resizeMode="contain" />
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Regular-Sen",
                color: "#181C2E",
              }}
            >
              Rose Garden
            </Text>
          </View>

          {/* Info Section */}
          <View
            style={{
              marginTop: 20,
              marginBottom: 20,
              width: "80%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                source={icons.star}
                style={{ width: 20, height: 20 }}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontFamily: "Regular-Sen",
                  fontSize: 16,
                  marginLeft: 10,
                  color: "#181C2E",
                }}
              >
                4.7
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={icons.delivery}
                style={{ width: 20, height: 20 }}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontFamily: "Regular-Sen",
                  fontSize: 16,
                  marginLeft: 10,
                  color: "#181C2E",
                }}
              >
                Free
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={icons.clock}
                style={{ width: 20, height: 20 }}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontFamily: "Regular-Sen",
                  fontSize: 16,
                  marginLeft: 10,
                  color: "#181C2E",
                }}
              >
                20 min
              </Text>
            </View>
          </View>

          <Text
            style={{
              lineHeight: 24,
              color: colors.grayText,
              fontSize: 14,
              fontFamily: "Regular-Sen",
              marginBottom: 20,
            }}
          >
            Maecenas sed diam eget risus varius blandit sit amet non magna.
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
          </Text>

          <Text
            style={{
              color: colors.primaryTxt,
              fontSize: 14,
              fontFamily: "Regular-Sen",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            Ingredients
          </Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {ingredients.map((item) => (
              <View key={item.id} style={{ margin: 10, alignItems: "center" }}>
                <View
                  style={{
                    backgroundColor: "#FFEBE4",
                    width: 50,
                    height: 50,
                    borderRadius: 50 / 2,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={item.image}
                    style={{ width: 24, height: 24 }}
                    resizeMode="contain"
                  />
                </View>
                <Text
                  style={{
                    fontFamily: "SemiBold-Sen",
                    fontSize: 12,
                    color: "#747783",
                    marginTop: 5,
                  }}
                >
                  {item.item}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View style={{ height: Platform.OS === 'android' ? 235 : 200 }} />
      </ScrollView>
      <FloatingCartAction />
    </SafeAreaView>
  );
};

export default FoodDetails;

const styles = StyleSheet.create({});
