import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { images } from "../../../assets/images";
import { SCREEN_HEIGHT, SCREEN_WIDTH, colors } from "../../components/DEFAULTS";
import { icons } from "../../../assets/icons";

const RouteSelection = () => {
  return (
    <ImageBackground
      source={images.routeBg}
      style={{
        width: SCREEN_WIDTH + 1,
        height: SCREEN_HEIGHT,
        marginLeft: -1,
        justifyContent: "center",
        alignItems: "center",
      }}
      resizeMode="cover"
    >
      <View>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "SemiBold-Sen",
            color: colors.white,
            textAlign: "center",
          }}
        >
          Login
        </Text>

        <View
          style={{
            height: 435.75,
            backgroundColor: colors.white,
            borderRadius: 50,
            marginTop: 36,
            width: SCREEN_WIDTH - 70,
            padding: 30,
            justifyContent: "space-between",
          }}
        >
          <Pressable
          onPress={() => alert('Switch to customer')}
            style={{
              backgroundColor: "#181C2E",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              height: 92,
              padding: 18,
              borderRadius: 21,
            }}
          >
            <Image
              source={icons.customer}
              style={{
                width: 56,
                height: 56,
                borderRadius: 56 / 2,
              }}
            />

            <Text
              style={{
                fontSize: 15,
                color: colors.white,
                fontFamily: "SemiBold-Sen",
              }}
            >
              Customer
            </Text>

            <Image
              source={icons.check}
              style={{
                width: 19.69,
                height: 19.69,
              }}
            />
          </Pressable>
          <Pressable
          onPress={() => alert('Switch to Chef')}
            style={{
              backgroundColor: "#181C2E",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              height: 92,
              padding: 18,
              borderRadius: 21,
            }}
          >
            <Image
              source={icons.chef}
              style={{
                width: 56,
                height: 56,
                borderRadius: 56 / 2,
              }}
            />

            <Text
              style={{
                fontSize: 15,
                color: colors.white,
                fontFamily: "SemiBold-Sen",
              }}
            >
              Chef
            </Text>

            <Image
              source={icons.check}
              style={{
                width: 19.69,
                height: 19.69,
              }}
            />
          </Pressable>
          <Pressable
          onPress={() => alert('Switch to Logistics')}
            style={{
              backgroundColor: "#181C2E",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              height: 92,
              padding: 18,
              borderRadius: 21,
            }}
          >
            <Image
              source={icons.logistics}
              style={{
                width: 56,
                height: 56,
                borderRadius: 56 / 2,
              }}
            />

            <Text
              style={{
                fontSize: 15,
                color: colors.white,
                fontFamily: "SemiBold-Sen",
              }}
            >
              Logistics
            </Text>

            <Image
              source={icons.check}
              style={{
                width: 19.69,
                height: 19.69,
              }}
            />
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

export default RouteSelection;

const styles = StyleSheet.create({});
