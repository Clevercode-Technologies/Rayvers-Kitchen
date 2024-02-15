import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { RootState } from "../../../Redux/store";
import { BASE_URL, SCREEN_WIDTH, colors } from "../../../components/DEFAULTS";
import { images } from "../../../../assets/images";
import { icons } from "../../../../assets/icons";
import { formatNumber } from "../../../utils/currencyFormatter";
import { CardDetails, RedirectParams } from "../../../../type";
import { useStripe } from "@stripe/stripe-react-native";
import { Center, Spinner } from "native-base";
import { resetCart } from "../../../Redux/Splice/AppSplice";
import { generateRandomNumber } from "../../../utils/idGenerator";
import { PayWithFlutterwave } from "flutterwave-react-native";

const Payment = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingOrders, setLoadingOrders] = useState<boolean>(false);
  const cartSubTotal = useSelector(
    (state: RootState) => state.data.cartSubTotal
  );
  const carts = useSelector((state: RootState) => state.data.carts);

  // console.log(cartSubTotal);
  const token = useSelector((state: RootState) => state.data.token);
  const userInfo = useSelector((state: RootState) => state.data.userInfo);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const sendOrders = async (payment_status: boolean) => {
    setLoadingOrders(true);
    try {
      const response = await fetch(`${BASE_URL}api/orders/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify({
          total_price: cartSubTotal,
          payment_status,
          is_delivered: false,
          items: carts?.flatMap((item) => ({
            dish_id: item.id,
            restaurant_id: item.restaurant,
            amount: item.price,
            quantity: item.itemCount,
          })),
        }),
      });

      if (response.ok) {
        setLoadingOrders(false);

        const result = await response.json();
        // console.log('result: from sending orders', result);

        dispatch(resetCart());
        setTimeout(() => {
          // @ts-ignore
          navigation.navigate("Success");
        }, 2000);
      } else {
        setLoadingOrders(false);

        const res = await response.json();
        console.log(JSON.stringify(res));
      }
    } catch (error: any) {
      console.log(`Error from sendOrders: ${error.message}`);
    }
  };

  const makePayments = (data: RedirectParams) => {
    console.log("data: ", data);
    // sendOrders(true);
  };

  return (
    <SafeAreaView
      style={{ position: "relative", flex: 1, backgroundColor: colors.white }}
    >
      <View style={{ marginHorizontal: 24, flex: 1 }}>
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          {/* Header */}
          <Pressable
            onPress={() => navigation.canGoBack() && navigation.goBack()}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Image
              source={icons.back}
              style={{
                width: 45,
                height: 45,
              }}
              resizeMode="contain"
            />

            <Text
              style={{
                color: "#181C2E",
                fontSize: 17,
                fontFamily: "Regular-Sen",
                marginLeft: 18,
              }}
            >
              Payment
            </Text>
          </Pressable>

          {/* Card Selection */}
          {/* <View
            style={{
              marginTop: 30,
              width: SCREEN_WIDTH,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              alignSelf: "center",
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              {paymentMethod === "cash" && (
                <Image
                  source={icons.activePayment}
                  style={{
                    width: 24,
                    height: 24,
                    position: "absolute",
                    top: -5,
                    right: -5,
                  }}
                />
              )}
            </View>

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                marginHorizontal: 16,
              }}
            >
              <Pressable
                onPress={() => setPaymentMethod("visa")}
                style={{
                  backgroundColor:
                    paymentMethod === "visa" ? colors.white : "#F0F5FA",
                  borderWidth: 2,
                  borderColor:
                    paymentMethod === "visa" ? colors.primaryBg : colors.white,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 85,
                  height: 72,
                  borderRadius: 9.62,
                }}
              >
                <Image
                  source={images.visa}
                  style={{
                    width: 40.7,
                    height: 13.2,
                  }}
                  resizeMode="contain"
                />
              </Pressable>

              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Regular-Sen",
                  color: "#464E57",
                  marginTop: 5,
                }}
              >
                Visa Card
              </Text>

              {paymentMethod === "visa" && (
                <Image
                  source={icons.activePayment}
                  style={{
                    width: 24,
                    height: 24,
                    position: "absolute",
                    top: -5,
                    right: -5,
                  }}
                />
              )}
            </View>

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Pressable
                onPress={() => setPaymentMethod("master")}
                style={{
                  backgroundColor:
                    paymentMethod === "master" ? colors.white : "#F0F5FA",
                  borderWidth: 2,
                  borderColor:
                    paymentMethod === "master"
                      ? colors.primaryBg
                      : colors.white,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 85,
                  height: 72,
                  borderRadius: 9.62,
                }}
              >
                <Image
                  source={images.masterCard}
                  style={{
                    width: 32.22,
                    height: 24.79,
                  }}
                  resizeMode="contain"
                />
              </Pressable>

              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Regular-Sen",
                  color: "#464E57",
                  marginTop: 5,
                }}
              >
                Master Card
              </Text>

              {paymentMethod === "master" && (
                <Image
                  source={icons.activePayment}
                  style={{
                    width: 24,
                    height: 24,
                    position: "absolute",
                    top: -5,
                    right: -5,
                  }}
                />
              )}
            </View>
          </View> */}

          <View style={{ position: "absolute", bottom: 60, width: "100%" }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 80,
              }}
            >
              <Text
                style={{
                  color: "#A0A5BA",
                  fontSize: 14,
                  fontFamily: "Regular-Sen",
                }}
              >
                Total:
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  fontFamily: "Regular-Sen",
                  color: "#181C2E",
                  marginLeft: 14,
                }}
              >
                ₦{formatNumber(cartSubTotal)}
              </Text>
            </View>

            {userInfo && (
              <PayWithFlutterwave
                onRedirect={makePayments}
                options={{
                  tx_ref: generateRandomNumber(10),
                  authorization:
                    "FLWPUBK_TEST-6475cbf72a720613da57b786be2f2604-X",
                  customer: {
                    email: userInfo?.email,
                  },
                  amount: cartSubTotal,
                  currency: "NGN",
                  payment_options: "card",
                }}
                customButton={(props) => (
                  <Pressable
                    {...props}
                    style={{
                      width: "100%",
                      height: 62,
                      borderRadius: 12,
                      backgroundColor: loading ? "#A0A5BA" : colors.primaryBg,
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 28,
                    }}
                    disabled={loading}
                  >
                    <Text
                      style={{
                        color: colors.white,
                        textTransform: "uppercase",
                        fontSize: 14,
                        fontFamily: "SemiBold-Sen",
                      }}
                    >
                      Pay & Confirm
                    </Text>
                  </Pressable>
                )}
              />
            )}
          </View>
        </ScrollView>
      </View>

      {loading && (
        <Center>
          <View
            style={{
              marginTop: -1000,
              width: 200,
              height: 110,
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
                fontSize: 18,
                color: colors.white,
                marginTop: 10,
              }}
            >
              Preparing Payments
            </Text>
          </View>
        </Center>
      )}

      {loadingOrders && (
        <Center>
          <View
            style={{
              marginTop: -1000,
              width: 200,
              height: 110,
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
                fontSize: 18,
                color: colors.white,
              }}
            >
              Sending Orders
            </Text>
          </View>
        </Center>
      )}
    </SafeAreaView>
  );
};

export default Payment;

const styles = StyleSheet.create({});
