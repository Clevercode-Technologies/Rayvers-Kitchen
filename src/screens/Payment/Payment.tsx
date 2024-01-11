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
import React, { useState } from "react";
import { icons } from "../../../assets/icons";
import { images } from "../../../assets/images";
import { SCREEN_WIDTH, colors } from "../../components/DEFAULTS";
import { formatNumber } from "../../utils/currencyFormatter";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { useNavigation } from "@react-navigation/native";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>("master");
  const card = useSelector((state: RootState) => state.data.availableCards);

  const navigation = useNavigation();

  const masterCards = card?.filter((card) => card.type === "master");
  const visaCards = card?.filter((card) => card.type === "visa");

  return (
    <SafeAreaView
      style={{ marginHorizontal: 24, position: "relative", flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        {/* Header */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
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
        </View>

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
            <Pressable
              onPress={() => setPaymentMethod("cash")}
              style={{
                backgroundColor:
                  paymentMethod === "cash" ? colors.white : "#F0F5FA",
                borderWidth: 2,
                borderColor:
                  paymentMethod === "cash" ? colors.primaryBg : colors.white,
                justifyContent: "center",
                alignItems: "center",
                width: 85,
                height: 72,
                borderRadius: 9.62,
              }}
            >
              <Image
                source={images.cash}
                style={{
                  width: 23.97,
                  height: 24,
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
              Cash
            </Text>

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
                  paymentMethod === "master" ? colors.primaryBg : colors.white,
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
        {card?.length === 0 ? (
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
                No master card added
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
                You can add a mastercard and save it for later
              </Text>
            </View>

            {/* Add New Card */}
            <TouchableOpacity
              // @ts-ignore 
              onPress={() => navigation.navigate('AddCard')}
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
                  onPress={() => navigation.navigate('addCard')}
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
            ) : paymentMethod === "master" ? (
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
                  onPress={() => navigation.navigate('AddCard')}
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
                  style={{ width: "100%", alignItems: "center", marginTop: 90 }}
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
              ₦{formatNumber(9678)}
            </Text>
          </View>
          <Pressable
          // @ts-ignore
          onPress={() => navigation.navigate('Success')}
            style={{
              width: "100%",
              height: 62,
              borderRadius: 12,
              backgroundColor: colors.primaryBg,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 28,
            }}
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
    </SafeAreaView>
  );
};

export default Payment;

const styles = StyleSheet.create({});
