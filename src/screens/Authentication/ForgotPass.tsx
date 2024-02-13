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
import {
  BASE_URL,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  colors,
} from "../../components/DEFAULTS";
import { Image } from "react-native";
import { icons } from "../../../assets/icons";
import { Button, TextInputs } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { setUserId } from "../../Redux/Splice/AppSplice";
import { Modal, Spinner } from "native-base";

const ForgotPass = () => {
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const email = useSelector((state: RootState) => state.data.email);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const resetPassword = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}auth/users/reset/password/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      if (response.ok) {
        setLoading(false);
        const responseBody = await response.json();
        if (
          response.status === 200 &&
          responseBody.message &&
          responseBody.user_id
        ) {
          setMessage(responseBody.message);
          setError(null);
          dispatch(setUserId(responseBody.user_id));
          setModalVisible(true);

          setTimeout(() => {
            setModalVisible(false);
            // @ts-ignore
            navigation.navigate("VerifyCode", { navType: "resetPassword" });
          }, 3000);
        }
      } else {
        const responseBody = await response.json();
        if (response.status === 400 && responseBody.message) {
          setError(responseBody.message);
          setMessage(null);

          setModalVisible(true);

          setTimeout(() => {
            setModalVisible(false);
          }, 3000);
        }
      }
    } catch (error: any) {
      setLoading(false);
      console.log(`Unexpected Error: ${error.message}`);
      setMessage(null);
      setError(error.message);

      setModalVisible(true);
  
      setTimeout(() => {
        setModalVisible(false);
      }, 3000);
    }
  };

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
            <Button type="code" loading={loading} onPress={resetPassword} />
          </View>
        </View>
      </ScrollView>

      {loading && (
        <View
          style={{
            position: "absolute",
            top: "35%",
            bottom: "65%",
            left: "40%",
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
              fontFamily: "Regular-Sen",
              fontSize: 13,
              color: colors.white,
            }}
          >
            Validating Email ⚙
          </Text>
        </View>
      )}

      {/* Modals here -----> */}
      <Modal
          style={{ zIndex: 100 }}
          isOpen={modalVisible}
          onClose={setModalVisible}
          size={"sm"}
        >
          <Modal.Content maxH="212">
            <Modal.CloseButton />
            <Modal.Body>
              <View style={{ padding: 20, alignItems: "center" }}>
                {message ? (
                  <Image
                    source={{
                      uri: "https://firebasestorage.googleapis.com/v0/b/rayvers-kitchen.appspot.com/o/success.gif?alt=media&token=763dbeb2-c1f6-441c-9ef9-29d891ca3847",
                    }}
                    style={{
                      width: 100,
                      height: 100,
                      marginBottom: 10,
                    }}
                  />
                ) : error ? (
                  <Image
                    source={{
                      uri: "https://firebasestorage.googleapis.com/v0/b/rayvers-kitchen.appspot.com/o/error.gif?alt=media&token=60359522-9bcb-473d-8d9a-6bf3d194692e",
                    }}
                    style={{
                      width: 100,
                      height: 100,
                      marginBottom: 10,
                    }}
                  />
                ) : null}
                <Text
                  style={{
                    textAlign: "center",
                    fontFamily: "Regular-Sen",
                    fontSize: 14,
                  }}
                >
                  {error ? error : message ? message : ""}
                </Text>
              </View>
            </Modal.Body>
          </Modal.Content>
        </Modal>
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
