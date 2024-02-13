import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SCREEN_WIDTH, colors } from "../../../components/DEFAULTS";
import { icons } from "../../../../assets/icons";
import { TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { setAddress } from "../../../Redux/Splice/AppSplice";
import { RootState } from "../../../Redux/store";
import { Spinner } from "native-base";

enum LABEL {
  HOME = "Home",
  WORK = "Work",
  OTHER = "Other",
}

interface AddNewAddressProps {
  route: {
    params: {
      navType: string;
    };
  };
}

const AddNewAddress: React.FC<AddNewAddressProps> = ({ route }) => {
  const [addressData, setAddressData] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [postCode, setPostCode] = useState<string>("");
  const [aptNo, setAptNo] = useState<string>("");
  const [error, setError] = useState<string | null>("");
  const [loading, setLoading] = useState<boolean>(false);

  const address = useSelector((state: RootState) => state.data.address);

  const [isEditAddress, setIsEditAddress] = useState<boolean>(false);
  const [label, setLabel] = useState<LABEL>(
    isEditAddress ? (address?.addressType as LABEL) || LABEL.HOME : LABEL.HOME
  );

  console.log(isEditAddress);

  useEffect(() => {
    if (route.params?.navType && route.params?.navType === "Edit") {
      setIsEditAddress(true);
    } else {
      setIsEditAddress(false);
    }
  }, [route.params?.navType]);

  const dispatch = useDispatch();

  const saveAddress = () => {
    setLoading(true);
  };

  const navigation = useNavigation();

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);

        if (!addressData || !street || !postCode || !aptNo || !label) {
          setError("All fields are required!");
          dispatch(setAddress(null));
        } else {
          dispatch(
            setAddress({
              address: addressData,
              addressType: label,
              apartment: aptNo,
              postCode,
              street,
            })
          );

          setError("");
          setAddressData("");
          setAptNo("");
          setLabel(LABEL.HOME);
          setPostCode("");
          setStreet("");

          console.log(address);
        }
      }, 3000);
    }
  }, [loading]);

  return (
    <SafeAreaView
      style={{
        // position: 'relative',
        backgroundColor: colors.white,
      }}
    >
      {/* MapView Header */}
      <View style={{ position: "relative" }}>
        <Pressable
          onPress={() => navigation.canGoBack() && navigation.goBack()}
        >
          <Image
            source={icons.backArrDark}
            style={{
              width: 45,
              height: 45,
              position: "absolute",
              zIndex: 1,
              bottom: -70,
              left: 24,
            }}
          />
        </Pressable>
        <View
          style={{
            height: 295,
            backgroundColor: "#D0D9E1",
            width: SCREEN_WIDTH,
            zIndex: -1,
          }}
        >
          {/* Map View and address selection would go here */}
        </View>
      </View>

      <ScrollView style={{ paddingBottom: 50 }}>
        <View
          style={{
            marginHorizontal: 24,
            justifyContent: "flex-start",
          }}
        >
          {/* TextInput Sections - Address */}
          <View style={{ marginTop: 30 }}>
            <Text
              style={{
                fontSize: 14,
                color: colors.primaryTxt,
                fontFamily: "Regular-Sen",
                textTransform: "uppercase",
              }}
            >
              Address
            </Text>
            <View style={{ position: "relative" }}>
              <TextInput
                style={{
                  borderRadius: 10,
                  height: 50,
                  width: "100%",
                  color: "#6B6E82",
                  fontSize: 12,
                  fontFamily: "Regular-Sen",
                  backgroundColor: "#F0F5FA",
                  marginTop: 8,
                  paddingVertical: 15,
                  paddingLeft: 46,
                }}
                onChangeText={(text) => setAddressData(text)}
                value={isEditAddress ? address?.address : addressData}
                placeholder="3235 Royal Ln. mesa, new jersy 34567"
                placeholderTextColor={"#6B6E82"}
              />

              <Image
                source={icons.location}
                style={{
                  width: 34,
                  height: 30,
                  position: "absolute",
                  top: 18,
                  left: 5,
                }}
              />
            </View>
          </View>

          {/* Input Fields */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 24,
            }}
          >
            <View style={{ width: "45%" }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Regular-Sen",
                  color: colors.primaryTxt,
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                street
              </Text>
              <TextInput
                placeholder="cross axis main"
                placeholderTextColor={"#6B6E82"}
                value={isEditAddress ? address?.address : street}
                style={{
                  padding: 18.5,
                  backgroundColor: "#F0F5FA",
                  height: 50,
                  borderRadius: 10,
                  color: "#6B6E82",
                  fontSize: 12,
                  fontFamily: "Regular-Sen",
                }}
                onChangeText={(text) => setStreet(text)}
              />
            </View>
            <View style={{ width: "45%" }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Regular-Sen",
                  color: colors.primaryTxt,
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                Post code
              </Text>
              <TextInput
                placeholder="300271"
                placeholderTextColor={"#6B6E82"}
                onChangeText={(text) => setPostCode(text)}
                style={{
                  padding: 18.5,
                  backgroundColor: "#F0F5FA",
                  height: 50,
                  borderRadius: 10,
                  color: "#6B6E82",
                  fontSize: 12,
                  fontFamily: "Regular-Sen",
                }}
                value={isEditAddress ? address?.postCode : postCode}
              />
            </View>
          </View>

          {/* Apartment TextInput */}
          <View style={{ marginTop: 30 }}>
            <Text
              style={{
                fontSize: 14,
                color: colors.primaryTxt,
                fontFamily: "Regular-Sen",
                textTransform: "uppercase",
              }}
            >
              apartment
            </Text>
            <View style={{}}>
              <TextInput
                style={{
                  borderRadius: 10,
                  height: 50,
                  width: "100%",
                  color: "#6B6E82",
                  fontSize: 12,
                  fontFamily: "Regular-Sen",
                  backgroundColor: "#F0F5FA",
                  marginTop: 8,
                  padding: 18.5,
                }}
                placeholder="345"
                onChangeText={(number) => setAptNo(number)}
                placeholderTextColor={"#6B6E82"}
                value={isEditAddress ? address?.apartment : aptNo}
              />
            </View>
          </View>

          {/* Label */}
          <View style={{ marginTop: 24 }}>
            <Text
              style={{
                color: colors.primaryTxt,
                fontSize: 14,
                fontFamily: "Regular-Sen",
                textTransform: "uppercase",
              }}
            >
              Label as
            </Text>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 12,
              }}
            >
              <Pressable
                onPress={() => setLabel(LABEL.HOME)}
                style={{
                  width: 94,
                  height: 45,
                  backgroundColor:
                    label === "Home" ? colors.primaryBg : "#F0F5FA",
                  borderRadius: 22.5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Regular-Sen",
                    fontSize: 14,
                    color: label === "Home" ? colors.white : colors.primaryTxt,
                  }}
                >
                  Home
                </Text>
              </Pressable>
              <Pressable
                onPress={() => setLabel(LABEL.WORK)}
                style={{
                  width: 94,
                  height: 45,
                  backgroundColor:
                    label === "Work" ? colors.primaryBg : "#F0F5FA",
                  borderRadius: 22.5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Regular-Sen",
                    fontSize: 14,
                    color: label === "Work" ? colors.white : colors.primaryTxt,
                  }}
                >
                  Work
                </Text>
              </Pressable>
              <Pressable
                onPress={() => setLabel(LABEL.OTHER)}
                style={{
                  width: 94,
                  height: 45,
                  backgroundColor:
                    label === "Other" ? colors.primaryBg : "#F0F5FA",
                  borderRadius: 22.5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Regular-Sen",
                    fontSize: 14,
                    color: label === "Other" ? colors.white : colors.primaryTxt,
                  }}
                >
                  Other
                </Text>
              </Pressable>
            </View>
          </View>

          {/* Save btn */}
          <View style={{ marginTop: 32 }}>
            <Text
              style={{ color: "red", fontSize: 12, fontFamily: "Regular-Sen" }}
            >
              {error && error}
            </Text>
          </View>
          <Pressable
            onPress={saveAddress}
            style={{
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 12,
              backgroundColor: loading ? "#A0A5BA" : colors.primaryBg,
              height: 62,
              marginTop: 5,
              marginBottom: 50,
            }}
            disabled={loading}
          >
            <Text
              style={{
                fontFamily: "SemiBold-Sen",
                fontSize: 14,
                color: colors.white,
                textTransform: "uppercase",
              }}
            >
              Save location
            </Text>
          </Pressable>
        </View>
        {/* Bottom Spacing */}
        {/* <View style={{ paddingBottom: 50 }} /> */}
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddNewAddress;

const styles = StyleSheet.create({});
