import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  Pressable,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { images } from "../../../../assets/images";
import {
  BASE_URL,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  colors,
} from "../../../components/DEFAULTS";
import { icons } from "../../../../assets/icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { setAccessToken } from "../../../Redux/Splice/AppSplice";
import { generateRandomNumber } from "../../../utils/idGenerator";
import { RootState } from "../../../Redux/store";
import { Button } from "../../../components";
import { Spinner } from "native-base";

export const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [driverId, setDriverId] = useState<string>("");
  const [driverPass, setDriverPass] = useState<string>("");

  // UseHooks
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // Redux States

  const loginUser = async () => {
    dispatch(setAccessToken(generateRandomNumber(25).toString()));
    // setLoading(true);
    // try {
    //   const response = await fetch(`${BASE_URL}auth/driver/token`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({}),
    //   });

    //   if(response.ok) {

    //   } else {

    //   }

    // } catch (error: any) {
    //   console.log(`Error: ${error.message}`);
    //   setError(`Error: ${error.message}`);
    // }
  };

  return (
    <SafeAreaView
      style={{
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        backgroundColor: colors.white,
        flex: 1,
      }}
    >
      <StatusBar backgroundColor={"#121223"} barStyle={"light-content"} />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Chef Login Header  */}
        <ImageBackground
          source={images.topArea}
          style={{
            width: SCREEN_WIDTH,
            height: 247.53,
            paddingHorizontal: 24,
            paddingTop: 24,
          }}
          resizeMode="cover"
        >
          <Pressable
            onPress={() => navigation.canGoBack() && navigation.goBack()}
            style={{ width: "100%", alignItems: "flex-start" }}
          >
            <Image source={icons.back} style={{ width: 45, height: 45 }} />
          </Pressable>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 30,
                fontFamily: "SemiBold-Sen",
                color: colors.white,
                textAlign: "center",
                marginTop: 23,
              }}
            >
              Login as Driver
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Regular-Sen",
                color: "#FFF2E0",
                textAlign: "center",
                marginTop: 14,
              }}
            >
              Please sign in to your approved account
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Regular-Sen",
                color: "#412623",
                textAlign: "center",
                marginTop: 5,
                width: "70%",
              }}
            >
              Make sure to keep login details save and secure.
            </Text>
          </View>
        </ImageBackground>

        {/* Main Content */}
        <View
          style={{
            backgroundColor: colors.white,
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT - 500,
            borderTopEndRadius: 24,
            borderTopStartRadius: 24,
            marginTop: -20,
            padding: 24,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 13,
                fontFamily: "Regular-Sen",
                color: "#32343E",
                textTransform: "uppercase",
              }}
            >
              Driver ID
            </Text>

            <TextInput
              style={{
                backgroundColor: "#F0F5FA",
                height: 62,
                width: "100%",
                borderRadius: 10,
                marginTop: 8,
                paddingLeft: 19,
              }}
              placeholder="24Gfyj578£5&@"
              placeholderTextColor={colors.primaryTxt}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                fontSize: 13,
                fontFamily: "Regular-Sen",
                color: "#32343E",
                textTransform: "uppercase",
              }}
            >
              Driver password
            </Text>

            <TextInput
              style={{
                backgroundColor: "#F0F5FA",
                height: 62,
                width: "100%",
                borderRadius: 10,
                marginTop: 8,
                paddingLeft: 19,
              }}
              placeholder="⦁ ⦁ ⦁ ⦁ ⦁ ⦁"
              placeholderTextColor={colors.primaryTxt}
            />
          </View>

          {/* LOgin Buttton */}
          <View
            style={{
              marginTop: 53,
            }}
          >
            <Button loading={loading} onPress={loginUser} type="login" />
            {error && (
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Regular-Sen",
                  color: "red",
                  marginTop: 5,
                }}
              >
                {error}
              </Text>
            )}
          </View>
        </View>
        {loading && (
          <View
            style={{
              position: "absolute",
              top: "35%",
              bottom: "65%",
              left: "40%",
              right: "70%",
              width: 100,
              height: 100,
              backgroundColor: "#121223",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 12,
            }}
          >
            <Spinner color={colors.white} size="lg" />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
