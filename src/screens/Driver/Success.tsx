import {
    Image,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Pressable,
  } from "react-native";
  import React from "react";
  import { useNavigation } from "@react-navigation/native";
import { icons } from "../../../assets/icons";
import { colors } from "../../components/DEFAULTS";
  
  const Success = () => {
    const navigation = useNavigation();
  
    return (
      <SafeAreaView
        style={{
          marginTop: Platform.OS === "android" ? 25 : 0,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 24,
        }}
      >
        <Pressable
          onPress={() => navigation.canGoBack() && navigation.goBack()}
          style={{ flexDirection: "row", alignItems: "center", position: 'absolute', top: 54, left: 0 }}
        >
          <Image
            source={icons.backArrDark}
            style={{
              width: 45,
              height: 45,
            }}
            resizeMode="contain"
          />
        </Pressable>
        <View style={{}}>
          <Image
            source={icons.successVerified}
            style={{
              width: 260.28,
              height: 181,
              marginLeft: 60,
            }}
            resizeMode="contain"
          />
  
          <Text
            style={{
              textAlign: "center",
              fontSize: 24,
              fontFamily: "SemiBold-Sen",
              color: "#111A2C",
              marginBottom: 16,
              marginTop: 50,
            }}
          >
            Successful Delivery
          </Text>
        </View>
  
        {/* Bottom Button */}
        <Pressable
          // @ts-ignore
          onPress={() => navigation.canGoBack() && navigation.goBack()}
          style={{
            width: "100%",
            height: 63,
            backgroundColor: colors.primaryBg,
            position: "absolute",
            bottom: 50,
            borderRadius: 12,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontFamily: "SemiBold-Sen",
              color: colors.white,
              textTransform: "uppercase",
            }}
          >
            Ok
          </Text>
        </Pressable>
      </SafeAreaView>
    );
  };
  
  export default Success;
  
  const styles = StyleSheet.create({});
  