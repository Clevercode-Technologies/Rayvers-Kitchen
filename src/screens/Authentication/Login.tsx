import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { memo, useState } from "react";
import { images } from "../../../assets/images";
import { SCREEN_HEIGHT, SCREEN_WIDTH, colors } from "../../components/DEFAULTS";
import { Image } from "react-native";
import { icons } from "../../../assets/icons";
import { Button, TextInputs } from "../../components";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [remember, setRemember] = useState<boolean>(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}>
      <StatusBar backgroundColor={"#121223"} barStyle={"light-content"} />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Area */}
        <ImageBackground style={styles.pageHeader} source={images.topArea}>
          <Pressable
            onPress={() => navigation.canGoBack() && navigation.goBack()}
            style={{
              position: "absolute",
              left: 24,
              top: 30,
            }}
          >
            <Image source={icons.back} style={{ width: 45, height: 45 }} />
          </Pressable>
          <Text style={styles.majorTxt}>Log In</Text>
          <Text style={styles.minorTxt}>
            Please sign in to your existing account
          </Text>
        </ImageBackground>

        {/* Input Fields */}
        <View style={styles.mainContent}>
          <View>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInputs type="email" />
          </View>
          <View style={{ marginTop: 20.5 }}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInputs type="password" />
          </View>

          {/* Remember Me */}
          <View
            style={{
              marginTop: 24,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => setRemember((prevState) => !prevState)}
                style={{
                  borderWidth: 2,
                  borderColor: colors.strokeColor,
                  width: 20,
                  height: 20,
                  borderRadius: 5,
                  marginRight: 10,
                  backgroundColor: remember ? colors.primaryBg : colors.white,
                }}
              ></TouchableOpacity>

              <Text
                style={{
                  fontSize: 13,
                  fontFamily: "Regular-Sen",
                  color: colors.secondaryTxt,
                }}
              >
                Remember me
              </Text>
            </View>

            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.forgotTxt}>Forgot Password</Text>
            </TouchableOpacity>
          </View>

          {/* Authenticate button */}
          <View style={{ marginTop: 53 }}>
            <Button type="login" />
          </View>

          {/* Alternative Solution */}
          <View
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: colors.secondaryTxt,
                fontSize: 16,
                fontWeight: "400",
                fontFamily: "Regular-Sen",
                fontStyle: "normal",
                marginTop: 38,
              }}
            >
              Don't have an account?
              <View style={{ width: 10 }} />
              <Text
                style={{
                  color: colors.primaryBg,
                  fontWeight: "700",
                  fontSize: 14,
                  fontFamily: "SemiBold-Sen",
                  textTransform: "uppercase",
                }}
                // @ts-ignore
                onPress={() => navigation.navigate('Register')}
              >
                SIGN UP
              </Text>
            </Text>
          </View>

          {/* Or Demarcator */}
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 27,
              paddingBottom: 15,
            }}
          >
            <Text
              style={{
                color: colors.secondaryTxt,
                fontFamily: "Regular-Sen",
                fontSize: 16,
                fontStyle: "normal",
                fontWeight: "400",
              }}
            >
              Or
            </Text>
          </View>

          {/* Social Icons */}
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Pressable onPress={() => alert("Implement Facebook login")}>
                <Image
                  source={icons.facebook}
                  style={{
                    width: 62,
                    height: 62,
                  }}
                  resizeMode="contain"
                />
              </Pressable>
              <Pressable onPress={() => alert("Implement X login")}>
                <Image
                  source={icons.x}
                  style={{
                    width: 62,
                    height: 62,
                  }}
                  resizeMode="contain"
                />
              </Pressable>
              <Pressable onPress={() => alert("Implement Apple login")}>
                <Image
                  source={icons.apple}
                  style={{
                    width: 62,
                    height: 62,
                  }}
                  resizeMode="contain"
                />
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default memo(Login);

const styles = StyleSheet.create({
  mainContent: {
    flex: 3,
    borderTopStartRadius: 24,
    borderTopEndRadius: 24,
    backgroundColor: "white",
    marginTop: -25,
    padding: 24,
  },
  pageHeader: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
    height: 253.32,
  },
  majorTxt: {
    color: "#ffffff",
    fontFamily: "SemiBold-Sen",
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: "700",
  },
  minorTxt: {
    color: "#ffffff",
    fontFamily: "Regular-Sen",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    marginTop: 3,
  },
  inputLabel: {
    color: colors.primaryTxt,
    fontSize: 13,
    fontFamily: "Regular-Sen",
    fontWeight: "400",
    fontStyle: "normal",
    textTransform: "uppercase",
    marginBottom: 11.5,
  },
  forgotTxt: {
    fontSize: 14,
    fontWeight: "400",
    fontStyle: "normal",
    fontFamily: "Regular-Sen",
    color: colors.primaryBg,
  },
});
