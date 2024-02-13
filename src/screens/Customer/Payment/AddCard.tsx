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
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../components/DEFAULTS";
import { icons } from "../../../../assets/icons";
import { useDispatch } from "react-redux";
import { Box, Center, CheckIcon, Select, Spinner } from "native-base";
import { addCard } from "../../../Redux/Splice/AppSplice";

enum CardType {
  "MASTER" = "master",
  "VISA" = "visa",
}

const AddCard = () => {
  const [cardHolder, setCardHolder] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expiryDate, setExpiryDate] = useState<string>("");
  const [CVC, setCVC] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const createCard = () => {
    if (isFilled()) {
      setLoading(true);
      // const fakeLoader = setTimeout(() => {
        dispatch(
          addCard({
            cvc: CVC,
            expiryDate,
            holderName: cardHolder,
            number: cardNumber,
            type:
              type === "master"
                ? CardType.MASTER
                : type === "visa"
                ? CardType.VISA
                : CardType.MASTER,
          })
        );

        setLoading(false);
      // }, 2000);

      // return () => clearTimeout(fakeLoader);
    } else {
      alert("All Fields Must Be Filled.");
    }
  };

  function isDate(input: string) {
    var pattern = /^(0[1-9]|1[0-2])\/\d{4}$/;
    return pattern.test(input);
  }

  const isFilled = () => {
    return (
      cardHolder.length !== 0 &&
      cardNumber.length !== 0 &&
      isDate(expiryDate) &&
      CVC.length === 3 &&
      type.length !== 0
    );
  };

  return (
    <SafeAreaView
      style={{
        marginTop: Platform.OS === "android" ? 25 : 0,
        flex: 1,
        backgroundColor: colors.white,
      }}
    >
      <View style={{ flex: 1, marginHorizontal: 24 }}>
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
            onChangeText={(text) => setCardHolder(text)}
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
            onChangeText={(text) => setCardNumber(text)}
            maxLength={16}
            keyboardType="numeric"
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
              onChangeText={(text) => setExpiryDate(text)}
              maxLength={7}
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
              onChangeText={(text) => setCVC(text)}
              maxLength={3}
            />
          </View>
        </View>
        {/* Etra Compo */}
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
            Select Type
          </Text>

          <Box style={{ paddingVertical: 5 }}>
            <Select
              selectedValue={type}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Choose Service"
              _selectedItem={{
                bg: colors.primaryBg,
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(itemValue) => setType(itemValue)}
            >
              <Select.Item label="Master" value="master" />
              <Select.Item label="Visa" value="visa" />
            </Select>
          </Box>
        </View>

        {/* Bottom Button */}
        <Pressable
          onPress={() => {
            createCard();
            navigation.canGoBack() && navigation.goBack();
          }}
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
            Add Card
          </Text>
        </Pressable>
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
    </SafeAreaView>
  );
};

export default AddCard;

const styles = StyleSheet.create({});
