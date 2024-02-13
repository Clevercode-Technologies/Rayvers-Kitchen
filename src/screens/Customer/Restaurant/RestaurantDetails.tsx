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
import React, { useEffect, useState } from "react";
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  colors,
} from "../../../components/DEFAULTS";
import { images } from "../../../../assets/images";
import { icons } from "../../../../assets/icons";
import { ItemCard, RestCat } from "../../../components";
import { useNavigation } from "@react-navigation/native";
import { restCategories } from "../../../DATA";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import { Restaurant } from "../../../../type";

interface RestaurantProps {
  route: {
    params: {
      data: Restaurant | undefined;
    };
  };
}

const RestaurantDetails: React.FC<RestaurantProps> = ({ route }) => {
  const [menu, setMenu] = useState<string>("All");
  const [restaurant, setRestaurant] = useState<Restaurant | undefined>(undefined); 
  const dishes = useSelector((state: RootState) => state.data.dishes);

  // console.log(restaurant);

  const navigation = useNavigation();

  useEffect(() => {
    if(route.params.data !== undefined) {
      setRestaurant(route.params?.data); 
    } 
  }, [route?.params?.data])

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
        // @ts-ignore
          source={{  uri: restaurant?.image }}
          style={{
            width: SCREEN_WIDTH,
            height: 321,
            alignItems: "center",
          }}
          resizeMode="cover"
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
            <Pressable onPress={() => navigation.canGoBack() && navigation.goBack()}>
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
              {restaurant?.name}
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
                {restaurant?.ratings}
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
            {restaurant?.description}
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ flexDirection: "row" }}
          >
            {restCategories?.map((item) => (
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
            {dishes?.map((item, index) => (
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
