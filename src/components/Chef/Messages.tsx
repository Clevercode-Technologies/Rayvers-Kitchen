import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { SCREEN_HEIGHT, SCREEN_WIDTH, colors } from "../DEFAULTS";
import { useNavigation } from "@react-navigation/native";
import { images } from "../../../assets/images";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { ScrollView } from "react-native";
import {
  GradientProps,
  SkeletonContainer,
} from "react-native-dynamic-skeletons";
import { LinearGradient } from "expo-linear-gradient";
import { RefreshControl } from "react-native-gesture-handler";
import { generateRandomNumber } from "../../utils/idGenerator";
import socket from "../../utils/socket";
import { ChatRoom } from "../../../type";
import { getDateAndTime } from "../../utils/isoStringToDate";
import { updateChats } from "../../Redux/Splice/AppSplice";
import { truncTxt } from "../../utils/truncate";

const Gradient = (props: GradientProps) => <LinearGradient {...props} />;

const Messages = () => {
  const [hotMessages, setHotMessages] = useState<ChatRoom[]>([]);
  const [error, setError] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const chatMsg = useSelector((state: RootState) => state.data.chatMsg);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const getRooms = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:4000/api/chat-rooms", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        setLoading(false);
        setError("Network response was not ok");
        console.log("Network response was not ok");
      }

      setLoading(false);
      const data = await response.json();
      setHotMessages(data);
      setError(null);
      // console.log("data: ", data);
    } catch (error: any) {
      setLoading(false);
      console.log("error: ", error.message);
      setError(error.message);
    }
  };

  useEffect(() => {
    getRooms();
  }, [chatMsg, socket]);

  useEffect(() => {
    socket.on("roomsList", (rooms: any) => {
      setHotMessages(rooms);
    });
  }, [socket]);


  return (
    <View
      style={{
        width: SCREEN_WIDTH - 48,
        height: SCREEN_HEIGHT,
      }}
    >
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={getRooms}
            tintColor={colors.primaryBg}
            enabled={true}
            style={{}}
          />
        }
        style={{ marginTop: 6 }}
      >
        <View
          style={{
            marginTop: 24,
          }}
        >
          {loading &&
            new Array(6).fill(0).map((_) => (
              <SkeletonContainer
                animationType="leftRight"
                Gradient={Gradient}
                isLoading={loading}
                duration={2000}
                style={{}}
                key={generateRandomNumber(4)}
              >
                <View
                  style={{
                    height: 60,
                    width: SCREEN_WIDTH - 40,
                    marginBottom: 5,
                    borderRadius: 8,
                    marginHorizontal: 13,
                  }}
                />
              </SkeletonContainer>
            ))}
        </View>
        {!loading &&
          hotMessages?.map((item: ChatRoom, index: number) => {
            const { time } = getDateAndTime(
              hotMessages[index]?.messages[
                hotMessages[index]?.messages.length - 1
              ]?.createdAt
            );
            return (
              <Pressable
                onPress={() => {
                  // update chats
                  dispatch(updateChats(item.messages));
                  // @ts-ignore
                  navigation.navigate("TrackMsg", { item });
                }}
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
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <ImageBackground
                    source={item.profilePic}
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 50 / 2,
                      position: "relative",
                      marginRight: 16,
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
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: "Regular-Sen",
                        color: colors.primaryTxt,
                      }}
                    >
                      {
                        truncTxt(hotMessages[index]?.messages[
                          hotMessages[index]?.messages.length - 1
                        ]?.text)
                      }
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
                    {time === `${undefined}:${undefined}` ? "00:00" : time}
                  </Text>
                  {/* unread msgs here */}
                </View>
              </Pressable>
            );
          })}

        {!loading && (hotMessages?.length === 0 || hotMessages === null) && (
          <View
            style={{
              width: SCREEN_WIDTH - 48,
              borderWidth: 2,
              borderColor: colors.primaryBg,
              borderStyle: "dashed",
              borderRadius: 5,
              padding: 12,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Regular-Sen",
                color: colors.tertiaryTxt,
                textAlign: "center",
              }}
            >
              You have no active chats
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({});
