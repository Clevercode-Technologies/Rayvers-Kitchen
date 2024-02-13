import {
  FlatList,
  Image,
  Platform,
  Pressable,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { memo } from "react";
import { SCREEN_WIDTH, colors } from "../../../components/DEFAULTS";
import HomeHeader from "../../../components/Customer/HomeHeader";
import { ItemCard, SearchInput } from "../../../components";
import { icons } from "../../../../assets/icons";
import Categories from "../../../components/Customer/Categories";
import RestaurantCard from "../../../components/Customer/RestaurantCard";
import { images } from "../../../../assets/images";
import { popularFood, restaurantData } from "../../../DATA";
import { useNavigation } from "@react-navigation/native";
import { useFetch } from "../../../config/useFetch";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategories,
  setDishes,
  setRestaurants,
} from "../../../Redux/Splice/AppSplice";
import { RootState } from "../../../Redux/store";
import {
  SkeletonContainer,
  GradientProps,
} from "react-native-dynamic-skeletons";
import { LinearGradient } from "expo-linear-gradient";
import { fetchCategories } from "../../../config/fetchCategories";
import { generateRandomNumber } from "../../../utils/idGenerator";

const Gradient = (props: GradientProps) => <LinearGradient {...props} />;

const Home = () => {
  const storedDishes = useSelector((state: RootState) => state.data.dishes);
  const categoryQuery = useSelector(
    (state: RootState) => state.data.categoryQuery
  );
  const storedRestaurants = useSelector(
    (state: RootState) => state.data.restaurants
  );

  const {
    error: restaurantError,
    loading: restaurantLoading,
    restaurants,
    reFetch: reFetchRestaurants,
  } = useFetch("restaurants");
  const {
    error: dishesError,
    loading: dishesLoading,
    dishes,
    reFetch: reFetchDishes,
  } = useFetch("dishes");

  const {
    loading: categoriesLoading,
    categories,
    error,
    reFetch: reFetchCategories,
  } = fetchCategories();

  const dispatch = useDispatch();

  const reFetch = async () => {
    try {
      reFetchRestaurants("restaurants");
      reFetchDishes("dishes");
      reFetchCategories();
    } catch (error: any) {
      console.log("Error from reFetch: ", error.message);
    }
  };

  if (!restaurantLoading && restaurants !== null) {
    dispatch(setRestaurants(restaurants));
  }
  if (!dishesLoading && dishes !== null) {
    dispatch(setDishes(dishes));
  }
  if (!categoriesLoading && categories !== null) {
    dispatch(setCategories(categories));
  }

  const handleCategoryFilter = (category: string) => {
    if (categoryQuery === "Other") {
      // Filter out items that are not categorized (i.e., items with null or empty string category)
      return storedDishes?.filter((event) => {
        const itemCategory = event.get_category.name || ""; // Handle null category
        return !itemCategory || itemCategory.trim() === "";
      });
    } else {
      return categoryQuery === "default"
        ? storedDishes
        : storedDishes?.filter(
            (event) =>
              categoryQuery &&
              event.get_category.name
                .toLowerCase()
                .includes(categoryQuery?.toLowerCase())
          );
    }
  };

  const filteredCategory = handleCategoryFilter(categoryQuery);


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
        flex: 1,
      }}
    >
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={dishesLoading || restaurantLoading}
            onRefresh={reFetch}
            tintColor={colors.primaryBg}
            enabled={true}
            style={{}}
          />
        }
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
            onPress={() => navigation.navigate("SearchResult")}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
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
        {/* Categories Skeleton Loading */}
        {categoriesLoading && (
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            {new Array(4).fill(0).map((_) => (
              <SkeletonContainer
                animationType="leftRight"
                Gradient={Gradient}
                isLoading={dishesLoading}
                duration={2000}
                style={{}}
                key={generateRandomNumber(4)}
              >
                <View
                  style={{
                    height: 60,
                    width: 135,
                    marginBottom: 21,
                    borderRadius: 50,
                    marginHorizontal: 13,
                  }}
                />
              </SkeletonContainer>
            ))}
          </View>
        )}

        {/* Actual Categories */}
        {!categoriesLoading && (
          <View>
            <Categories data={categories} />
          </View>
        )}

        <View
          style={{
            alignSelf: "flex-start",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              // width: '100%'
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

            <Pressable
              onPress={() =>
                // @ts-ignore
                navigation.navigate("Search")
              }
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Text>See All</Text>
              <Image
                source={icons.chevronRight}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            </Pressable>
          </View>

          {/* Popular Foods */}
          <View
            style={{
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: "space-around",
              paddingTop: 15,
              marginBottom: Platform.OS === "android" ? 60 : 0,
            }}
          >
            {dishesLoading &&
              new Array(4).fill(0).map((_) => (
                <SkeletonContainer
                  animationType="leftRight"
                  Gradient={Gradient}
                  isLoading={dishesLoading}
                  duration={2000}
                  style={{}}
                  key={generateRandomNumber(4)}
                >
                  <View
                    style={{
                      height: 130,
                      width: 153,
                      marginBottom: 21,
                      borderRadius: 24,
                    }}
                  />
                </SkeletonContainer>
              ))}
            {!dishesLoading &&
              filteredCategory?.map((item, index) => (
                <View key={index}>
                  <ItemCard item={item} />
                </View>
              ))}

            {!dishesLoading && filteredCategory?.length === 0 && (
              <View
                style={{
                  width: SCREEN_WIDTH - 48,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    borderStyle: "dashed",
                    borderColor: colors.primaryBg,
                    borderWidth: 3,
                    padding: 24,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Regular-Sen",
                      fontSize: 18,
                      color: colors.primaryTxt,
                    }}
                  >
                    Didn't Find Anything 😞😢
                  </Text>
                </View>
              </View>
            )}
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
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
              Popular Restaurant
            </Text>

            <Pressable
              onPress={() =>
                // @ts-ignore
                navigation.navigate("SearchResult")
              }
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Text>See All</Text>
              <Image
                source={icons.chevronRight}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            </Pressable>
          </View>
          {restaurantLoading &&
            Array(2)
              .fill(0)
              .map((_) => (
                <SkeletonContainer
                  animationType="leftRight"
                  Gradient={Gradient}
                  isLoading={restaurantLoading}
                  duration={2000}
                  style={{}}
                  key={generateRandomNumber(4)}
                >
                  <View
                    style={{
                      width: SCREEN_WIDTH - 48,
                      height: 208,
                      borderRadius: 11,
                      marginBottom: 21,
                    }}
                  />
                </SkeletonContainer>
              ))}
          {!restaurantLoading &&
            storedRestaurants?.map((item, index) => (
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
