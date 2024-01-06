import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { icons } from "../../../assets/icons";
import { Pressable } from "react-native";
import { colors } from "../../components/DEFAULTS";
import { useNavigation } from "@react-navigation/native";

const Success = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        marginTop: Platform.OS === "android" ? 25 : 0,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 24
      }}
    >
      <View style={{}}>
        <Image
          source={icons.successVerified}
          style={{
            width: 260.28,
            height: 181,
            marginLeft: 60
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
            marginTop: 50
          }}
        >
          Congratulations!
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
          You successfully maked a payment, enjoy our service!!
        </Text>
      </View>


      {/* Bottom Button */}
      <Pressable
      // @ts-ignore
      onPress={() => navigation.navigate('TrackOrder')}
        style={{
          width: "100%",
          height: 63,
          backgroundColor: colors.primaryBg,
          position: "absolute",
          bottom: 50,
          borderRadius: 12,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={{ fontSize: 14, fontFamily: 'SemiBold-Sen', color: colors.white, textTransform: 'uppercase' }}>Track Order</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Success;

const styles = StyleSheet.create({});
