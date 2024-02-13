import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { memo, useState } from "react";
import { images } from "../../../../assets/images";
import { icons } from "../../../../assets/icons";
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  colors,
} from "../../../components/DEFAULTS";
import { FilterModal, ItemCard } from "../../../components";
import RestaurantCard from "../../../components/Customer/RestaurantCard";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";

const SearchResult = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const restaurant = useSelector((state: RootState) => state.data.restaurants);
  const dishes = useSelector((state: RootState) => state.data.dishes);

  const activateModal = () => setShowModal(true);
  const navigation = useNavigation();

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
    restaurant?.filter(
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
      ? restaurant
      : handleRestaurantSearch(searchQuery);

  return (
    <SafeAreaView
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginTop: Platform.OS === "android" ? 20 : 0,
        position: "relative",
        backgroundColor: colors.white,
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: SCREEN_WIDTH - 48, height: SCREEN_HEIGHT }}
      >
        {/* Header */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {/* Left */}
          <View
            style={{
              flexDirection: "row",
              paddingTop: 10,
              alignItems: "center",
            }}
          >
            <Pressable
              onPress={() => navigation.canGoBack() && navigation.goBack()}
            >
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
              onPress={() => {}}
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderColor: "#ECF0F4",
                borderWidth: 1,
                width: 100,
                height: 45,
                borderRadius: 33,
                justifyContent: "center",
                marginLeft: 17,
              }}
            >
              <Text style={{ marginRight: 4 }}>Burger</Text>
              <Image source={icons.dropdown} />
            </Pressable>
          </View>

          {/* RIght */}
          <View
            style={{
              flexDirection: "row",
              paddingTop: 10,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => setShowSearchInput((prevState) => !prevState)}
            >
              <Image
                source={icons.resultSearch}
                style={{
                  width: 45,
                  height: 45,
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={activateModal}
            >
              <Image
                source={icons.filter}
                style={{
                  width: 46,
                  height: 46,
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Input Area */}
        {showSearchInput && (
          <View>
            <TextInput
              placeholder="Search anything..."
              placeholderTextColor={colors.primaryTxt}
              style={{
                height: 50,
                width: SCREEN_WIDTH - 48,
                color: colors.primaryTxt,
                fontFamily: "Regular-Sen",
                fontSize: 14,
                marginTop: 24,
                borderWidth: 1,
                borderColor: colors.primaryTxt,
                borderRadius: 10,
                paddingLeft: 20,
              }}
              onChangeText={(text) => setSearchQuery(text)}
            />
          </View>
        )}

        {/* Popular Foods */}
        <Text
          style={{
            fontFamily: "Regular-Sen",
            fontSize: 20,
            color: colors.primaryTxt,
            marginVertical: 24,
            alignSelf: "flex-start",
          }}
        >
          Dishes
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

        {/* Open restaurants */}

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
            Restaurants
          </Text>
        </View>

        {/* Open Restaurants */}
        <View style={{ marginBottom: 100 }}>
          {searchResultRestaurant?.length === 0 ? (
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
                  Nothing Found 😞
                </Text>
              </View>
            </View>
          ) : searchResultRestaurant?.map((item, index) => (
              <View key={`${item.id}-${index}`}>
                <RestaurantCard restaurant={item} />
              </View>
            ))}
        </View>
      </ScrollView>
      {/* Modal Components */}
      {showModal && (
        // Modal Wrapper
        <View
          style={{
            position: "absolute",
            zIndex: 10,
            backgroundColor: "rgba(110,126,141,0.5)",
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Modal Content */}
          <FilterModal setShowModal={setShowModal} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default memo(SearchResult);

const styles = StyleSheet.create({});
