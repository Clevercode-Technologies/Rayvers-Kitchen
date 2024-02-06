import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { icons } from "../../../../assets/icons";
import { colors } from "../../../components/DEFAULTS";
import { images } from "../../../../assets/images";
import { useNavigation } from "@react-navigation/native";

const PersonalInfo = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ backgroundColor: colors.white, flex: 1 }}>
      <View style={{ marginHorizontal: 24, flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header - Profile Info */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Pressable
              onPress={() => navigation.canGoBack() && navigation.goBack()}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Image
                source={icons.back}
                style={{ width: 45, height: 45 }}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: colors.tertiaryTxt,
                  fontSize: 17,
                  fontFamily: "Regular-Sen",
                  marginLeft: 16,
                }}
              >
                Profile
              </Text>
            </Pressable>

            <Pressable 
            // @ts-ignore
            onPress={() => navigation.navigate('EditProfile')}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Regular-Sen",
                  color: colors.primaryBg,
                  textDecorationLine: "underline",
                }}
              >
                EDIT
              </Text>
            </Pressable>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 24,
            }}
          >
            <Image
              source={images.myProfile}
              style={{
                width: 102.95,
                height: 102.95,
              }}
              resizeMode="contain"
            />

            <View
              style={{
                marginLeft: 23,
              }}
            >
              <Text
                style={{
                  color: colors.primaryTxt,
                  fontSize: 20,
                  fontFamily: "SemiBold-Sen",
                  marginBottom: 8,
                }}
              >
                Vishal Khadok
              </Text>
              <Text
                style={{
                  color: "#A0A5BA",
                  fontSize: 14,
                  fontFamily: "Regular-Sen",
                }}
              >
                I love fast food
              </Text>
            </View>
          </View>

          <View
            style={{
              padding: 20,
              backgroundColor: "#F6F8FA",
              borderRadius: 16,
              marginTop: 30,
            }}
          >
            <Pressable style={{ flexDirection: "row", marginBottom: 16 }}>
              <Image
                source={icons.personProfile}
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 14,
                }}
              />

              <View>
                <Text
                  style={{
                    fontSize: 14,
                    color: colors.primaryTxt,
                    fontFamily: "Regular-Sen",
                    textTransform: "uppercase",
                  }}
                >
                  Full Name
                </Text>
                <Text
                  style={{
                    color: "#6B6E82",
                    fontSize: 14,
                    fontFamily: "Regular-Sen",
                  }}
                >
                  Vishal Khadok
                </Text>
              </View>
            </Pressable>

            <Pressable style={{ flexDirection: "row", marginBottom: 16 }}>
              <Image
                source={icons.mailIconProfile}
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 14,
                }}
              />

              <View>
                <Text
                  style={{
                    fontSize: 14,
                    color: colors.primaryTxt,
                    fontFamily: "Regular-Sen",
                    textTransform: "uppercase",
                  }}
                >
                  Email
                </Text>
                <Text
                  style={{
                    color: "#6B6E82",
                    fontSize: 14,
                    fontFamily: "Regular-Sen",
                  }}
                >
                  hello@halallab.co
                </Text>
              </View>
            </Pressable>

            <Pressable style={{ flexDirection: "row", marginBottom: 16 }}>
              <Image
                source={icons.phoneIconProfile}
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 14,
                }}
              />

              <View>
                <Text
                  style={{
                    fontSize: 14,
                    color: colors.primaryTxt,
                    fontFamily: "Regular-Sen",
                    textTransform: "uppercase",
                  }}
                >
                  Phone Number
                </Text>
                <Text
                  style={{
                    color: "#6B6E82",
                    fontSize: 14,
                    fontFamily: "Regular-Sen",
                  }}
                >
                  408-841-0926
                </Text>
              </View>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default PersonalInfo;

const styles = StyleSheet.create({});
