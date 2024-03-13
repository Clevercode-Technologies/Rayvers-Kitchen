import {
  Image,
  ImageBackground,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { memo } from "react";
import { images } from "../../../../assets/images";
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  colors,
} from "../../../components/DEFAULTS";
import { icons } from "../../../../assets/icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setUserType } from "../../../Redux/Splice/AppSplice";

enum USER_TYPE {
  CUSTOMER = "Customer",
  CHEF = "Chef",
  DRIVER = "Driver",
}

const RouteSelection = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"rgba(0,0,0,.9)"}
      />
      <ImageBackground
        source={images.routeBg}
        style={{
          width: SCREEN_WIDTH + 1,
          height: SCREEN_HEIGHT,
          marginLeft: -1,
          justifyContent: "flex-start",
          paddingTop: Platform.OS === "ios" ? 80 : 90,
          alignItems: "center",
        }}
        resizeMode="cover"
      >
        <View
          style={{
            width: SCREEN_WIDTH,
            paddingHorizontal: 24,
            marginTop: Platform.OS === "android" ? -40 : 0,
          }}
        >
          <Pressable
            onPress={() => navigation.canGoBack() && navigation.goBack()}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Image source={icons.back} style={{ width: 45, height: 45 }} />

            <Text
              style={{
                fontSize: 30,
                fontFamily: "SemiBold-Sen",
                color: colors.white,
                marginLeft: 18,
              }}
            >
              Route
            </Text>
          </Pressable>
        </View>

        <View style={{ marginTop: 60 }}>
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
              onPress={() => {
                dispatch(setUserType(USER_TYPE.CUSTOMER));
                // @ts-ignore
                navigation.navigate("CustomerLogin");
              }}
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
              onPress={() => {
                dispatch(setUserType(USER_TYPE.CHEF));
                // @ts-ignore
                navigation.navigate("ChefLogin");
              }}
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
              onPress={() => {
                dispatch(setUserType(USER_TYPE.DRIVER));
                // @ts-ignore
                navigation.navigate("DriverLogin");
              }}
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
    </>
  );
};

export default memo(RouteSelection);

const styles = StyleSheet.create({});
