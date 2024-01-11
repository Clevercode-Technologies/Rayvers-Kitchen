import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { images } from "../../../assets/images";
import { colors } from "../DEFAULTS";

const categoryData = [
  {
    name: "All",
    preview: "",
    id: 1,
  },
  {
    name: "Rice",
    preview: images.foodCat1,
    id: 2,
  },
  {
    name: "Pasta",
    preview: images.foodCat2,
    id: 3,
  },
  {
    name: "Swallow Food",
    preview: images.foodCat3,
    id: 4,
  },
  {
    name: "Pepper Soup",
    preview: images.foodCat4,
    id: 5,
  },
];

const Categories = () => {
  const [index, setIndex] = useState<number>(0);

  return (
    <>
      <ScrollView horizontal style={{}}>
        <Pressable
          onPress={() => setIndex(0)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 1000,
            elevation: 1,
            shadowColor: "#BABDCF",
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.19,
            shadowRadius: 7.84,
            backgroundColor: index === 0 ? "#FFD27C" : colors.white,
            marginRight: 13,
            marginVertical: 25,
            width: 60,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: colors.primaryTxt,
              fontSize: 14,
              fontWeight: "700",
              fontFamily: "Bold-Sen",
              fontStyle: "normal",
            }}
          >
            {categoryData[0].name}
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setIndex(1)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 8,
            borderRadius: 50,
            elevation: 1,
            shadowColor: "#BABDCF",
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.19,
            shadowRadius: 7.84,
            backgroundColor: index === 1 ? "#FFD27C" : colors.white,
            marginRight: 13,
            marginVertical: 25,
            maxWidth: 135,
          }}
        >
          <Image
            source={categoryData[1].preview}
            resizeMode="cover"
            style={{
              width: 44,
              height: 44,
              marginRight: 12,
              borderRadius: 44 / 2,
            }}
          />
          <Text
            style={{
              color: colors.primaryTxt,
              fontSize: 14,
              fontWeight: "700",
              fontFamily: "Bold-Sen",
              fontStyle: "normal",
            }}
          >
            {categoryData[1].name}
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setIndex(2)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 8,
            borderRadius: 50,
            elevation: 1,
            shadowColor: "#BABDCF",
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.19,
            shadowRadius: 7.84,
            backgroundColor: index === 2 ? "#FFD27C" : colors.white,
            marginRight: 13,
            marginVertical: 25,
            maxWidth: 135,
          }}
        >
          <Image
            source={categoryData[2].preview}
            resizeMode="cover"
            style={{
              width: 44,
              height: 44,
              marginRight: 12,
              borderRadius: 44 / 2,
            }}
          />
          <Text
            style={{
              color: colors.primaryTxt,
              fontSize: 14,
              fontWeight: "700",
              fontFamily: "Bold-Sen",
              fontStyle: "normal",
            }}
          >
            {categoryData[2].name}
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setIndex(3)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 8,
            borderRadius: 50,
            elevation: 1,
            shadowColor: "#BABDCF",
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.19,
            shadowRadius: 7.84,
            backgroundColor: index === 3 ? "#FFD27C" : colors.white,
            marginRight: 13,
            marginVertical: 25,
            maxWidth: 175,
          }}
        >
          <Image
            source={categoryData[3].preview}
            resizeMode="cover"
            style={{
              width: 44,
              height: 44,
              marginRight: 12,
              borderRadius: 44 / 2,
            }}
          />
          <Text
            style={{
              color: colors.primaryTxt,
              fontSize: 14,
              fontWeight: "700",
              fontFamily: "Bold-Sen",
              fontStyle: "normal",
            }}
          >
            {categoryData[3].name}
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setIndex(4)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 8,
            borderRadius: 50,
            elevation: 1,
            shadowColor: "#BABDCF",
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.19,
            shadowRadius: 7.84,
            backgroundColor: index === 4 ? "#FFD27C" : colors.white,
            marginRight: 13,
            marginVertical: 25,
            maxWidth: 165,
          }}
        >
          <Image
            source={categoryData[4].preview}
            resizeMode="cover"
            style={{
              width: 44,
              height: 44,
              marginRight: 12,
              borderRadius: 44 / 2,
            }}
          />
          <Text
            style={{
              color: colors.primaryTxt,
              fontSize: 14,
              fontWeight: "700",
              fontFamily: "Bold-Sen",
              fontStyle: "normal",
            }}
          >
            {categoryData[4].name}
          </Text>
        </Pressable>
      </ScrollView>
    </>
  );
};

export default Categories;

const styles = StyleSheet.create({});
