import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { SCREEN_WIDTH, colors } from "../DEFAULTS";
import { ChatMessage, ChatRoom, FetchedMessage } from "../../../type";
import { icons } from "../../../assets/icons";
import socket from "../../utils/socket";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { getDateAndTime } from "../../utils/isoStringToDate";

interface ChatProp {}

const Chat: React.FC<ChatProp> = () => {
  const [read, setRead] = useState<boolean>(false);

  useEffect(() => setRead(false), []);

  const userProfile = useSelector((state: RootState) => state.data.userProfile);
  const localChat = useSelector((state: RootState) => state.data.chats);

  return (
    <View
      style={{
        width: SCREEN_WIDTH,
        alignItems: "flex-end",
      }}
    >
      {localChat.length > 0 &&
        localChat?.map((msg: FetchedMessage) => {
          const status = msg.user === userProfile?.name ? true : false;
          const { date, time } = getDateAndTime(msg?.createdAt);

          return (
            <View
              style={{
                alignSelf: status ? "flex-end" : "flex-start",
                paddingRight: 20,
                paddingVertical: 3,
                position: "relative",
              }}
              key={msg._id}
            >
              {/* Textual Message including time and read indicator */}
              <View
                style={{
                  width: "100%",
                  marginRight: status ? 0 : 0,
                  marginLeft: !status ? 50 : 0,
                }}
              >
                <View
                  style={{
                    backgroundColor: status ? '#07080F' : "#F0F5FA",
                    maxWidth: "60%",
                    minWidth: 50,
                    borderRadius: 10,
                    padding: 8,
                    position: "relative",
                    paddingBottom: 40
                  }}
                >
                  {!status && (
                    <Image
                      source={read ? icons.read : icons.unread}
                      style={{
                        position: "absolute",
                        width: 7,
                        height: 9,
                        right: -15,
                        bottom: 20,
                      }}
                    />
                  )}
                  <View style={{ backgroundColor: '#181C2E', borderRadius: 5, padding: 5 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: "Regular-Sen",
                        color: !status ? colors.primaryTxt : colors.white,
                        position: "relative",
                      }}
                    >
                      {msg.text}
                    </Text>
                  </View>

                  <Text
                    style={{
                      color: colors.white,
                      fontSize: 12,
                      fontFamily: "Regular-Sen",
                      position: "absolute",
                      right: 10,
                      bottom: 10,
                    }}
                  >
                    {time}
                  </Text>
                </View>
              </View>

              {/* Profile Photo */}
              {!status && (
                <Image
                  source={{ uri: msg.profilePic }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 40 / 2,
                    position: "absolute",
                    bottom: 30,
                    left: 15,
                    // right: msg.sender === 'recipient' && -100
                  }}
                  resizeMode="contain"
                />
              )}
            </View>
          );
        })}

        <View style={{ height: 30 }} />
    </View>
  );
};

export default Chat;
