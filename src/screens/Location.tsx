import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { memo, useEffect, useState } from "react";
import { SCREEN_HEIGHT, SCREEN_WIDTH, colors } from "../components/DEFAULTS";
import { Image } from "react-native";
import { images } from "../../assets/images";
import { icons } from "../../assets/icons";
import * as Location from "expo-location";
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import { userAddress } from "../../type";
import { useDispatch } from "react-redux";
import { setUserAddress } from "../Redux/Splice/AppSplice";
import { useNavigation } from "@react-navigation/native";
import { Center, Spinner } from "native-base";

const LocationExtractor = () => {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [longitude, setLongitude] = useState<number>(0);
  const [latitude, setLatitude] = useState<number>(0);
  const [addressData, setAddressData] = useState<userAddress | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  console.log("addressData: ", addressData);

  const dispatch = useDispatch();
  //   const navigation = useNavigation();

  useEffect(() => {
    if (addressData) {
      dispatch(setUserAddress(addressData));
    }
  }, [addressData]);

  const locationDetector = async () => {
    setLoading(true);

    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLongitude(location.coords.longitude);
      setLatitude(location.coords.latitude);
      console.log(location);

      let geocode = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      if (geocode.length > 0) {
        setLoading(false);
        const address = geocode[0];
        setAddressData({
          ...address,
          city: address?.city ?? "",
          region: address?.region ?? "",
          country: address?.country ?? "",
          timezone: address?.timezone ?? "",
          name: address?.name ?? "",
          isoCountryCode: address?.isoCountryCode ?? "",
          longitude,
          latitude,
        });
      }
    } catch (error: any) {
      setLoading(false);
      console.log(`Encountered some errors: ${error.message}`);
      setErrorMsg(error?.message);
    }
  };

  return (
    <SafeAreaView>
      <View
        style={{
          height: SCREEN_HEIGHT,
          width: SCREEN_WIDTH,
          backgroundColor: colors.white,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            alignItems: "center",
            width: SCREEN_WIDTH - 80,
          }}
        >
          <Image
            source={images.globe}
            style={{
              width: 206,
              height: 250,
            }}
            resizeMode="contain"
          />
          <Pressable
            onPress={() => locationDetector()}
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: 327,
              height: 67,
              backgroundColor: loading ? "#A0A5BA" : colors.primaryBg,
              borderRadius: 12,
              justifyContent: "center",
              marginTop: 94,
            }}
          >
            <Text
              style={{
                textTransform: "uppercase",
                color: colors.white,
                fontFamily: "Bold-Sen",
                fontSize: 16,
                fontStyle: "normal",
                marginRight: 24,
              }}
            >
              Access Location
            </Text>
            <Image
              source={icons.mapPin}
              style={{
                width: 32,
                height: 32,
              }}
              resizeMode="contain"
            />
          </Pressable>

          <Text
            style={{
              textAlign: "center",
              marginTop: 37,
              color: colors.secondaryTxt,
              fontWeight: "400",
              fontSize: 16,
              fontFamily: "Regular-Sen",
            }}
          >
            YOUR LOCATION WOULD BE ACCESSED ONLY WHEN USING THE APP
          </Text>
        </View>
      </View>
      {loading && (
        <View
          style={{
            position: "absolute",
            top: "35%",
            bottom: "65%",
            left: "30%",
            right: "70%",
            width: 150,
            height: 100,
            backgroundColor: "#121223",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 12,
          }}
        >
          <Spinner color={colors.white} size="lg" />
          <Text
            style={{
              fontSize: 13,
              fontFamily: "Regular-Sen",
              color: colors.white,
            }}
          >
            Detecting Location...
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default memo(LocationExtractor);

const styles = StyleSheet.create({});
