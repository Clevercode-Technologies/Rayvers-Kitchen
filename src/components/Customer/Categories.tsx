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
import { useDispatch } from "react-redux";
import { setCategoryQuery } from "../../Redux/Splice/AppSplice";
import { generateRandomNumber } from "../../utils/idGenerator";

interface CategoriesProp {
  data: Array<{
    id: number;
    name: string;
    image: string;
  }> | null;
}

const Categories: React.FC<CategoriesProp> = ({ data }) => {
  const [index, setIndex] = useState<number>(6);

  const dispatch = useDispatch();

  return (
    <>
      <ScrollView horizontal style={{}}>
        {/* All Categories */}
        <Pressable
          onPress={() => {
            dispatch(setCategoryQuery("default"));
            setIndex(6);
          }}
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
            backgroundColor: index === 6 ? "#FFD27C" : colors.white,
            marginRight: 13,
            marginVertical: 25,
            maxWidth: 175,
            minWidth: 135,
          }}
        >
          <View
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              backgroundColor: colors.offWhite,
              marginRight: 10,
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
            All
          </Text>
        </Pressable>
        {data?.map((item, _) => (
          <Pressable
            key={`${_}-${generateRandomNumber(4)}`}
            onPress={() => {
              console.log(_);
              setIndex(_);
              dispatch(setCategoryQuery(item?.name));
            }}
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
              backgroundColor: index === _ ? "#FFD27C" : colors.white,
              marginRight: 13,
              marginVertical: 25,
              maxWidth: 175,
              minWidth: 135,
            }}
          >
            <Image
              source={{ uri: item?.image }}
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
              {item?.name}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </>
  );
};

export default Categories;

const styles = StyleSheet.create({});
