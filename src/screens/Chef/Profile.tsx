import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { memo } from "react";
import { icons } from "../../../assets/icons";
import { SCREEN_WIDTH, colors } from "../../components/DEFAULTS";

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        {/* Chef profile Header */}
        <View
          style={{
            backgroundColor: colors.primaryBg,
            height: 271,
            borderBottomEndRadius: 20,
            borderBottomStartRadius: 20,
            paddingTop: 24,
          }}
        >
          {/* Overall Header */}
          <Pressable
            onPress={() => alert("Implement navigation first")}
            style={{
              width: SCREEN_WIDTH,
              paddingHorizontal: 24,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={icons.back}
              style={{
                width: 45,
                height: 45,
              }}
            />

            <Text
              style={{
                fontSize: 17,
                color: colors.white,
                fontFamily: "Regular-Sen",
                marginLeft: 16,
              }}
            >
              My Profile
            </Text>
          </Pressable>

          <View
            style={{ width: SCREEN_WIDTH, marginTop: 24, alignItems: "center" }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                fontFamily: "Regular-Sen",
                color: colors.white,
              }}
            >
              Available Balance
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 40,
                fontFamily: "SemiBold-Sen",
                color: colors.white,
              }}
            >
              ₦500.00
            </Text>

            <Pressable
              style={{
                width: 100,
                height: 37,
                borderRadius: 10,
                borderColor: colors.white,
                borderWidth: 1,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 17,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Regular-Sen",
                  color: colors.white,
                }}
              >
                Withdraw
              </Text>
            </Pressable>
          </View>
        </View>

        {/* Main body */}
        <View style={{ width: SCREEN_WIDTH, alignItems: "center" }}>
          <View
            style={{
              marginTop: 25,
              backgroundColor: "#F6F6F6",
              width: SCREEN_WIDTH - 48,
              borderRadius: 15,
              padding: 15,
            }}
          >
            <Pressable
              onPress={() =>
                alert("Implement navigation to personal Info here...")
              }
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={icons.personProfile}
                  style={{ width: 48, height: 48 }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    color: "#333333",
                    fontSize: 15,
                    fontFamily: "Regular-Sen",
                    marginLeft: 13,
                  }}
                >
                  Personal Info
                </Text>
              </View>

              <Image
                source={icons.chevronRight}
                style={{ width: 30, height: 30 }}
                resizeMode="contain"
              />
            </Pressable>
            <Pressable
              onPress={() => alert("Implement navigation to Settings here...")}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 15,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={icons.settings}
                  style={{ width: 48, height: 48 }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    color: "#333333",
                    fontSize: 15,
                    fontFamily: "Regular-Sen",
                    marginLeft: 13,
                  }}
                >
                  Settings
                </Text>
              </View>

              <Image
                source={icons.chevronRight}
                style={{ width: 30, height: 30 }}
                resizeMode="contain"
              />
            </Pressable>
          </View>

          <View
            style={{
              marginTop: 25,
              backgroundColor: "#F6F6F6",
              width: SCREEN_WIDTH - 48,
              borderRadius: 15,
              padding: 15,
            }}
          >
            <Pressable
              onPress={() => alert("Implement navigation to Withdraw here...")}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={icons.withdraw}
                  style={{ width: 48, height: 48 }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    color: "#333333",
                    fontSize: 15,
                    fontFamily: "Regular-Sen",
                    marginLeft: 13,
                  }}
                >
                  Withdrawal History
                </Text>
              </View>

              <Image
                source={icons.chevronRight}
                style={{ width: 30, height: 30 }}
                resizeMode="contain"
              />
            </Pressable>
            <Pressable
              onPress={() => alert("Implement navigation to Orders here...")}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 15,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={icons.orderHistory}
                  style={{ width: 48, height: 48 }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    color: "#333333",
                    fontSize: 15,
                    fontFamily: "Regular-Sen",
                    marginLeft: 13,
                  }}
                >
                  Number of Orders
                </Text>
              </View>

              <Text
                style={{
                  color: "#9C9BA6",
                  fontSize: 17,
                  fontFamily: "SemiBold-Sen",
                }}
              >
                29K
              </Text>
            </Pressable>
          </View>

          <View
            style={{
              marginTop: 25,
              backgroundColor: "#F6F6F6",
              width: SCREEN_WIDTH - 48,
              borderRadius: 15,
              padding: 15,
            }}
          >
            <Pressable
              onPress={() =>
                alert("Implement navigation to user reviews here...")
              }
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={icons.reviews}
                  style={{ width: 48, height: 48 }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    color: "#333333",
                    fontSize: 15,
                    fontFamily: "Regular-Sen",
                    marginLeft: 13,
                  }}
                >
                  User Reviews
                </Text>
              </View>

              <Image
                source={icons.chevronRight}
                style={{ width: 30, height: 30 }}
                resizeMode="contain"
              />
            </Pressable>
          </View>

          <View
            style={{
              marginTop: 25,
              backgroundColor: "#F6F6F6",
              width: SCREEN_WIDTH - 48,
              borderRadius: 15,
              padding: 15,
            }}
          >
            <Pressable
              onPress={() => alert("Implement navigation to logout here...")}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={icons.logout}
                  style={{ width: 48, height: 48 }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    color: "#333333",
                    fontSize: 15,
                    fontFamily: "Regular-Sen",
                    marginLeft: 13,
                  }}
                >
                  Log Out
                </Text>
              </View>

              <Image
                source={icons.chevronRight}
                style={{ width: 30, height: 30 }}
                resizeMode="contain"
              />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default memo(Profile);

const styles = StyleSheet.create({});
