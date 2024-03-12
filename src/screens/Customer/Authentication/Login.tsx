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
import { images } from "../../../../assets/images";
import {
  BASE_URL,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  colors,
} from "../../../components/DEFAULTS";
import { Image } from "react-native";
import { icons } from "../../../../assets/icons";
import { Button, TextInputs } from "../../../components";
import { useNavigation } from "@react-navigation/native";
import { RootState } from "../../../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "native-base";
import { setAccessToken } from "../../../Redux/Splice/AppSplice";

const Login = () => {
  const [remember, setRemember] = useState<boolean>(false);
  const name = useSelector((state: RootState) => state.data.name);
  const email = useSelector((state: RootState) => state.data.email);
  const password = useSelector((state: RootState) => state.data.password);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  console.log("name: ", name, "email: ", email, "password: ", password);

  // Profile Update Begins
  const [loadingUpdate, setLoadingUpdate] = useState<boolean>(false);
  // Profile Update Ends

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const loginUser = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}auth/token/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setLoading(false);
        try {
          const responseBody = await response.json();
          if (response.status === 200 && responseBody.token) {
            const token = responseBody.token;
            if (name.length > 0) {
              await updateProfile(token);
            } else {
              dispatch(setAccessToken(token));
            }
          }
        } catch (error) {}
      } else {
        setLoading(false);
        try {
          const responseBody = await response.json(); // Parse the JSON response
          if (response.status === 400 && responseBody.non_field_errors) {
            setError(responseBody.non_field_errors[0]);
          } else {
            setError("An error occurred. Please try again.");
          }
        } catch (error: any) {
          setLoading(false);
          console.error(error);
          setError(`Login Error: ${error.message}`);
        }
      }
    } catch (error: any) {
      console.log(`Error: ${error.message}`);
      setError(`Login Error: ${error.message}`);
    }
  };

  const updateProfile = async (token: string) => {
    setLoadingUpdate(true);
    try {
      const response = await fetch(`${BASE_URL}auth/users/me/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify({ name }),
      });

      if (response.ok) {
        setLoading(false);
        if (response.status === 201) {
          dispatch(setAccessToken(token));
        }
      } else {
        dispatch(setAccessToken(token));
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
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

            <TouchableOpacity
              onPress={() => {
                // @ts-ignore
                navigation.navigate("ForgotPass");
              }}
            >
              <Text style={styles.forgotTxt}>Forgot Password</Text>
            </TouchableOpacity>
          </View>

          {/* Authenticate button */}
          <View style={{ marginTop: 53 }}>
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
                onPress={() => navigation.navigate("Register")}
              >
                SIGN UP
              </Text>
            </Text>
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
        {loadingUpdate && (
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
            <Text
              style={{
                color: colors.white,
                fontFamily: "Regular-Sen",
                fontSize: 10,
                marginTop: 10,
              }}
            >
              Updating User
            </Text>
          </View>
        )}
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
