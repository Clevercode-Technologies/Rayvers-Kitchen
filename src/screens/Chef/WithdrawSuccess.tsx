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

const WithdrawSuccess = () => {
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
          Withdraw Successful
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 14,
            fontFamily: "Regular-Sen",
            color: "#525C67",
            marginBottom: 16,
            marginHorizontal: 70,
            lineHeight: 24,
          }}
        >
          You successfully made a withdrawal, enjoy our service!!
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
          ok
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default WithdrawSuccess;

const styles = StyleSheet.create({});
