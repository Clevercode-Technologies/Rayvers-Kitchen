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
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import { AddressTypes } from "../../../../type";
import { deleteAddress } from "../../../Redux/Splice/AppSplice";

const Address = () => {
  const navigation = useNavigation();

  const address: AddressTypes | null = useSelector((state: RootState) => state.data.address);
  console.log('address: ', address);

  const dispatch = useDispatch();

  enum LABEL {
    HOME = "Home",
    WORK = "Work",
    OTHER = "OTHER",
  }

  return (
    <SafeAreaView style={{ backgroundColor: colors.white, flex: 1 }}>
      <View style={{ marginHorizontal: 24 }}>
        {/* First Division */}
        <View style={{ height: SCREEN_HEIGHT / 2, width: "100%" }}>
          {/* Address Header */}
          <Pressable
            onPress={() => navigation.canGoBack() && navigation.goBack()}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
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
          </Pressable>

          {/* Addresses Section */}

          {/* Addresses Section one */}
          {address !== null ? (
            <View>
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
               {address !== null && address?.addressType === LABEL.WORK ? (
                 <Image
                 source={icons.officeIcon}
                 style={{
                   width: 48,
                   height: 48,
                 }}
               />
               ) : address !== null && address?.addressType === LABEL.HOME ? (
                 <Image
                  source={icons.homeIcon}
                  style={{
                    width: 48,
                    height: 48,
                  }}
                />
               ) : null}

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
                      {address !== null && address?.addressType === LABEL.HOME ? 'Home' : address !== null && address?.addressType === LABEL.WORK ? "Work" : ''}
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                      <Pressable
                        onPress={() =>
                          // @ts-ignore
                          navigation.navigate("AddNewAddress", { navType: 'Edit' })
                        }
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
                      <Pressable
                        onPress={() => dispatch(deleteAddress())}
                      >
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
                    {address !== null && address.address}
                  </Text>
                </View>
              </View>
            </View>
          ) : (
            <View>
              {/* Loading Screen */}
              <View
                style={{
                  borderColor: colors.primaryTxt,
                  borderWidth: 3,
                  borderStyle: "dashed",
                  borderRadius: 10,
                  padding: 24,
                  marginTop: 48,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Regular-Sen",
                    fontSize: 16,
                    color: colors.primaryTxt,
                  }}
                >
                  You have'nt added your address...
                </Text>
              </View>
            </View>
          )}
        </View>

        {/* Second Division - Add Btn */}
        <View
          style={{
            width: "100%",
            height: SCREEN_HEIGHT / 2 - 150,
            justifyContent: "flex-end",
          }}
        >
          <Pressable
            onPress={() =>
              // @ts-ignore
              address !== null ? navigation.navigate("AddNewAddress", { navType: 'Edit' }) : navigation.navigate("AddNewAddress") 
            }
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
              {address === null ? "Add Address" : "Edit Address"}
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Address;

const styles = StyleSheet.create({});
