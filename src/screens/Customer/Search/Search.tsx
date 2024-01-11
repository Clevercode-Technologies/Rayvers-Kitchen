import {
  Image,
  Platform,
  Pressable,
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
import { ItemCard, SearchInput } from "../../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import { popularFood, restaurantData } from "../../../DATA";
import { useNavigation } from "@react-navigation/native";

const Search = () => {
  const keywords = useSelector((state: RootState) => state.data.keywords);


  const navigation = useNavigation();


  return (
    <SafeAreaView
      style={{
        marginTop: Platform.OS === "android" ? 25 : 0,
        height: SCREEN_HEIGHT,
        alignItems: "center",
        backgroundColor: colors.white,
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          width: SCREEN_WIDTH,
        }}
        horizontal={false}
        style={{}}
      >
        <View
          style={{
            width: SCREEN_WIDTH - 48,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable onPress={() => navigation.canGoBack() && navigation.goBack()}>
              <Image
                source={icons.back}
                style={{ width: 45, height: 45, marginRight: 16 }}
                resizeMode="contain"
              />
            </Pressable>

            <Text
              style={{
                color: "#181C2E",
                fontSize: 17,
                fontFamily: "Regular-Sen",
                fontStyle: "normal",
              }}
            >
              Search
            </Text>
          </View>

          <Pressable
            style={{ position: "relative" }}
            // @ts-ignore
            onPress={() => navigation.navigate('Cart')}
          >
            <Image
              source={icons.cart}
              style={{ width: 45, height: 45 }}
              resizeMode="contain"
            />
            <View
              style={{
                position: "absolute",
                backgroundColor: colors.primaryBg,
                width: 25,
                height: 25,
                borderRadius: 25 / 2,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Bold-Sen",
                  fontSize: 16,
                  color: colors.white,
                }}
              >
                {2}
              </Text>
            </View>
          </Pressable>
        </View>

        {/* Search Input */}
        <View style={{ width: SCREEN_WIDTH - 48 }}>
          <SearchInput type="search-screen" />
        </View>

        {/* Recent Searches */}
        <Text
          style={{
            fontFamily: "Regular-Sen",
            fontSize: 20,
            color: colors.primaryTxt,
            marginTop: 24,
            marginBottom: 12,
            alignSelf: "flex-start",
            marginLeft: 24,
          }}
        >
          Recent Keywords
        </Text>
        {/* Keywords */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            paddingHorizontal: 24,
          }}
          contentContainerStyle={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {keywords?.map((item, index) => (
            <Pressable
              key={index}
              style={{
                borderWidth: 2,
                borderColor: "#EDEDED",
                borderRadius: 33,
                width: 120,
                height: 46,
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 12,
                alignItems: "center",
                marginRight: 10,
              }}
            >
              <Text style={{}}>{item}</Text>
              <Image
                source={icons.close}
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </Pressable>
          ))}
        </ScrollView>

        {/* Suggested Restaurants */}
        <Text
          style={{
            fontFamily: "Regular-Sen",
            fontSize: 20,
            color: colors.primaryTxt,
            marginTop: 32,
            marginBottom: 20,
            alignSelf: "flex-start",
            marginLeft: 24,
          }}
        >
          Suggested Restaurants
        </Text>
        {restaurantData.map((item) => (
          <View
            key={item.id}
            style={{ marginHorizontal: 24, alignSelf: "flex-start" }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 17,
              }}
            >
              <Image
                source={item.image}
                style={{
                  width: 60,
                  height: 50,
                  borderRadius: 10,
                  marginRight: 10,
                }}
                resizeMode="cover"
              />

              <View>
                <Text>{item.name}</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={icons.star}
                    style={{
                      width: 15,
                      height: 15,
                    }}
                    resizeMode="contain"
                  />
                  <Text
                    style={{
                      marginLeft: 5,
                      fontFamily: "Regular-Sen",
                      fontSize: 16,
                      color: colors.abstractTxt,
                    }}
                  >
                    {item.rating}
                  </Text>
                </View>
              </View>
            </View>
            {/* Border Demarcator */}
            {/* <View style={{
                    height: 1,
                    width: '100%',
                    backgroundColor: '#EBEBEB',
                    marginTop: 14,
                    alignSelf: 'flex-start'
                }} /> */}
          </View>
        ))}

        {/* Popular */}
        <View
          style={{
            alignSelf: "flex-start",
          }}
        >
          <Text
            style={{
              fontFamily: "Regular-Sen",
              fontSize: 20,
              color: colors.primaryTxt,
              marginTop: 32,
              marginBottom: 27,
              marginLeft: 24,
            }}
          >
            Popular Fast Food
          </Text>

          {/* Popular Foods */}
          <View
            style={{
              paddingHorizontal: 24,
              width: SCREEN_WIDTH,
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: 'space-around',
              paddingTop: 15,
              marginBottom: Platform.OS === 'android' ? 60 : 0
            }}
          >
            {popularFood.map((item) => (
              <ItemCard item={item} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({});
