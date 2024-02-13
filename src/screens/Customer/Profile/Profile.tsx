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
import { useDispatch } from "react-redux";
import { setAccessToken } from "../../../Redux/Splice/AppSplice";

const Profile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{ backgroundColor: colors.white, flex: 1 }}>
      <View style={{ marginHorizontal: 24 }}>
        <ScrollView style={{ marginBottom: 30 }}>
          {/* Profile Header */}
          {/* <Text
          style={{
            color: colors.tertiaryTxt,
            fontSize: 17,
            fontFamily: "Regular-Sen",
            textAlign: 'center',
            marginTop: 10,         
          }}
        >
          Profile
        </Text> */}

          {/* Name and About */}
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

          {/* Badge 1 */}
          <View
            style={{
              backgroundColor: "#F6F8FA",
              padding: 20,
              marginTop: 30,
              borderRadius: 16,
            }}
          >
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 16,
              }}
              onPress={() => 
                // @ts-ignore
                navigation.navigate("PersonalInfo")}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={icons.personProfile}
                  style={{
                    width: 40,
                    height: 40,
                  }}
                />
                <Text style={{ marginLeft: 14 }}>Personal Info</Text>
              </View>

              <Image
                source={icons.chevronRight}
                style={{ width: 24, height: 24 }}
                resizeMode="contain"
              />
            </Pressable>
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              onPress={() => 
              // @ts-ignore
              navigation.navigate("Address")}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={icons.mapProfile}
                  style={{
                    width: 40,
                    height: 40,
                  }}
                />
                <Text style={{ marginLeft: 14 }}>Address</Text>
              </View>

              <Image
                source={icons.chevronRight}
                style={{ width: 24, height: 24 }}
                resizeMode="contain"
              />
            </Pressable>
          </View>

          {/* Badge 2 */}
          <View
            style={{
              backgroundColor: "#F6F8FA",
              padding: 20,
              marginTop: 30,
              borderRadius: 16,
              // marginTop:
            }}
          >
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 16,
              }}
              onPress={() => // @ts-ignore
              navigation.navigate("CartScreen")}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={icons.cartProfile}
                  style={{
                    width: 40,
                    height: 40,
                  }}
                />
                <Text style={{ marginLeft: 14 }}>Cart</Text>
              </View>

              <Image
                source={icons.chevronRight}
                style={{ width: 24, height: 24 }}
                resizeMode="contain"
              />
            </Pressable>

            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 16,
              }}
              onPress={() => 
              // @ts-ignore 
              navigation.navigate("Favorite")}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={icons.favoriteProfile}
                  style={{
                    width: 40,
                    height: 40,
                  }}
                />
                <Text style={{ marginLeft: 14 }}>Favourite</Text>
              </View>

              <Image
                source={icons.chevronRight}
                style={{ width: 24, height: 24 }}
                resizeMode="contain"
              />
            </Pressable>

            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 16,
              }}
              onPress={() => 
                // @ts-ignore
                navigation.navigate('Notification')}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={icons.notificationProfile}
                  style={{
                    width: 40,
                    height: 40,
                  }}
                />
                <Text style={{ marginLeft: 14 }}>Notification</Text>
              </View>

              <Image
                source={icons.chevronRight}
                style={{ width: 24, height: 24 }}
                resizeMode="contain"
              />
            </Pressable>

            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 16,
              }}
              onPress={() => 
              // @ts-ignore
              navigation.navigate('Payment')}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={icons.paymentProfile}
                  style={{
                    width: 40,
                    height: 40,
                  }}
                />
                <Text style={{ marginLeft: 14 }}>Payment Methods</Text>
              </View>

              <Image
                source={icons.chevronRight}
                style={{ width: 24, height: 24 }}
                resizeMode="contain"
              />
            </Pressable>
          </View>

          {/* Badge 3 */}
          <View
            style={{
              backgroundColor: "#F6F8FA",
              padding: 20,
              marginTop: 30,
              borderRadius: 16,
            }}
          >
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              onPress={() => dispatch(setAccessToken(null))}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={icons.logoutProfile}
                  style={{
                    width: 40,
                    height: 40,
                  }}
                />
                <Text style={{ marginLeft: 14 }}>Log Out</Text>
              </View>

              <Image
                source={icons.chevronRight}
                style={{ width: 24, height: 24 }}
                resizeMode="contain"
              />
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
