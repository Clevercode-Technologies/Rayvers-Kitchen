import {
  FlatList,
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { memo } from "react";
import { SCREEN_WIDTH, colors } from "../../../components/DEFAULTS";
import HomeHeader from "../../../components/Customer/HomeHeader";
import { SearchInput } from "../../../components";
import { icons } from "../../../../assets/icons";
import Categories from "../../../components/Customer/Categories";
import RestaurantCard from "../../../components/Customer/RestaurantCard";
import { images } from "../../../../assets/images";
import { restaurantData } from "../../../DATA";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const CUSTOM_WIDTH = SCREEN_WIDTH - 48;
const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        marginTop:
          Platform.OS === "ios" ? 0 : Platform.OS === "android" ? 25 : 0,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.white,
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: CUSTOM_WIDTH,
        }}
      >
        <HomeHeader />
        <Text
          style={{
            fontFamily: "Regular-Sen",
            fontSize: 16,
            color: colors.tertiaryTxt,
            fontWeight: "400",
            textTransform: "capitalize",
          }}
        >
          Hey Halal,{" "}
          <Text style={{ fontFamily: "Bold-Sen" }}>Good Afternoon</Text>!
        </Text>

        <View>
          <SearchInput type="home-search" />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 32,
          }}
        >
          <Text>All Categories</Text>

          <Pressable 
          // @ts-ignore
          onPress={() => navigation.navigate('SearchResult')}
          style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>See All</Text>
            <Image
              source={icons.right_arr}
              style={{
                width: 5,
                height: 10,
                marginLeft: 10,
              }}
              resizeMode="contain"
            />
          </Pressable>
        </View>
        {/* Category */}
        <View>
          <Categories />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 32,
          }}
        >
          <Text
            style={{
              color: colors.primaryTxt,
              fontSize: 20,
              fontFamily: "Regular-Sen",
            }}
          >
            Open Restaurants
          </Text>

          <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                color: colors.secondaryTxt,
                fontSize: 12,
                fontFamily: "Regular-Sen",
              }}
            >
              See All
            </Text>
            <Image
              source={icons.right_arr}
              style={{
                width: 5,
                height: 10,
                marginLeft: 10,
              }}
              resizeMode="contain"
            />
          </Pressable>
        </View>

        {/* Open Restaurants */}
        <View>
          {restaurantData.map((item, index) => (
            <View key={`${item.id}-${index}`}>
              <RestaurantCard restaurant={item} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default memo(Home);

const styles = StyleSheet.create({});
