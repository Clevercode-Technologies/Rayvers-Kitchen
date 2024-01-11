import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { SCREEN_WIDTH, colors } from "../../../components/DEFAULTS";
import { icons } from "../../../../assets/icons";
import { TextInput } from "react-native";

enum LABEL {
  HOME = "Home",
  WORK = "Work",
  OTHER = "Other",
}

const AddNewAddress = () => {
  const [address, setAddress] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [postCode, setPostCode] = useState<string>("");
  const [aptNo, setAptNo] = useState<number>(0);
  const [label, setLabel] = useState<LABEL>(LABEL.HOME);

  return (
    <SafeAreaView
      style={
        {
          // position: 'relative',
        }
      }
    >
      {/* MapView Header */}
      <View style={{ position: "relative" }}>
        <Pressable onPress={() => alert("Implement navigation to go back")}>
          <Image
            source={icons.backArrDark}
            style={{
              width: 45,
              height: 45,
              position: "absolute",
              zIndex: 1,
              bottom: -70,
              left: 24,
            }}
          />
        </Pressable>
        <View
          style={{
            height: 295,
            backgroundColor: "#D0D9E1",
            width: SCREEN_WIDTH,
            zIndex: -1,
          }}
        >
          {/* Map View and address selection would go here */}
        </View>
      </View>

      <ScrollView style={{  }}>
        <View
          style={{
            marginHorizontal: 24,
            justifyContent: "flex-start",
          }}
        >
          {/* TextInput Sections - Address */}
          <View style={{ marginTop: 30 }}>
            <Text
              style={{
                fontSize: 14,
                color: colors.primaryTxt,
                fontFamily: "Regular-Sen",
                textTransform: "uppercase",
              }}
            >
              Address
            </Text>
            <View style={{ position: "relative" }}>
              <TextInput
                style={{
                  borderRadius: 10,
                  height: 50,
                  width: "100%",
                  color: "#6B6E82",
                  fontSize: 12,
                  fontFamily: "Regular-Sen",
                  backgroundColor: "#F0F5FA",
                  marginTop: 8,
                  paddingVertical: 15,
                  paddingLeft: 46,
                }}
                onChangeText={(text) => setAddress(text)}
                placeholder="3235 Royal Ln. mesa, new jersy 34567"
                placeholderTextColor={"#6B6E82"}
              />

              <Image
                source={icons.location}
                style={{
                  width: 34,
                  height: 30,
                  position: "absolute",
                  top: 18,
                  left: 5,
                }}
              />
            </View>
          </View>

          {/* Input Fields */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 24,
            }}
          >
            <View style={{ width: "45%" }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Regular-Sen",
                  color: colors.primaryTxt,
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                street
              </Text>
              <TextInput
                placeholder="hason nagar"
                placeholderTextColor={"#6B6E82"}
                style={{
                  padding: 18.5,
                  backgroundColor: "#F0F5FA",
                  height: 50,
                  borderRadius: 10,
                }}
                onChangeText={(text) => setStreet(text)}
              />
            </View>
            <View style={{ width: "45%" }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Regular-Sen",
                  color: colors.primaryTxt,
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                Post code
              </Text>
              <TextInput
                placeholder="34567"
                placeholderTextColor={"#6B6E82"}
                onChangeText={(text) => setPostCode(text)}
                style={{
                  padding: 18.5,
                  backgroundColor: "#F0F5FA",
                  height: 50,
                  borderRadius: 10,
                }}
              />
            </View>
          </View>

          {/* Apartment TextInput */}
          <View style={{ marginTop: 30 }}>
            <Text
              style={{
                fontSize: 14,
                color: colors.primaryTxt,
                fontFamily: "Regular-Sen",
                textTransform: "uppercase",
              }}
            >
              apartment
            </Text>
            <View style={{}}>
              <TextInput
                style={{
                  borderRadius: 10,
                  height: 50,
                  width: "100%",
                  color: "#6B6E82",
                  fontSize: 12,
                  fontFamily: "Regular-Sen",
                  backgroundColor: "#F0F5FA",
                  marginTop: 8,
                  padding: 18.5,
                }}
                placeholder="345"
                onChangeText={(number) => setAptNo(Number(number))}
                placeholderTextColor={"#6B6E82"}
              />
            </View>
          </View>

          {/* Label */}
          <View style={{ marginTop: 24 }}>
            <Text
              style={{
                color: colors.primaryTxt,
                fontSize: 14,
                fontFamily: "Regular-Sen",
                textTransform: "uppercase",
              }}
            >
              Label as
            </Text>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 12,
              }}
            >
              <Pressable
                onPress={() => setLabel(LABEL.HOME)}
                style={{
                  width: 94,
                  height: 45,
                  backgroundColor:
                    label === "Home" ? colors.primaryBg : "#F0F5FA",
                  borderRadius: 22.5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Regular-Sen",
                    fontSize: 14,
                    color: label === "Home" ? colors.white : colors.primaryTxt,
                  }}
                >
                  Home
                </Text>
              </Pressable>
              <Pressable
                onPress={() => setLabel(LABEL.WORK)}
                style={{
                  width: 94,
                  height: 45,
                  backgroundColor:
                    label === "Work" ? colors.primaryBg : "#F0F5FA",
                  borderRadius: 22.5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Regular-Sen",
                    fontSize: 14,
                    color: label === "Work" ? colors.white : colors.primaryTxt,
                  }}
                >
                  Work
                </Text>
              </Pressable>
              <Pressable
                onPress={() => setLabel(LABEL.OTHER)}
                style={{
                  width: 94,
                  height: 45,
                  backgroundColor:
                    label === "Other" ? colors.primaryBg : "#F0F5FA",
                  borderRadius: 22.5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Regular-Sen",
                    fontSize: 14,
                    color: label === "Other" ? colors.white : colors.primaryTxt,
                  }}
                >
                  Other
                </Text>
              </Pressable>
            </View>
          </View>

          {/* Save btn */}
          <Pressable
          onPress={() => alert('Implement Saving the user\'s location to database')}
            style={{
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 12,
              backgroundColor: colors.primaryBg,
              height: 62,
              marginTop: 32,
            }}
          >
            <Text
              style={{
                fontFamily: "SemiBold-Sen",
                fontSize: 14,
                color: colors.white,
                textTransform: "uppercase",
              }}
            >
              Save location
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddNewAddress;

const styles = StyleSheet.create({});
