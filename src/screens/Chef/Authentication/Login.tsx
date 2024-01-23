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
} from "react-native";
import React from "react";
import { images } from "../../../../assets/images";
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  colors,
} from "../../../components/DEFAULTS";
import { icons } from "../../../../assets/icons";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
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
          <Pressable onPress={() => navigation.canGoBack() && navigation.goBack()} style={{ width: "100%", alignItems: "flex-start" }}>
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
              Login as Chef
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
              Kitchen ID
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
              kitchen password
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
          <Pressable
          onPress={() => alert('Implement Login for Chef')}
            style={{
              marginTop: 20,
              width: "100%",
              height: 62,
              backgroundColor: colors.primaryBg,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 12,
            }}
          >
            <Text
              style={{
                color: colors.white,
                fontFamily: "SemiBold-Sen",
                fontSize: 14,
                textTransform: "uppercase",
              }}
            >
              Login
            </Text>
          </Pressable>

          <View style={{ marginTop: 12 }}>
            <Text
              style={{
                fontFamily: "Regular-Sen",
                fontSize: 14,
                color: colors.abstractTxt,
              }}
            >
              Don't have an approved account? <Text onPress={() => alert('Open website page containing creating a verified logistic account')} style={{ color: '#3BB726' }}>Get One.</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
