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
import React, { memo, useEffect, useRef, useState } from "react";
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
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { Modal, Spinner } from "native-base";

interface VerifyCodeProps {
  route: {
    params: {
      navType: string;
    };
  };
}

const VerifyCode: React.FC<VerifyCodeProps> = ({ route }) => {
  const [verificationCode, setVerificationCode] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingResendCode, setLoadingResendCode] = useState<boolean>(false);
  const [loadingResetPass, setLoadingResetPass] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [isResetPass, setIsResetPass] = useState<boolean>(false);

  useEffect(() => {
    if (route.params?.navType && route.params?.navType === "resetPassword") {
      setIsResetPass(true);
    } else {
      setIsResetPass(false);
    }
  }, [route.params?.navType]);

  const userId = useSelector((state: RootState) => state.data.userId);
  const password = useSelector((state: RootState) => state.data.password);
  const rePassword = useSelector((state: RootState) => state.data.rePassword);
  console.log("userId: ", userId);
  console.log("verificationCode: ", verificationCode);
  const navigation = useNavigation();

  const inputRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  const handleVerificationCodeChange = (text: string, index: number) => {
    // Ensure that the code is only 4 digits
    if (/^\d{0,4}$/.test(text)) {
      const newCode = [...verificationCode];
      newCode[index] = text;
      setVerificationCode(newCode.join(""));

      if (text.length === 1 && index < 3) {
        // If a digit is entered, move focus to the next input
        const nextInput = inputRefs[index + 1].current;
        if (nextInput) {
          nextInput.focus();
        }
      } else if (text.length === 0 && index > 0) {
        // If backspace is pressed, move focus to the previous input
        const prevInput = inputRefs[index - 1].current;
        if (prevInput) {
          prevInput.focus();
        }
      }
    }
  };

  const verifyCode = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}auth/users/verify/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: Number(verificationCode),
          user_id: Number(userId),
        }),
      });

      if (response.ok) {
        setLoading(false);
        const responseBody = await response.json();
        if (response.status === 200 && responseBody.message) {
          setError(null);
          setMessage(responseBody.message);
          // What should happen if everything goes well...
          setModalVisible(true);

          setTimeout(() => {
            setModalVisible(false);
            // @ts-ignore
            navigation.navigate("Login");
          }, 3000);
        }
      } else {
        setLoading(false);
        const responseBody = await response.json();
        if (response.status === 400 && responseBody.message) {
          console.log(responseBody);
          setMessage(null);
          setError(responseBody.message);
          setModalVisible(true);
          setTimeout(() => {
            setModalVisible(false);
          }, 3000);
        }
      }
    } catch (error: any) {
      console.log(error.message);
      setError(`Encountered Error: ${error.message}`);
      setMessage(null);
      setModalVisible(true);
      setTimeout(() => {
        setModalVisible(false);
      }, 3000);
    }
  };

  const resendCode = async () => {
    setLoadingResendCode(true);
    try {
      const response = await fetch(
        `${BASE_URL}auth/users/verify/resend-code/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: Number(userId),
          }),
        }
      );

      if (response.ok) {
        setLoadingResendCode(false);
        const responseBody = await response.json();
        if (response.status === 200 && responseBody.message) {
          setMessage(responseBody.message);
          setError(null);
          // What should happen if everything goes well...
          setModalVisible(true);

          setTimeout(() => {
            setModalVisible(false);
          }, 3000);
        }
      } else {
        setLoadingResendCode(false);
        const responseBody = await response.json();
        if (responseBody.message) {
          setError(responseBody.message);
          setMessage(null);
          setModalVisible(true);
          setTimeout(() => {
            setModalVisible(false);
          }, 3000);
        }
      }
    } catch (error: any) {
      setLoadingResendCode(false);
      console.log(error.message);
      setError(`Encountered Error: ${error.message}`);
      setMessage(null);
      setModalVisible(true);
      setTimeout(() => {
        setModalVisible(false);
      }, 3000);
    }
  };

  const verifyCodeAndResetPass = async () => {
    setLoadingResetPass(true);
    try {
      const response = await fetch(
        `${BASE_URL}auth/users/reset/password/code/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: Number(userId),
            re_password: rePassword,
            password,
            code: Number(verificationCode),
          }),
        }
      );

      if (response.ok) {
        setLoadingResetPass(false);
        setError(null);
        const responseBody = await response.json();
        if (response.status === 200 && responseBody.message) {
          setMessage(responseBody.message);

          setModalVisible(true);

          setTimeout(() => {
            setModalVisible(false);

            // @ts-ignore
            navigation.navigate('Login');
          }, 3000);
        }
      } else {
        setLoadingResetPass(false);
        setMessage(null);
        const responseBody = await response.json();
        if (response.status === 400 && responseBody.message) {
          setError(responseBody.message);

          setModalVisible(true);

          setTimeout(() => {
            setModalVisible(false);
          }, 3000);
        } else if (responseBody.password) {
          setError(responseBody.password[0]);

          setModalVisible(true);

          setTimeout(() => {
            setModalVisible(false);
          }, 3000);
        } else {
          setError(responseBody.message);

          setModalVisible(true);

          setTimeout(() => {
            setModalVisible(false);
          }, 3000);
        }
      }
    } catch (error: any) {
      setLoadingResetPass(false);
      setMessage(null);
      setError(error.message);

      setModalVisible(true);

      setTimeout(() => {
        setModalVisible(false);
      }, 3000);
    }
  };

  return (
    <SafeAreaView
      style={{
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        flex: 1,
        backgroundColor: colors.white,
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
          <Text style={styles.majorTxt}>Verification</Text>
          <Text style={styles.minorTxt}>We have sent a code to your email</Text>
          <Text>example.user@gmail.com</Text>
        </ImageBackground>
        {/* Input Fields */}
        <View style={styles.mainContent}>
          <View>
            <View>
              <Text style={styles.inputLabel}>Code</Text>
            </View>
            {/* 4 digit code TextInput */}
            <View style={styles.codeInputContainer}>
              {[0, 1, 2, 3].map((index) => (
                <TextInput
                  key={index}
                  ref={inputRefs[index]}
                  style={styles.codeInput}
                  placeholder="•"
                  placeholderTextColor={colors.secondaryTxt}
                  keyboardType="numeric"
                  maxLength={1}
                  value={verificationCode[index] || ""}
                  onChangeText={(text) => {
                    handleVerificationCodeChange(text, index);
                  }}
                />
              ))}
            </View>

            {isResetPass && (
              <View>
                <View style={{ marginTop: 20.5 }}>
                  <Text style={styles.inputLabel}>Password</Text>
                  <TextInputs type="password" />
                </View>
                <View style={{ marginTop: 20.5 }}>
                  <Text style={styles.inputLabel}>Re-Type Password</Text>
                  <TextInputs type="re-password" />
                </View>
              </View>
            )}
          </View>

          {/* Resend Verification Button */}
          {!isResetPass && (
            <View style={{ marginTop: 53 }}>
              <Button
                loading={loadingResendCode}
                onPress={resendCode}
                type="resend"
              />
            </View>
          )}
          {/* Authenticate button */}
          <View style={{ marginTop: isResetPass ? 24 : 15 }}>
            <Button
              loading={loading || loadingResetPass}
              onPress={isResetPass ? verifyCodeAndResetPass : verifyCode}
              type={isResetPass ? "verifyAndReset" : "verify"}
            />
          </View>
        </View>
        
        {/* Show verification of code spinner */}
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

        {/* Show reset password spinner */}
        {loadingResetPass && (
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

        {/* Show resend code spinner */}
        {loadingResendCode && (
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default memo(VerifyCode);

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
  codeInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  codeInput: {
    width: 62,
    height: 62,
    backgroundColor: "#F0F5FA",
    textAlign: "center",
    fontSize: 20,
    borderRadius: 10,
    color: colors.primaryTxt,
  },
});
