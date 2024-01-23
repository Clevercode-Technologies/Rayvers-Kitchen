import {
  ImageBackground,
  ImageSourcePropType,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { memo } from "react";
import { colors } from "../DEFAULTS";
import { Actionsheet, useDisclose } from "native-base";
import { foodAssign } from "../../DATA";
import DriversAssign from "./DriversAssign";

interface AssignDriversProp {
  item: {
    image: ImageSourcePropType;
    name: string;
    online: boolean;
    id: number;
  };
}

const AssignDrivers: React.FC<AssignDriversProp> = ({ item }) => {
  const { isOpen, onOpen, onClose } = useDisclose();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "88%",
        paddingVertical: 22,
        borderBottomColor: "#F0F4F9",
        borderBottomWidth: 1,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <ImageBackground
          source={item.image}
          style={{
            width: 32,
            height: 32,
            borderRadius: 32 / 2,
            position: "relative",
          }}
        >
          <View
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              backgroundColor: "#05FF00",
              width: 10,
              height: 10,
              borderRadius: 9 / 2,
              borderWidth: 2.5,
              borderColor: colors.white,
            }}
          />
        </ImageBackground>

        <Text
          style={{
            fontFamily: "Regular-Sen",
            fontSize: 16,
            color: "#32343E",
            marginLeft: 16,
          }}
        >
          {item.name}
        </Text>
      </View>

      <Pressable
        onPress={onOpen}
        style={{
          backgroundColor: "#6BB30F",
          width: 82.65,
          height: 30.99,
          borderRadius: 8,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "SemiBold-Sen",
            fontSize: 12,
            color: colors.white,
          }}
        >
          Assign
        </Text>
      </Pressable>

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <ScrollView>
            {foodAssign.map((item, index) => (
              <View key={index}>
                <DriversAssign item={item} />
              </View>
            ))}
          </ScrollView>
        </Actionsheet.Content>
      </Actionsheet>
    </View>
  );
};

export default memo(AssignDrivers);

const styles = StyleSheet.create({});
