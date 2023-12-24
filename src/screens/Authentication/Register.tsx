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
  
  const Register = () => {
  
    return (
      <SafeAreaView style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}>
        <StatusBar backgroundColor={"#121223"} barStyle={"light-content"} />
  
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header Area */}
          <ImageBackground style={styles.pageHeader} source={images.topArea}>
            <Text style={styles.majorTxt}>Sign Up</Text>
            <Text style={styles.minorTxt}>
                Please sign up to get started
            </Text>
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
                <Button type="register" />
            </View>
  
            {/* Alternative Solution */}
            <View style={{ width: '100%', alignItems: "center", justifyContent: 'center' }}>
              <Text style={{
                color: colors.secondaryTxt,
                fontSize: 16,
                fontWeight: "400",
                fontFamily: "Regular-Sen",
                fontStyle: "normal",
                marginTop: 38
              }}>Already have an account? 
              <View style={{ width: 10 }} />
              <Text 
                style={{
                  color: colors.primaryBg,
                  fontWeight: '700',
                  fontSize: 14,
                  fontFamily: 'SemiBold-Sen',
                  textTransform: "uppercase",
                }}
                onPress={() => alert("Implement navigation to Sign In page")}>Sign In</Text>
              </Text>
            </View>
  
            {/* Or Demarcator */}
            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', paddingTop: 27, paddingBottom: 15 }}>
              <Text style={{ color: colors.secondaryTxt, fontFamily: "Regular-Sen", fontSize: 16, fontStyle: "normal", fontWeight: "400" }}>Or</Text>
            </View>
  
            {/* Social Icons */}
            <View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <Pressable onPress={() => alert('Implement Facebook login')}>
                  <Image 
                    source={icons.facebook}
                    style={{
                      width: 62,
                      height: 62
                    }}
                    resizeMode="contain"
                  />
                </Pressable>
                <Pressable onPress={() => alert('Implement X login')}>
                  <Image 
                    source={icons.x}
                    style={{
                      width: 62,
                      height: 62
                    }}
                    resizeMode="contain"
                  />
                </Pressable>
                <Pressable onPress={() => alert('Implement Apple login')}>
                  <Image 
                    source={icons.apple}
                    style={{
                      width: 62,
                      height: 62
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
    forgotTxt: {
      fontSize: 14,
      fontWeight: '400',
      fontStyle: 'normal',
      fontFamily: 'Regular-Sen',
      color: colors.primaryBg
    }
  });
  