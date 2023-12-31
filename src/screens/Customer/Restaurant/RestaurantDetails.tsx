import {
  Image,
  ImageBackground,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  colors,
} from "../../../components/DEFAULTS";
import { images } from "../../../../assets/images";
import { icons } from "../../../../assets/icons";
import { popularFood, restCategories } from "../../../DATA";
import { ItemCard, RestCat } from "../../../components";

const RestaurantDetails = () => {
  const [menu, setMenu] = useState<string>("All");

  return (
    <SafeAreaView
      style={{
        marginTop: Platform.OS === "android" ? 25 : 0,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScrollView
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        style={{
          width: SCREEN_WIDTH,
          height: SCREEN_HEIGHT,
          backgroundColor: colors.white,
        }}
      >
        <ImageBackground
          source={images.restBg}
          style={{
            width: SCREEN_WIDTH,
            height: 321,
            alignItems: "center",
          }}
          imageStyle={{
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
          }}
        >
          <View
            style={{
              width: SCREEN_WIDTH - 48,
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              marginTop: 20,
            }}
          >
            <Pressable onPress={() => {}}>
              <Image
                source={icons.back}
                style={{
                  width: 45,
                  height: 45,
                }}
                resizeMode="contain"
              />
            </Pressable>
            <Pressable
              style={{
                backgroundColor: colors.white,
                width: 45,
                height: 45,
                borderRadius: 1000,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {}}
            >
              <Image
                source={icons.more}
                style={{
                  width: 20,
                  height: 8,
                }}
                resizeMode="contain"
              />
            </Pressable>
          </View>
        </ImageBackground>

        {/* Main Content */}
        <View
          style={{
            width: SCREEN_WIDTH - 48,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 25,
            }}
          >
            <Text
              style={{
                fontFamily: "Bold-Sen",
                fontSize: 20,
              }}
            >
              Spicy restaurant
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={icons.star}
                style={{ width: 20, height: 20 }}
                resizeMode="contain"
              />
              <Text
                style={{ fontFamily: "Bold-Sen", fontSize: 16, marginLeft: 10 }}
              >
                4.7
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Regular-Sen",
              marginTop: 14.5,
              marginBottom: 32,
              color: colors.grayText,
              lineHeight: 24,
            }}
          >
            Maecenas sed diam eget risus varius blandit sit amet non magna.
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ flexDirection: "row" }}
          >
            {restCategories.map((item) => (
              <View key={item.id}>
                <RestCat item={item} menu={menu} setMenu={setMenu} />
              </View>
            ))}
          </ScrollView>

          <Text
            style={{
              marginTop: 37,
              fontSize: 20,
              fontFamily: "Regular-Sen",
              color: "#181C2E",
              marginBottom: 16,
            }}
          >
            {menu}(10)
          </Text>

          <View
            style={{
              paddingHorizontal: 24,
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: "space-around",
              paddingTop: 15,
              marginBottom: 60,
            }}
          >
            {popularFood.map((item, index) => (
              <View key={index}>
                <ItemCard item={item} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RestaurantDetails;

const styles = StyleSheet.create({});
