import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { Dispatch, SetStateAction, useState } from "react";
import { colors } from "../DEFAULTS";

interface RestCatProps {
    item: {
        category: string;
        id: number;
    },
    menu: string;
    setMenu: Dispatch<SetStateAction<string>>
}

const RestCat: React.FC<RestCatProps> = ({ item, menu, setMenu }) => {
  
  return (
    <Pressable
      onPress={() => setMenu(item.category)}
      style={{
        paddingHorizontal: 10,
        height: 48,
        borderWidth: 2,
        borderColor:
          menu === item.category ? colors.white : "#EDEDED",
        margin: 5,
        borderRadius: 33,
        backgroundColor:
          menu === item.category ? colors.primaryBg : colors.white,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color:
            menu === item.category
              ? colors.white
              : colors.abstractTxt,
          fontFamily: "Regular-Sen",
          fontSize: 16,
        }}
      >
        {item.category}
      </Text>
    </Pressable>
  );
};

export default RestCat;

const styles = StyleSheet.create({});
