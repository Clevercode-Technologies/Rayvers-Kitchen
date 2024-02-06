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
import { BASE_URL, SCREEN_HEIGHT, SCREEN_WIDTH, colors } from "../../components/DEFAULTS";
import { Image } from "react-native";
import { icons } from "../../../assets/icons";
import { Button, TextInputs } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { Spinner } from "native-base";

const Register = () => {
  const email = useSelector((state: RootState) => state.data.email);
  const password = useSelector((state: RootState) => state.data.password);
  const rePassword = useSelector((state: RootState) => state.data.rePassword);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const navigation = useNavigation();

  const handleRegistration = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}auth/users/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setLoading(false);
        if (response.status === 201) {
          // Successful registration, navigate to login
          // @ts-ignore
          navigation.navigate("Login");
        }
      } else {
        setLoading(false);
        try {
          const responseBody = await response.json(); // Parse the JSON response
          // console.log(responseBody);
          if (response.status === 400 && responseBody.email) {
            setError(responseBody.email[0]);
          } else {
            setError('An error occurred. Please try again.');
          }
        } catch (error) {
          console.error('Error parsing JSON:', error);
          setError('Unexpected error occurred. Please try again.');
        }
      }
      
      
      // store token temporarily and use for the next phase
      // update profile
      // make token global
    } catch (error: any) {
      console.log(error);
      setError(`Sign Up Error: ${error.message}`);
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT, backgroundColor: colors.white, flex: 1 }}>
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
          <Text style={styles.majorTxt}>Sign Up</Text>
          <Text style={styles.minorTxt}>Please sign up to get started</Text>
        </ImageBackground>

        <View style={styles.mainContent}>
          {/* Input Fields */}
          <View>
            <Text style={styles.inputLabel}>Name</Text>
            <TextInputs type="name" />
          </View>
          <View style={{ marginTop: 20.5 }}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInputs type="email" />
          </View>
          <View style={{ marginTop: 20.5 }}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInputs type="password" />
          </View>
          <View style={{ marginTop: 20.5 }}>
            <Text style={styles.inputLabel}>Re-Type Password</Text>
            <TextInputs type="re-password" />
          </View>

          {/* Authenticate button */}
          <View style={{ marginTop: 53 }}>
            <Button onPress={handleRegistration} loading={loading} type="register" />
            {error && (
              <Text style={{
                fontSize: 12,
                fontFamily: 'Regular-Sen',
                color: 'red',
                marginTop: 5
              }}>{error}</Text>
            )}
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
              Already have an account?
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
                onPress={() => navigation.navigate("Login")}
              >
                Sign In
              </Text>
            </Text>
          </View>

          {/* Or Demarcator */}
          {/* <View
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
          </View> */}

          {/* Social Icons */}
          {/* <View>
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
          </View> */}
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

export default memo(Register);

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
