import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { memo, useState } from "react";
import { Actionsheet, useDisclose } from "native-base";
import { images } from "../../../assets/images";
import { colors } from "../../components/DEFAULTS";
import { icons } from "../../../assets/icons";

const Call = () => {
  const [callState, setCallState] = useState<string>("Connecting");
  const [endCall, setEndCall] = useState<boolean>(false);
  const [boostCall, setBootCall] = useState<boolean>(false);
  const [muteMic, setMuteMic] = useState<boolean>(false);

  const { onOpen, onClose } = useDisclose();

  return (
    <Actionsheet
      style={{ backgroundColor: "rgba(39,63,85,0.67)" }}
      isOpen={true}
      onClose={onClose}
    >
      <Actionsheet.Content
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <View
          style={{ alignItems: "center", width: "100%", paddingHorizontal: 50 }}
        >
          <Image
            source={images.logisticProfilePic}
            style={{
              width: 105.01,
              height: 105.01,
              marginTop: 23,
              borderRadius: 1000,
            }}
            resizeMode="contain"
          />

          <View style={{}}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: "SemiBold-Sen",
                color: colors.tertiaryTxt,
                marginTop: 14,
                marginBottom: 7,
                textAlign: "center",
              }}
            >
              Robert Fox
            </Text>
            <Text
              style={{
                color: "#979797",
                fontFamily: "Regular-Sen",
                fontSize: 16,
                textAlign: "center",
              }}
            >
              {callState}.......
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginTop: 30,
            }}
          >
            <Pressable onPress={() => setMuteMic((prevState) => !prevState)}>
              {!muteMic ? (
                <Image
                  source={icons.micMute}
                  style={{
                    width: 48,
                    height: 48,
                  }}
                />
              ) : (
                <Image
                  source={icons.micUnmute}
                  style={{
                    width: 48,
                    height: 48,
                  }}
                />
              )}
            </Pressable>
            <Pressable onPress={() => alert("Call ended")}>
              <Image
                source={icons.endCall}
                style={{
                  width: 115,
                  height: 115,
                  marginHorizontal: 30,
                }}
              />
            </Pressable>
            <Pressable onPress={() => setBootCall((prevState) => !prevState)}>
              {!boostCall ? (
                <Image
                  source={icons.speaker}
                  style={{
                    width: 48,
                    height: 48,
                  }}
                />
              ) : (
                <Image
                  source={icons.boostedSpeaker}
                  style={{
                    width: 48,
                    height: 48,
                  }}
                />
              )}
            </Pressable>
          </View>
        </View>
      </Actionsheet.Content>
    </Actionsheet>
  );
};

export default memo(Call);

const styles = StyleSheet.create({});
