import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { icons } from "../../../assets/icons";
import { images } from "../../../assets/images";
import { SCREEN_HEIGHT, SCREEN_WIDTH, colors } from "../../components/DEFAULTS";
import { Actionsheet, Spinner, useDisclose } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { OrderOngoingPayload } from "../../../type";
import socket from "../../utils/socket";
import { generateRandomNumber } from "../../utils/idGenerator";

interface TrackOrderProps {
  route: {
    params: {
      data: OrderOngoingPayload;
    };
  };
}

const TrackOrder: React.FC<TrackOrderProps> = ({ route }) => {
  const { data: item } = route.params;
  const { isOpen, onOpen, onClose } = useDisclose();

  const [driver, setDriver] = useState<number | null>(null);

  // implement long polling
  // check if the driver's id is available

  // Mocking an actual driver every time
  let driversList = ['David Bryam', 'Jonathan Miller', 'Osato Michael', 'Joseph Agedo', 'Adanuga Musa'];

  const navigation = useNavigation();

  const createChatRoom = () => {
    const room = {
      id: generateRandomNumber(10),
      name: driversList[Math.floor(Math.random() * 5)],
      profilePic: images.logisticProfilePic,
    };
    socket.emit("createRoom", room);
    // @ts-ignore
    navigation.navigate('Notification', { tabState: 1 });
  };

  return (
    <SafeAreaView
      style={{ position: "relative", backgroundColor: colors.white }}
    >
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "87%",
          left: 24,
          position: "absolute",
          justifyContent: "space-between",
          top: 60,
        }}
      >
        <Pressable
          onPress={() => navigation.canGoBack() && navigation.goBack()}
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={icons.backArrDark}
            style={{ width: 45, height: 45 }}
            resizeMode="contain"
          />

          <Text
            style={{
              fontSize: 17,
              fontFamily: "Regular-Sen",
              color: "#181C2E",
              marginLeft: 16,
            }}
          >
            Track Order
          </Text>
        </Pressable>

        <Pressable
          onPress={onOpen}
          style={{
            width: 45,
            height: 45,
            backgroundColor: colors.white,
            borderRadius: 45 / 2,
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10,
          }}
        >
          <Image
            source={icons.more}
            style={{
              width: 20,
              height: 4,
            }}
          />
        </Pressable>
      </View>

      <Image
        source={images.mapDemo}
        style={{
          width: SCREEN_WIDTH,
          height: SCREEN_HEIGHT,
          zIndex: -1,
        }}
      />

      <Actionsheet
        style={{
          width: SCREEN_WIDTH,
          height: SCREEN_HEIGHT,
        }}
        isOpen={isOpen}
        onClose={onClose}
      >
        <Actionsheet.Content
          style={{
            paddingHorizontal: 24,
            // height: sheetHeight
            backgroundColor: colors.white,
          }}
        >
          <View style={{ flexDirection: "row", width: "90%", marginTop: 24 }}>
            <Image
              source={{ uri: item?.dish?.images[0].file }}
              style={{
                width: 63,
                height: 63,
                borderRadius: 10,
              }}
            />

            <View style={{ marginLeft: 10 }}>
              <Text
                style={{
                  color: "#181C2E",
                  fontSize: 18,
                  fontFamily: "Regular-Sen",
                  marginBottom: 5,
                }}
              >
                {item.dish.name}
              </Text>
              <Text
                style={{
                  color: "#A0A5BA",
                  fontSize: 14,
                  fontFamily: "Regular-Sen",
                }}
              >
                Orderd at 06 Sept, 10:00pm
              </Text>
              <Text
                style={{
                  color: "#646982",
                  fontFamily: "SemiBold-Sen",
                  fontSize: 13,
                  marginTop: 16,
                }}
              >
                {item.quantity} Item{item.quantity > 1 ? "s" : ""}
              </Text>
            </View>
          </View>

          <View>
            <Text
              style={{
                color: "#181C2E",
                fontSize: 30,
                fontFamily: "ExtraBold-Sen",
                marginTop: 36,
                textAlign: "center",
              }}
            >
              {25} min
            </Text>

            <Text
              style={{
                textAlign: "center",
                color: "#A0A5BA",
                textTransform: "uppercase",
                marginBottom: 36,
                marginTop: 10,
              }}
            >
              Estimated delivery time
            </Text>
          </View>

          <View style={{ width: "100%" }}>
            <Text
              style={{
                fontSize: 13,
                marginLeft: 54,
                fontFamily: "Regular-Sen",
                marginBottom: 32,
                color: colors.primaryBg,
              }}
            >
              Your order has been received
            </Text>
            <Text
              style={{
                fontSize: 13,
                marginLeft: 54,
                fontFamily: "Regular-Sen",
                marginBottom: 32,
                color: "#A0A5BA",
              }}
            >
              The restaurant is preparing your food
            </Text>
            <Text
              style={{
                fontSize: 13,
                marginLeft: 54,
                fontFamily: "Regular-Sen",
                marginBottom: 32,
                color: "#A0A5BA",
              }}
            >
              Your order has been picked up for delivery
            </Text>
            <Text
              style={{
                fontSize: 13,
                marginLeft: 54,
                fontFamily: "Regular-Sen",
                marginBottom: 32,
                color: "#A0A5BA",
              }}
            >
              Order arriving soon!
            </Text>
          </View>

          <View
            style={{
              height: 116,
              borderWidth: 1,
              borderColor: "#E8E8E8",
              borderRadius: 35,
              width: SCREEN_WIDTH,
              marginBottom: -45,
              padding: 30,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              {/* Image */}
              <Image
                source={icons.profile}
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: 54 / 2,
                }}
              />
              <View style={{ marginLeft: 11 }}>
                <Text
                  style={{
                    color: "#181C2E",
                    fontSize: 20,
                    fontFamily: "SemiBold-Sen",
                    marginBottom: 10,
                  }}
                >
                  Robert F.
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "Regular-Sen",
                    color: "#A0A5BA",
                  }}
                >
                  Courier
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Pressable onPress={() => alert("calling...")}>
                <Image
                  source={icons.call}
                  style={{
                    width: 95,
                    height: 95,
                  }}
                />
              </Pressable>
              <Pressable onPress={createChatRoom}>
                <Image
                  source={icons.chat}
                  style={{
                    width: 45,
                    height: 45,
                    marginTop: -15,
                  }}
                />
              </Pressable>
            </View>
          </View>

          {/* Tracking indicators absolutely positioned */}
          <View
            style={{
              position: "absolute",
              left: 24,
              bottom: 145,
            }}
          >
            <Image
              source={icons.complete}
              style={{
                width: 17,
                height: 17,
              }}
              resizeMode="contain"
            />
            <View
              style={{
                width: 1,
                height: 30,
                backgroundColor: colors.primaryBg,
                marginLeft: 8,
              }}
            />
            <Spinner
              style={{
                width: 17,
                height: 17,
              }}
              color={colors.primaryBg}
            />
            <View
              style={{
                width: 1,
                height: 30,
                backgroundColor: colors.grayText,
                marginLeft: 8,
              }}
            />
            <Image
              source={icons.incomplete}
              style={{
                width: 17,
                height: 17,
              }}
              resizeMode="contain"
            />
            <View
              style={{
                width: 1,
                height: 30,
                backgroundColor: colors.grayText,
                marginLeft: 8,
              }}
            />
            <Image
              source={icons.incomplete}
              style={{
                width: 17,
                height: 17,
              }}
              resizeMode="contain"
            />
          </View>
        </Actionsheet.Content>
      </Actionsheet>
    </SafeAreaView>
  );
};

export default TrackOrder;

const styles = StyleSheet.create({});
