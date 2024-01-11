import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { icons } from "../../../../assets/icons";
import { SCREEN_HEIGHT, colors } from "../../../components/DEFAULTS";

const Address = () => {
  return (
    <SafeAreaView style={{ marginHorizontal: 24 }}>
      {/* First Division */}
      <View style={{ height: SCREEN_HEIGHT / 2, width: "100%" }}>
        {/* Address Header */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={icons.back}
            style={{
              width: 45,
              height: 45,
              marginRight: 16,
            }}
          />
          <Text
            style={{
              color: colors.primaryTxt,
              fontSize: 17,
              fontFamily: "Regular-Sen",
            }}
          >
            My Address
          </Text>
        </View>

        {/* Addresses Section */}

        {/* Addresses Section one */}
        <View
          style={{
            backgroundColor: "#F0F5FA",
            height: 101,
            borderRadius: 16,
            padding: 16,
            flexDirection: "row",
            alignItems: "flex-start",
            marginTop: 24,
          }}
        >
          <Image
            source={icons.homeIcon}
            style={{
              width: 48,
              height: 48,
            }}
          />

          <View style={{ width: "80%", marginLeft: 14 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Regular-Sen",
                  color: colors.primaryTxt,
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                Home
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Pressable
                  onPress={() => alert("Implement Edit Address Route")}
                >
                  <Image
                    source={icons.editIcon}
                    style={{
                      width: 15.09,
                      height: 15.09,
                    }}
                    resizeMode="contain"
                  />
                </Pressable>
                {/* Implement address to be saved to database and cached locally for faster load times - CRUD flows in address can also be done through the same process */}
                <Pressable onPress={() => alert("Delete Addresses from here")}>
                  <Image
                    source={icons.wasteBin}
                    style={{
                      width: 14.11,
                      height: 15.68,
                      marginLeft: 21,
                    }}
                  />
                </Pressable>
              </View>
            </View>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Regular-Sen",
                color: colors.grayText,
              }}
            >
              2464 Royal Ln. Mesa, New Jersey 45463
            </Text>
          </View>
        </View>
        {/* Addresses Section one */}
        <View
          style={{
            backgroundColor: "#F0F5FA",
            height: 101,
            borderRadius: 16,
            padding: 16,
            flexDirection: "row",
            alignItems: "flex-start",
            marginTop: 24,
          }}
        >
          <Image
            source={icons.officeIcon}
            style={{
              width: 48,
              height: 48,
            }}
          />

          <View style={{ width: "80%", marginLeft: 14 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Regular-Sen",
                  color: colors.primaryTxt,
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                work
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Pressable
                  onPress={() => alert("Implement Edit Address Route")}
                >
                  <Image
                    source={icons.editIcon}
                    style={{
                      width: 15.09,
                      height: 15.09,
                    }}
                    resizeMode="contain"
                  />
                </Pressable>
                {/* Implement address to be saved to database and cached locally for faster load times - CRUD flows in address can also be done through the same process */}
                <Pressable onPress={() => alert("Delete Addresses from here")}>
                  <Image
                    source={icons.wasteBin}
                    style={{
                      width: 14.11,
                      height: 15.68,
                      marginLeft: 21,
                    }}
                  />
                </Pressable>
              </View>
            </View>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Regular-Sen",
                color: colors.grayText,
              }}
            >
              3891 Ranch view Dr. Richardson, California 62639
            </Text>
          </View>
        </View>
      </View>

      {/* Second Division - Add Btn */}
      <View
        style={{
          width: "100%",
          height: SCREEN_HEIGHT / 2 - 100,
          justifyContent: "flex-end",
        }}
      >
        <Pressable
        onPress={() => alert('Implement function for adding addresses')}
          style={{
            height: 62,
            borderRadius: 12,
            width: "100%",
            backgroundColor: colors.primaryBg,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: colors.white,
              textTransform: "uppercase",
              fontFamily: "SemiBold-Sen",
            }}
          >
            Add new address
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Address;

const styles = StyleSheet.create({});
