import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { icons } from "../../../assets/icons";
import { useNavigation } from "@react-navigation/native";
import { SCREEN_HEIGHT, SCREEN_WIDTH, colors } from "../../components/DEFAULTS";
import { msgs } from "../../DATA";

const TrackMsg = () => {
  const [message, setMessage] = useState<string>("");

  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{ marginTop: Platform.OS === "android" ? 25 : 0, flex: 1 }}
    >
      <View>
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 24,
            marginBottom: 30,
          }}
          onPress={() => {}}
        >
          <Image source={icons.close} style={{ width: 45, height: 45 }} />
          <Text
            style={{
              color: colors.tertiaryTxt,
              fontSize: 17,
              fontFamily: "Regular-Sen",
              marginLeft: 16,
            }}
          >
            Robert Fox
          </Text>
        </Pressable>
      </View>

      <View
        style={{
          flex: 1,
          width: SCREEN_WIDTH,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{}}
          style={{
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT,
            // marginHorizontal: 24,
          }}
        >
          <View
            style={{
              width: SCREEN_WIDTH,
              alignItems: "flex-end",
            }}
          >
            {msgs.map((msg) => (
              <View
                style={{
                  alignSelf:
                    msg.sender === "me"
                      ? "flex-end"
                      : msg.sender
                      ? "flex-start"
                      : "flex-end",
                  padding: 24,
                  position: "relative",
                }}
                key={msg.id}
              >
                {/* Textual Message including time and read indicator */}
                <View
                  style={{
                    width: "100%",
                    marginRight: msg.sender === "me" ? 50 : 0,
                    marginLeft: msg.sender === "recipient" ? 50 : 0,
                  }}
                >
                  <Text
                    style={{
                      color: "#ABABAB",
                      fontSize: 12,
                      fontFamily: "Regular-Sen",
                      alignSelf:
                        msg.sender === "recipient" ? "flex-end" : "flex-start",
                      marginBottom: 10,
                    }}
                  >
                    {msg.time}
                  </Text>
                  <View
                    style={{
                      backgroundColor:
                        msg.sender === "me" ? colors.primaryBg : "#F0F5FA",
                      maxWidth: "60%",
                      borderRadius: 10,
                      padding: 16,
                      position: "relative",
                    }}
                  >
                    {msg.sender === "me" && (
                      <Image
                        source={msg.read ? icons.read : icons.unread}
                        style={{
                          position: "absolute",
                          width: 7,
                          height: 9,
                          left: -15,
                          bottom: 20,
                        }}
                      />
                    )}
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: "Regular-Sen",
                        color:
                          msg.sender === "recipient"
                            ? colors.primaryTxt
                            : colors.white,
                      }}
                    >
                      {msg.message}
                    </Text>
                  </View>
                </View>

                {/* Profile Photo */}
                {msg.sender === "recipient" && (
                  <Image
                    source={msg.photo}
                    style={{
                      width: 40,
                      height: 40,
                      position: "absolute",
                      bottom: 30,
                      left: 15,
                      // right: msg.sender === 'recipient' && -100
                    }}
                    resizeMode="contain"
                  />
                )}
                {msg.sender === "me" && (
                  <Image
                    source={msg.photo}
                    style={{
                      width: 40,
                      height: 40,
                      position: "absolute",
                      bottom: 30,
                      //   left: '50%',
                      right: 15,
                    }}
                    resizeMode="contain"
                  />
                )}
              </View>
            ))}
          </View>
        </ScrollView>

        {/* Typing Interface */}
        <View
          style={{
            marginTop: 20,
            width: SCREEN_WIDTH,
            paddingHorizontal: 24,
            position: "relative",
          }}
        >
          <Image
            source={icons.smile}
            style={{
              width: 18,
              height: 18,
              position: "absolute",
              top: 20,
              left: 40,
              zIndex: 1,
            }}
          />
          <TextInput
            onChangeText={(text) => setMessage(text)}
            style={{
              borderRadius: 12,
              backgroundColor: "#F0F5FA",
              height: 62,
              width: "100%",
              paddingLeft: 50,
              fontSize: 12,
              fontFamily: "Regular-Sen",
            }}
            placeholder="Write somethings"
            placeholderTextColor={"#ABABAB"}
          />
          <Pressable onPress={() => alert('Implement chat forum')}>
            <Image
              source={icons.sendIcon}
              style={{
                width: 42,
                height: 42,
                position: "absolute",
                top: -53,
                right: 20,
                zIndex: 1,
              }}
            />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TrackMsg;

const styles = StyleSheet.create({});
