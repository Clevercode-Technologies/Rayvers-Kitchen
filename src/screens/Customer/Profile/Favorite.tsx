import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { icons } from "../../../../assets/icons";
import { colors } from "../../../components/DEFAULTS";
import { favorite } from "../../../DATA";
import { ItemCard } from "../../../components";
import { useNavigation } from "@react-navigation/native";

const Favorite = () => {
  // Using the plus icon implement favorite such that when the icon is clicked it is added to favorite and then the heart icons shows, if the heart icon is clicked then the item is removed from the favorite list.
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ backgroundColor: colors.white, flex: 1 }}>
      <View style={{ marginHorizontal: 24 }}>
        {/* Favorite Header */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable onPress={() => navigation.canGoBack() && navigation.goBack()}>
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

          <Pressable onPress={() => alert("Implement search functionality")}>
            <Image
              source={icons.resultSearch}
              style={{
                width: 46,
                height: 46,
              }}
            />
          </Pressable>
        </View>

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
            {favorite.map((item, index) => (
              <View key={index}>
                <ItemCard item={item} />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Favorite;

const styles = StyleSheet.create({});
