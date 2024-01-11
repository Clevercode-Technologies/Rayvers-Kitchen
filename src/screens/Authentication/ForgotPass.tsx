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

const ForgotPass = () => {
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
          <Text style={styles.majorTxt}>Forgot Password</Text>
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

          {/* Authenticate button */}
          <View style={{ marginTop: 53 }}>
            <Button type="code" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default memo(ForgotPass);

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
