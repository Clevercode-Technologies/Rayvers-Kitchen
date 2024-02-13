import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { memo, useState } from "react";
import { icons } from "../../../../assets/icons";
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  colors,
} from "../../../components/DEFAULTS";
import { ItemCard } from "../../../components";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";

const Favorite = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  // Using the plus icon implement favorite such that when the icon is clicked it is added to favorite and then the heart icons shows, if the heart icon is clicked then the item is removed from the favorite list.
  const navigation = useNavigation();

  const favorite = useSelector((state: RootState) => state.data.favorite);

  const handleSearch = (searchQuery: string) => {
  if (!searchQuery) return favorite;
  
  return favorite?.filter((event) =>
    Object.values(event).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
};

  const searchResult = handleSearch(searchQuery);

  return (
    <SafeAreaView style={{ backgroundColor: colors.white, flex: 1 }}>
      <View style={{ marginHorizontal: 24 }}>
        {/* Favorite Header */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable
              onPress={() => navigation.canGoBack() && navigation.goBack()}
            >
              <Image
                source={icons.back}
                style={{
                  width: 45,
                  height: 45,
                  marginRight: 14,
                }}
              />
            </Pressable>

            <Text
              style={{
                fontSize: 17,
                fontFamily: "Regular-Sen",
                color: colors.primaryTxt,
              }}
            >
              Favourite
            </Text>
          </View>

          <Pressable onPress={() => setShowSearch((prevState) => !prevState)}>
            <Image
              source={icons.resultSearch}
              style={{
                width: 46,
                height: 46,
              }}
            />
          </Pressable>
        </View>

        {showSearch && (
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

        {/* Main Content */}
        <ScrollView
          style={{ marginTop: 24 }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 24,
              paddingBottom: 50,
            }}
          >
            {favorite?.length === 0 && searchResult?.length === 0 && (
              <View
                style={{
                  flex: 1,
                  height: SCREEN_HEIGHT / 2,
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    width: SCREEN_WIDTH - 48,
                    borderWidth: 3,
                    borderColor: colors.primaryTxt,
                    borderStyle: "dashed",
                    padding: 24,
                  }}
                >
                  <Text style={{ fontSize: 18, fontFamily: "Regular-Sen" }}>
                    You have'nt added any items to favorite yet 😌
                  </Text>
                </View>
              </View>
            )}
            {searchQuery && favorite?.length !== 0 && searchResult?.length !== 0 && (
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "flex-end",
                  justifyContent: "space-evenly",
                }}
              >
                {searchResult?.map((item, index) => (
                  <View key={index}>
                    <ItemCard item={item} />
                  </View>
                ))}
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default memo(Favorite);

const styles = StyleSheet.create({});
