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
  import React, { memo, useRef, useState } from "react";
  import { images } from "../../../assets/images";
  import { SCREEN_HEIGHT, SCREEN_WIDTH, colors } from "../../components/DEFAULTS";
  import { Image } from "react-native";
  import { icons } from "../../../assets/icons";
  import { Button, TextInputs } from "../../components";
  
  const VerifyCode = () => {
    const [verificationCode, setVerificationCode] = useState<string>("");

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



  
    return (
      <SafeAreaView style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}>
        <StatusBar backgroundColor={"#121223"} barStyle={"light-content"} />
  
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header Area */}
          <ImageBackground style={styles.pageHeader} source={images.topArea}>
            <Text style={styles.majorTxt}>Verification</Text>
            <Text style={styles.minorTxt}>
                We have sent a code to your email
            </Text>
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
            </View>
            
            {/* Authenticate button */}
            <View style={{ marginTop: 53 }}>
                <Button type="verify" />
            </View>
  
          </View>
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
      height: 253.32
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
  