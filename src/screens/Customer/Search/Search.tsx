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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import { useNavigation } from "@react-navigation/native";
import { deleteRecent, setSearchQuery } from "../../../Redux/Splice/AppSplice";
import RestaurantCard from "../../../components/Customer/RestaurantCard";

const Search = () => {
  const keywords = useSelector((state: RootState) => state.data.keywords);
  const carts = useSelector((state: RootState) => state.data.carts);
  const searchQuery = useSelector((state: RootState) => state.data.searchQuery);
  const dishes = useSelector((state: RootState) => state.data.dishes);
  const restaurants = useSelector((state: RootState) => state.data.restaurants);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleSearch = (searchQuery: string) =>
    dishes?.filter(
      (event) =>
        searchQuery &&
        Object.values(event).some(
          (value) =>
            typeof value === "string" &&
            value.toLowerCase().includes(searchQuery?.toLowerCase())
        )
    );

  const handleRestaurantSearch = (searchQuery: string) =>
    restaurants?.filter(
      (event) =>
        searchQuery &&
        Object.values(event).some(
          (value) =>
            typeof value === "string" &&
            value.toLowerCase().includes(searchQuery?.toLowerCase())
        )
    );

  const searchResult =
    searchQuery.length === 0 ? dishes : handleSearch(searchQuery);
  const searchResultRestaurant =
    searchQuery.length === 0
      ? restaurants
      : handleRestaurantSearch(searchQuery);

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
            <Pressable
              onPress={() => navigation.canGoBack() && navigation.goBack()}
            >
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
            //   @ts-ignore
            onPress={() => navigation.navigate("Cart")}
          >
            <Image
              source={icons.cart}
              style={{
                width: 45,
                height: 45,
              }}
              resizeMode="contain"
            />
            <>
              {carts && carts?.length >= 1 && (
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
                    {carts?.length ? carts?.length : 0}
                  </Text>
                </View>
              )}
            </>
          </Pressable>
        </View>

        {/* Search Input */}
        <View style={{ width: SCREEN_WIDTH - 48 }}>
          <SearchInput type="search-screen" />
        </View>

        {/* Recent Searches */}
        {keywords.length > 0 && (
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
        )}
        {/* Keywords */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            paddingHorizontal: 24,
            width: SCREEN_WIDTH,
          }}
          contentContainerStyle={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: 50,
          }}
        >
          {keywords?.map((item, index) => (
            <Pressable
              onPress={() => {
                dispatch(setSearchQuery(item.prevSearch));
              }}
              key={index}
              style={{
                borderWidth: 2,
                borderColor: "#EDEDED",
                borderRadius: 33,
                height: 46,
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 12,
                alignItems: "center",
                marginRight: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: "Regular-Sen",
                  fontSize: 16,
                  color: "#181C2E",
                  marginRight: 10,
                }}
              >
                {item.prevSearch}
              </Text>
              <Pressable onPress={() => dispatch(deleteRecent(item.id))}>
                <Image
                  source={icons.close}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              </Pressable>
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
        <Pressable
          onPress={() => {
            // @ts-ignore
            navigation.navigate("RestaurantDetails", { data: restaurants[0] });
          }}
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
              // @ts-ignore
              source={{ uri: restaurants[0]?.image }}
              style={{
                width: 60,
                height: 50,
                borderRadius: 10,
                marginRight: 10,
              }}
              resizeMode="cover"
            />

            <View>
              <Text>{restaurants && restaurants[0].name}</Text>
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
                  {restaurants && restaurants[0]?.ratings}
                </Text>
              </View>
            </View>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            // @ts-ignore
            navigation.navigate("RestaurantDetails", { data: restaurants[0] });
          }}
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
              // @ts-ignore
              source={{ uri: restaurants[1]?.image }}
              style={{
                width: 60,
                height: 50,
                borderRadius: 10,
                marginRight: 10,
              }}
              resizeMode="cover"
            />

            <View>
              <Text>{restaurants && restaurants[1].name}</Text>
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
                  {restaurants && restaurants[1]?.ratings}
                </Text>
              </View>
            </View>
          </View>
        </Pressable>

        <View style={{ width: SCREEN_WIDTH, marginHorizontal: 24 }}>
          {/* Popular Foods */}
          <Text
            style={{
              fontFamily: "Regular-Sen",
              fontSize: 20,
              color: colors.primaryTxt,
              marginVertical: 24,
              alignSelf: "flex-start",
              marginLeft: 24,
            }}
          >
            Popular Food
          </Text>
          <View
            style={{
              paddingHorizontal: 24,
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: "space-around",
              paddingTop: 15,
              marginBottom: Platform.OS === "android" ? 60 : 0,
            }}
          >
            {searchResult?.length === 0 ? (
              <View>
                <View
                  style={{
                    padding: 24,
                    width: SCREEN_WIDTH - 48,
                    borderWidth: 3,
                    borderStyle: "dashed",
                    borderColor: colors.primaryTxt,
                    marginTop: 24,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Regular-Sen",
                      fontSize: 16,
                    }}
                  >
                    No Item Found 🔎
                  </Text>
                </View>
              </View>
            ) : (
              searchResult?.map((item, index) => (
                <View key={index}>
                  <ItemCard item={item} />
                </View>
              ))
            )}
          </View>
          {/* Popular */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 40,
              marginHorizontal: 24,
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
          <View style={{ marginBottom: 100 }}>
            {searchResultRestaurant?.length === 0 ? (
              <View
                style={{
                  width: SCREEN_WIDTH,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    padding: 24,
                    width: SCREEN_WIDTH - 48,
                    borderWidth: 3,
                    borderStyle: "dashed",
                    borderColor: colors.primaryTxt,
                    marginTop: 24,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Regular-Sen",
                      fontSize: 16,
                    }}
                  >
                    Nothing Found 😞
                  </Text>
                </View>
              </View>
            ) : (
              searchResultRestaurant?.map((item, index) => (
                <View key={`${item.id}-${index}`}>
                  <RestaurantCard restaurant={item} />
                </View>
              ))
            )}
          </View>
          <View style={{ height: 100 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({});
