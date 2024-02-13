import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { icons } from "../../../assets/icons";
import { colors } from "../DEFAULTS";
import { useNavigation } from "@react-navigation/native";
import { RootState } from "../../Redux/store";
import { useSelector } from "react-redux";

const HomeHeader = () => {
  const carts = useSelector((state: RootState) => state.data.carts);
  const userAddress = useSelector((state: RootState) => state.data.userAddress);
  const address = useSelector((state: RootState) => state.data.address);
  
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        {/* @ts-ignore */}
        <Pressable onPress={() => navigation.openDrawer()}>
          <Image
            source={icons.menu}
            style={{
              width: 45,
              height: 45,
            }}
            resizeMode="contain"
          />
        </Pressable>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pressable onPress={() => 
            // @ts-ignore
            navigation.navigate('Address')} style={{ marginLeft: 18 }}>
            <Text
              style={{
                color: colors.primaryBg,
                fontFamily: "Bold-Sen",
                fontSize: 12,
                fontStyle: "normal",
                fontWeight: "700",
                textTransform: "capitalize",
              }}
            >
              Deliver To
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Regular-Sen",
                  fontSize: 14,
                  fontStyle: "normal",
                  fontWeight: "400",
                  width: 200,
                  color: colors.secondaryTxt,
                }}
              >
                {userAddress && address === null && `${userAddress.city}, ${userAddress.country}`}
                {address !== null ? address.address : 'Add your address'}
              </Text>

              <Image
                source={icons.dropdown}
                style={{
                  marginLeft: 8,
                }}
                resizeMode="contain"
              />
            </View>
          </Pressable>
        </View>
      </View>

      <Pressable
        style={{ position: "relative" }}
        //   @ts-ignore
        onPress={() => navigation.navigate("Cart")}
      >
        <Image
          source={icons.cart}
          style={{
            width: 45,
            height: 45,
          }}
          resizeMode="contain"
        />
        <>
          {carts && carts?.length >= 1 && (
            <View
              style={{
                position: "absolute",
                backgroundColor: colors.primaryBg,
                width: 25,
                height: 25,
                borderRadius: 25 / 2,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Bold-Sen",
                  fontSize: 16,
                  color: colors.white,
                }}
              >
                {carts?.length ? carts?.length : 0}
              </Text>
            </View>
          )}
        </>
      </Pressable>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({});
