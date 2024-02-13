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
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { RootState } from "../../../Redux/store";
import { BASE_URL, SCREEN_WIDTH, colors } from "../../../components/DEFAULTS";
import { images } from "../../../../assets/images";
import { icons } from "../../../../assets/icons";
import { formatNumber } from "../../../utils/currencyFormatter";
import { CardDetails } from "../../../../type";
import { useStripe } from "@stripe/stripe-react-native";
import { Spinner } from "native-base";

enum CardType {
  "MASTER" = "master",
  "VISA" = "visa",
}

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>(CardType.MASTER);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const availableCards = useSelector(
    (state: RootState) => state.data.availableCards
  );
  const cartSubTotal = useSelector(
    (state: RootState) => state.data.cartSubTotal
  );

  // console.log(cartSubTotal);
  const token = useSelector((state: RootState) => state.data.token);
  const userInfo = useSelector((state: RootState) => state.data.userInfo);
  const [cards, setCards] = useState<null | CardDetails[]>(null);

  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  // console.log("cards: ", cards);

  useEffect(() => {
    setCards(availableCards);
  }, [availableCards]);

  const navigation = useNavigation();

  const masterCards = cards?.filter((card) => card.type === CardType.MASTER);
  const visaCards = cards?.filter((card) => card.type === CardType.VISA);

  const makePayments = async () => {
    setLoading(true);
    try {
      const result = await fetch(`${BASE_URL}api/payment/intent/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify({
          amount: Number(cartSubTotal * 100),
          currency_code: "ngn",
        }),
      });

      if (result.ok) {
        setLoading(false);
        const response = await result.json();

        console.log("payment_intent_secret: ", response.payment_intent_secret);

        const { error: paymentSheetError } = await initPaymentSheet({
          merchantDisplayName: "Rayvers Kitchen",
          paymentIntentClientSecret: response.payment_intent_secret,
          defaultBillingDetails: {
            name: userInfo?.name,
          },
        });

        if (paymentSheetError) {
          console.log(
            `Error from PaymentSheet:  ${paymentSheetError.code}`,
            paymentSheetError.message
          );
          return;
        }

        const { error: paymentError } = await presentPaymentSheet();
        if (paymentError) {
          console.log(
            `Error code from Payment: ${paymentError.code}`,
            paymentError.message
          );
          return;
        }
      } else {
        setLoading(false);
        const response = await result.json();
        console.log(`Request Failed: ${JSON.stringify(response)}`);
      }
    } catch (error: any) {
      console.log(`Request Error: ${JSON.stringify(error.message)}`);
    }
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
          <View
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
          </View>

          {/* Conditional to check if card information exists or not. */}
          {/* No cards */}
          {cards === null ? (
            <View>
              <View
                style={{
                  backgroundColor: "#F7F8F9",
                  marginTop: 25,
                  alignItems: "center",
                  paddingVertical: 30,
                  borderRadius: 10,
                }}
              >
                <Image
                  source={images.cardPic}
                  style={{
                    width: 168,
                    height: 106,
                  }}
                />
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 16,
                    fontFamily: "SemiBold-Sen",
                    marginTop: 15,
                  }}
                >
                  No cards added
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: "Regular-Sen",
                    marginHorizontal: 61,
                    textAlign: "center",
                    color: "#2D2D2D",
                    marginTop: 10,
                  }}
                >
                  You can add a card and save it for later
                </Text>
              </View>

              {/* Add New Card */}
              <TouchableOpacity
                // @ts-ignore
                onPress={() => navigation.navigate("AddCard")}
                style={{
                  width: "100%",
                  height: 62,
                  borderWidth: 2,
                  borderColor: "#F0F5FA",
                  borderRadius: 10,
                  marginTop: 15,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: colors.primaryBg,
                    fontSize: 14,
                    fontFamily: "SemiBold-Sen",
                    textTransform: "uppercase",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={icons.add}
                    style={{ width: 15, height: 15, marginRight: 10 }}
                    resizeMode="contain"
                  />
                  Add New
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              {paymentMethod === "visa" ? (
                !visaCards?.length ? (
                  <View
                    style={{
                      backgroundColor: "#F7F8F9",
                      marginTop: 25,
                      alignItems: "center",
                      paddingVertical: 30,
                      borderRadius: 10,
                    }}
                  >
                    <Image
                      source={images.cardPic}
                      style={{
                        width: 168,
                        height: 106,
                      }}
                    />
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 16,
                        fontFamily: "SemiBold-Sen",
                        marginTop: 15,
                      }}
                    >
                      No visa cards added
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        fontFamily: "Regular-Sen",
                        marginHorizontal: 61,
                        textAlign: "center",
                        color: "#2D2D2D",
                        marginTop: 10,
                      }}
                    >
                      You can add a visa card and save it for later
                    </Text>
                  </View>
                ) : (
                  <View>
                    {visaCards?.map((vc, index) => (
                      <Pressable
                        style={{
                          width: "100%",
                          height: 82,
                          backgroundColor: "#F4F5F7",
                          borderRadius: 10,
                          padding: 20,
                          marginTop: 25,
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                        key={index}
                      >
                        <View>
                          <Text
                            style={{ fontSize: 16, fontFamily: "SemiBold-Sen" }}
                          >
                            Visa Card
                          </Text>
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                              marginTop: 10,
                            }}
                          >
                            <View
                              style={{
                                backgroundColor: colors.white,
                                width: 28,
                                height: 17.65,
                                borderRadius: 5,
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <Image
                                source={images.visa}
                                style={{
                                  width: 20,
                                  height: 15,
                                }}
                                resizeMode="contain"
                              />
                            </View>
                            <Text
                              style={{
                                fontSize: 16,
                                fontFamily: "Regular-Sen",
                                color: "#32343E",
                              }}
                            >
                              *************
                            </Text>
                            <Text>
                              {vc.number.split(",").join()[
                                vc.number.split(",").join().length - 3
                              ] +
                                vc.number.split(",").join()[
                                  vc.number.split(",").join().length - 2
                                ] +
                                vc.number.split(",").join()[
                                  vc.number.split(",").join().length - 1
                                ]}
                            </Text>
                          </View>
                        </View>

                        <Image
                          source={icons.downFinance}
                          style={{ width: 10.75, height: 7.68 }}
                          resizeMode="contain"
                        />
                      </Pressable>
                    ))}

                    <TouchableOpacity
                      // @ts-ignore
                      onPress={() => navigation.navigate("addCard")}
                      style={{
                        width: "100%",
                        height: 62,
                        borderWidth: 2,
                        borderColor: "#F0F5FA",
                        borderRadius: 10,
                        marginTop: 15,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: colors.primaryBg,
                          fontSize: 14,
                          fontFamily: "SemiBold-Sen",
                          textTransform: "uppercase",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          source={icons.add}
                          style={{ width: 15, height: 15, marginRight: 10 }}
                          resizeMode="contain"
                        />
                        Add New
                      </Text>
                    </TouchableOpacity>
                  </View>
                )
              ) : paymentMethod === "master" ? (
                !masterCards?.length ? (
                  <View
                    style={{
                      backgroundColor: "#F7F8F9",
                      marginTop: 25,
                      alignItems: "center",
                      paddingVertical: 30,
                      borderRadius: 10,
                    }}
                  >
                    <Image
                      source={images.cardPic}
                      style={{
                        width: 168,
                        height: 106,
                      }}
                    />
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 16,
                        fontFamily: "SemiBold-Sen",
                        marginTop: 15,
                      }}
                    >
                      No master cards added
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        fontFamily: "Regular-Sen",
                        marginHorizontal: 61,
                        textAlign: "center",
                        color: "#2D2D2D",
                        marginTop: 10,
                      }}
                    >
                      You can add a master card and save it for later
                    </Text>
                  </View>
                ) : (
                  <View>
                    {masterCards?.map((mc, index) => (
                      <Pressable
                        style={{
                          width: "100%",
                          height: 82,
                          backgroundColor: "#F4F5F7",
                          borderRadius: 10,
                          padding: 20,
                          marginTop: 25,
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                        key={index}
                      >
                        <View>
                          <Text
                            style={{ fontSize: 16, fontFamily: "SemiBold-Sen" }}
                          >
                            Master Card
                          </Text>
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                              marginTop: 10,
                            }}
                          >
                            <View
                              style={{
                                backgroundColor: "#2D2D2D",
                                width: 28,
                                height: 17.65,
                                borderRadius: 5,
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <Image
                                source={images.masterCard}
                                style={{
                                  width: 20,
                                  height: 10,
                                }}
                              />
                            </View>
                            <Text
                              style={{
                                fontSize: 16,
                                fontFamily: "Regular-Sen",
                                color: "#32343E",
                              }}
                            >
                              *************
                            </Text>
                            <Text>
                              {mc.number.split(",").join()[
                                mc.number.split(",").join().length - 3
                              ] +
                                mc.number.split(",").join()[
                                  mc.number.split(",").join().length - 2
                                ] +
                                mc.number.split(",").join()[
                                  mc.number.split(",").join().length - 1
                                ]}
                            </Text>
                          </View>
                        </View>

                        <Image
                          source={icons.downFinance}
                          style={{ width: 10.75, height: 7.68 }}
                          resizeMode="contain"
                        />
                      </Pressable>
                    ))}

                    <TouchableOpacity
                      // @ts-ignore
                      onPress={() => navigation.navigate("AddCard")}
                      style={{
                        width: "100%",
                        height: 62,
                        borderWidth: 2,
                        borderColor: "#F0F5FA",
                        borderRadius: 10,
                        marginTop: 15,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: colors.primaryBg,
                          fontSize: 14,
                          fontFamily: "SemiBold-Sen",
                          textTransform: "uppercase",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          source={icons.add}
                          style={{ width: 15, height: 15, marginRight: 10 }}
                          resizeMode="contain"
                        />
                        Add New
                      </Text>
                    </TouchableOpacity>
                  </View>
                )
              ) : (
                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: "SemiBold-Sen",
                      marginTop: 32,
                      textAlign: "center",
                      color: colors.primaryTxt,
                    }}
                  >
                    Confirm Payment
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontFamily: "Regular-Sen",
                      textAlign: "center",
                      color: colors.abstractTxt,
                    }}
                  >
                    on delivery
                  </Text>

                  <View
                    style={{
                      width: "100%",
                      alignItems: "center",
                      marginTop: 90,
                    }}
                  >
                    <Image
                      source={icons.successVerified}
                      style={{
                        width: 260.28,
                        height: 181,
                      }}
                      resizeMode="contain"
                    />
                  </View>
                </View>
              )}
            </View>
          )}

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
            <Pressable
              // @ts-ignore
              // onPress={() => navigation.navigate("Success")}
              onPress={() => {
                makePayments();
              }}
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
          </View>
        </ScrollView>
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

export default Payment;

const styles = StyleSheet.create({});
