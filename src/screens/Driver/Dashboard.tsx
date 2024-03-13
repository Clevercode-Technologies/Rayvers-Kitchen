import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { images } from "../../../assets/images";
import { icons } from "../../../assets/icons";
import { SCREEN_WIDTH, colors } from "../../components/DEFAULTS";
import { ChefChart, RunningOrdersCard } from "../../components";
import { Actionsheet, useDisclose } from "native-base";

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const {
    isOpen: isOpenOrder,
    onOpen: onOpenOrder,
    onClose: onCloseOrder,
  } = useDisclose();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F7F8F9" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar barStyle={"dark-content"} backgroundColor={"#ffffff"} />
        {/* Header for Driver Dashboard */}
        <View style={{ paddingHorizontal: 24, marginBottom: 24 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Pressable>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "SemiBold-Sen",
                  color: colors.primaryBg,
                  textTransform: "uppercase",
                }}
              >
                Location
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  style={{
                    color: "#676767",
                    fontSize: 14,
                    fontFamily: "Regular-Sen",
                  }}
                >
                  Halal Lab office
                </Text>
                <Image
                  source={icons.dropdown}
                  style={{
                    marginLeft: 10,
                  }}
                />
              </View>
            </Pressable>

            <Image
              source={images.myProfile}
              style={{
                width: 45,
                height: 45,
              }}
            />
          </View>
        </View>

        {/* Main Content -  Successful and Pending Runs */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 24,
          }}
        >
          <Pressable
            onPress={onOpen}
            style={{
              borderRadius: 20,
              backgroundColor: colors.white,
              width: SCREEN_WIDTH / 2 - 41,
              height: 115,
              justifyContent: "center",
              alignItems: "flex-start",
              padding: 16,
            }}
          >
            <Text
              style={{
                fontSize: 52,
                fontFamily: "SemiBold-Sen",
                color: colors.primaryTxt,
              }}
            >
              20
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontFamily: "SemiBold-Sen",
                color: "#838799",
                textTransform: "uppercase",
              }}
            >
              Running Orders
            </Text>
          </Pressable>
          <Pressable
            onPress={onOpenOrder}
            style={{
              borderRadius: 20,
              backgroundColor: colors.white,
              width: SCREEN_WIDTH / 2 - 41,
              height: 115,
              justifyContent: "center",
              alignItems: "flex-start",
              padding: 16,
            }}
          >
            <Text
              style={{
                fontSize: 52,
                fontFamily: "SemiBold-Sen",
                color: colors.primaryTxt,
              }}
            >
              05
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontFamily: "SemiBold-Sen",
                color: "#838799",
                textTransform: "uppercase",
              }}
            >
              Order Request
            </Text>
          </Pressable>
        </View>

        {/* Analytical Results */}
        <ChefChart />

        {/* Reviews */}
        <View
          style={{
            height: 95,
            backgroundColor: colors.white,
            marginHorizontal: 24,
            marginTop: 24,
            borderRadius: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 16,
            }}
          >
            <Text
              style={{
                color: colors.primaryTxt,
                fontSize: 14,
                fontFamily: "Regular-Sen",
              }}
            >
              Reviews
            </Text>
            <Pressable onPress={() => alert("Get the crappy screen done")}>
              <Text
                style={{
                  color: colors.primaryBg,
                  fontSize: 14,
                  fontFamily: "Regular-Sen",
                  textDecorationLine: "underline",
                }}
              >
                See All Reviews
              </Text>
            </Pressable>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ flexDirection: "row", marginHorizontal: 24 }}>
              <Image
                source={icons.starReview}
                style={{
                  width: 26,
                  height: 26,
                }}
                resizeMode="contain"
              />

              <Text
                style={{
                  color: colors.primaryBg,
                  fontSize: 22,
                  fontFamily: "SemiBold-Sen",
                  marginLeft: 3,
                }}
              >
                4.9
              </Text>
            </View>

            <Text
              style={{
                fontSize: 14,
                fontFamily: "Regular-Sen",
                color: colors.primaryTxt,
                marginLeft: -17,
              }}
            >
              Total 20 Reviews
            </Text>
          </View>
        </View>

        <View style={{ height: 100 }} />

        {/* Running Order */}
        <View>
          <Actionsheet isOpen={isOpen} onClose={onClose}>
            <Actionsheet.Content style={{}}>
              <View style={{ width: "100%", paddingHorizontal: 24 }}>
                <Text
                  style={{
                    color: "#181C2E",
                    fontSize: 17,
                    fontFamily: "Regular-Sen",
                  }}
                >
                  20 Running Orders
                </Text>

                <RunningOrdersCard type={"orders"} />
                <RunningOrdersCard type={"orders"} />
                <RunningOrdersCard type={"orders"} />
                <RunningOrdersCard type={"orders"} />
              </View>
            </Actionsheet.Content>
          </Actionsheet>
        </View>
        {/* Running Order */}
        <View>
          <Actionsheet isOpen={isOpenOrder} onClose={onCloseOrder}>
            <Actionsheet.Content style={{}}>
              <View style={{ width: "100%", paddingHorizontal: 24 }}>
                <Text
                  style={{
                    color: "#181C2E",
                    fontSize: 17,
                    fontFamily: "Regular-Sen",
                  }}
                >
                  05 Order Request
                </Text>

                <RunningOrdersCard type={"requests"} />
                <RunningOrdersCard type={"requests"} />
                <RunningOrdersCard type={"requests"} />
                <RunningOrdersCard type={"requests"} />
              </View>
            </Actionsheet.Content>
          </Actionsheet>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
