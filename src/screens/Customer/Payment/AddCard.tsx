import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../components/DEFAULTS";
import { icons } from "../../../../assets/icons";

const AddCard = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        marginTop: Platform.OS === "android" ? 25 : 0,
        flex: 1,
        marginHorizontal: 24,
      }}
    >
      {/* Header */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Pressable
          onPress={() => navigation.canGoBack() && navigation.goBack()}
        >
          <Image
            source={icons.close}
            style={{
              width: 45,
              height: 45,
            }}
            resizeMode="contain"
          />
        </Pressable>

        <Text
          style={{
            fontSize: 17,
            fontFamily: "Regular-Sen",
            marginLeft: 18,
          }}
        >
          Add Card
        </Text>
      </View>

      {/* Card holder name */}
      <View>
        <Text
          style={{
            textTransform: "uppercase",
            color: "#A0A5BA",
            fontSize: 14,
            fontFamily: "Regular-Sen",
            marginTop: 24,
          }}
        >
          card holder name
        </Text>
        <TextInput
          style={{
            height: 63,
            width: "100%",
            backgroundColor: "#F0F5FA",
            borderRadius: 10,
            marginTop: 10,
            fontSize: 16,
            paddingLeft: 20,
          }}
          placeholder="John Doe"
          placeholderTextColor={colors.primaryTxt}
        />
      </View>

      {/* card number */}
      <View>
        <Text
          style={{
            textTransform: "uppercase",
            color: "#A0A5BA",
            fontSize: 14,
            fontFamily: "Regular-Sen",
            marginTop: 24,
          }}
        >
          card number
        </Text>
        <TextInput
          style={{
            height: 63,
            width: "100%",
            backgroundColor: "#F0F5FA",
            borderRadius: 10,
            marginTop: 10,
            fontSize: 16,
            paddingLeft: 20,
          }}
          placeholder="2134   _ _ _ _   _ _ _ _"
          placeholderTextColor={colors.primaryTxt}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        {/* Expiry Date */}
        <View>
          <Text
            style={{
              textTransform: "uppercase",
              color: "#A0A5BA",
              fontSize: 14,
              fontFamily: "Regular-Sen",
              marginTop: 24,
            }}
          >
            expire date
          </Text>
          <TextInput
            style={{
              height: 63,
              minWidth: "45%",
              backgroundColor: "#F0F5FA",
              borderRadius: 10,
              marginTop: 10,
              paddingLeft: 20,
              fontSize: 16,
            }}
            placeholder="mm/yyyy"
            placeholderTextColor={colors.primaryTxt}
          />
        </View>

        {/* CVC */}
        <View>
          <Text
            style={{
              textTransform: "uppercase",
              color: "#A0A5BA",
              fontSize: 14,
              fontFamily: "Regular-Sen",
              marginTop: 24,
            }}
          >
            cvc
          </Text>
          <TextInput
            style={{
              height: 63,
              minWidth: "45%",
              backgroundColor: "#F0F5FA",
              borderRadius: 10,
              marginTop: 10,
              paddingLeft: 20,
              fontSize: 16,
            }}
            placeholder="***"
            placeholderTextColor={colors.primaryTxt}
          />
        </View>
      </View>

      {/* Bottom Button */}
      <Pressable
        // @ts-ignore
        onPress={() => navigation.navigate("Success")}
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
          Add & Make Payment
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default AddCard;

const styles = StyleSheet.create({});
