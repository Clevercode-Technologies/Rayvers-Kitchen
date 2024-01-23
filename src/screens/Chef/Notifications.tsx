import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { memo, useState } from "react";
import { icons } from "../../../assets/icons";
import { SCREEN_WIDTH, colors } from "../../components/DEFAULTS";
import NotificationsTabs from "../../components/Chef/NotificationsTabs";
import Notifies from "../../components/Chef/Notifies";
import Messages from "../../components/Chef/Messages";

const Notifications = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <SafeAreaView style={{ marginTop: Platform.OS === "android" ? 25 : 0, backgroundColor: colors.white, flex: 1 }}>
      <View style={{ marginHorizontal: 24, width: SCREEN_WIDTH }}>
        {/* header */}
        <Pressable
          onPress={() => alert("Implement goBack navigation here")}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Image
            source={icons.back}
            style={{
              width: 45,
              height: 45,
            }}
          />

          <Text
            style={{
              fontSize: 17,
              color: "#181C2E",
              fontFamily: "Regular-Sen",
              marginLeft: 16,
            }}
          >
            Notifications
          </Text>
        </Pressable>

        <View
          style={{
            width: SCREEN_WIDTH - 48,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NotificationsTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </View>

        <View style={{ width: SCREEN_WIDTH - 48 }}>{activeTab === 0 ? <Notifies /> : <Messages />}</View>
      </View>
    </SafeAreaView>
  );
};

export default memo(Notifications);

const styles = StyleSheet.create({});
