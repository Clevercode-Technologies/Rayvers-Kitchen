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
import React, {
  memo,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { icons } from "../../../assets/icons";
import { useNavigation } from "@react-navigation/native";
import { SCREEN_HEIGHT, SCREEN_WIDTH, colors } from "../../components/DEFAULTS";
import { msgs } from "../../DATA";
import { TouchableOpacity } from "react-native-gesture-handler";
import socket from "../../utils/socket";
import { getDateAndTime } from "../../utils/isoStringToDate";
import { ChatMessage, ChatRoom } from "../../../type";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { Chat } from "../../components";
import { appendChat, updateChatMsg } from "../../Redux/Splice/AppSplice";
import { generateRandomNumber } from "../../utils/idGenerator";
import { generateISOString } from "../../utils/isoDateGenerator";

interface TrackMsgProp {
  route: {
    params: {
      item: ChatRoom;
    };
  };
}

const TrackMsg: React.FC<TrackMsgProp> = ({ route }) => {
  const { item } = route.params;
  // console.log('item: ', item);

  const scrollRef = useRef<ScrollView>(null);

  const [read, setRead] = useState<boolean>(false);

  const userProfile = useSelector((state: RootState) => state.data.userProfile);
  const message = useSelector((state: RootState) => state.data.chatMsg);

  const dispatch = useDispatch();

  const handleMessage = () => {
    let counter = 0;
    if (message.length > 0) {
      if (userProfile?.image_url && userProfile.name) {
        dispatch(
          appendChat({
            __v: Number(generateRandomNumber(12)),
            _id: `0xb32823-${generateRandomNumber(5)}-98434LKJlkdfend`,
            clientOffset: `${socket.id}-${counter++}`,
            createdAt: generateISOString(),
            profilePic: userProfile.image_url,
            room: item._id,
            text: message,
            updatedAt: generateISOString(),
            user: userProfile.name,
          })
        );
      }
      const clientOffset = `${socket.id}-${counter++}`;
      socket.emit(
        "newMessage",
        {
          room: item._id,
          text: message,
          profilePic: userProfile?.image_url,
          user: userProfile?.name,
        },
        clientOffset
      );
    }
    dispatch(updateChatMsg(""));
  };

  const navigation = useNavigation();

  useEffect(() => setRead(true), []);

  useLayoutEffect(() => {
    socket.emit("findRoom", item._id);
    socket.on("foundRoom", (roomChats: ChatRoom) => {
      // console.log("roomChats: ", roomChats);
    });
  }, []);

  useEffect(() => {
    socket.emit("findRoom", item._id);
    socket.on("foundRoom", (roomChats: ChatRoom) => {
      // console.log("roomChats: ", roomChats);
    });
    // socket.on("roomMessage", (message: any, serverOffset: string) => {
    //   console.log(message);
    //   socket.auth.serverOffset = serverOffset;
    // });
  }, [socket, message]);

  useLayoutEffect(() => {
    scrollRef.current?.scrollToEnd({ animated: true });
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollToEnd({ animated: true });
  }, [message, socket]);

  return (
    <SafeAreaView
      style={{
        marginTop: Platform.OS === "android" ? 25 : 0,
        flex: 1,
        backgroundColor: "#121223",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: colors.white,
          paddingHorizontal: 24,
          paddingVertical: 15,
        }}
      >
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => navigation.canGoBack() && navigation.goBack()}
        >
          <Image source={icons.arrBack} style={{ width: 24, height: 24 }} />
          <Image
            source={item.profilePic}
            style={{
              width: 45,
              height: 45,
              borderRadius: 12,
            }}
          />
          <Text
            style={{
              color: colors.tertiaryTxt,
              fontSize: 17,
              fontFamily: "Regular-Sen",
              marginLeft: 16,
            }}
          >
            {item.name}
          </Text>
        </Pressable>

        {/* Implement Phone Call */}
        <Pressable>
          <Image
            source={icons.chatPhone}
            style={{
              width: 24,
              height: 24,
            }}
          />
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
            backgroundColor: "rgba(18, 18, 35, 0.33)",
          }}
          ref={scrollRef}
        >
          <Chat />
        </ScrollView>

        {/* Typing Interface */}
        <View
          style={{
            width: SCREEN_WIDTH,
            paddingHorizontal: 24,
            position: "relative",
            backgroundColor: "#F0F5FA",
            paddingVertical: 15,
          }}
        >
          <Image
            source={icons.smile}
            style={{
              width: 18,
              height: 18,
              position: "absolute",
              bottom: 35,
              left: 40,
              zIndex: 1,
            }}
          />
          <TextInput
            style={{
              borderRadius: 12,
              backgroundColor: colors.white,
              minHeight: 62,
              maxHeight: 130,
              width: "100%",
              paddingLeft: 50,
              fontSize: 12,
              fontFamily: "Regular-Sen",
              paddingTop: 25,
            }}
            placeholder="Write somethings"
            placeholderTextColor={"#ABABAB"}
            onChangeText={(text) => dispatch(updateChatMsg(text))}
            value={message}
            onSubmitEditing={handleMessage}
            multiline
          />
          {/* <TextInput 
            
          /> */}
          <Pressable
            style={{
              position: "absolute",
              bottom: 25,
              right: 35,
              zIndex: 1,
            }}
            onPress={handleMessage}
          >
            <Image
              source={icons.sendIcon}
              style={{
                width: 42,
                height: 42,
              }}
            />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default memo(TrackMsg);

const styles = StyleSheet.create({});
