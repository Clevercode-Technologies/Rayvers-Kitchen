import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { messages } from "../../DATA";
import { colors } from "../DEFAULTS";

const Messages = () => {
  return (
    <View style={{ marginTop: 6 }}>
      {messages.map((item, index) => (
        <Pressable
          key={index}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 26,
            borderBottomColor: "#F0F4F9",
            borderBottomWidth: 1,
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <ImageBackground
              source={item.person}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50 / 2,
                position: "relative",
                marginRight: 16
              }}
            >
              <View
                style={{
                  width: 12,
                  height: 12,
                  borderColor: colors.white,
                  borderWidth: 1.5,
                  backgroundColor: "#1AD52B",
                  borderRadius: 16,
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                }}
              />
            </ImageBackground>

            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Regular-Sen",
                  color: colors.primaryTxt,
                }}
              >
                Royal Parvej
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Regular-Sen",
                  color: colors.primaryTxt,
                }}
              >
                Sounds awesome!
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Regular-Sen",
                color: colors.primaryTxt,
              }}
            >
              {item.time}
            </Text>
            {/* unread msgs here */}
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({});
