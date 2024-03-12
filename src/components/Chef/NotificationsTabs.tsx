import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SCREEN_WIDTH, colors } from "../DEFAULTS";
import Notifications from "../../screens/Chef/Notifications";
import Messages from "./Messages";

interface NotificationProps {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}

const NotificationsTabs: React.FC<NotificationProps> = ({ activeTab, setActiveTab }) => {
  
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: SCREEN_WIDTH,
        marginTop: 24,
        borderBottomWidth: 2,
        borderBottomColor: "#CED7DF",
      }}
    >
      <Pressable
        style={{
          height: 33,
          borderBottomColor: activeTab === 0 ? colors.primaryBg : "#CED7DF",
          borderBottomWidth: activeTab === 0 ? 3 : 0,
          width: (SCREEN_WIDTH - 48) / 2,
        }}
        onPress={() => setActiveTab(0)}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: "SemiBold-Sen",
            fontSize: 14,
            color: activeTab === 0 ? colors.primaryBg : "#CED7DF",
          }}
        >
          Notifications
        </Text>
      </Pressable>
      <Pressable
        style={{
          height: 33,
          borderBottomColor: activeTab === 1 ? colors.primaryBg : "#CED7DF",
          borderBottomWidth: activeTab === 1 ? 3 : 0,
          width: (SCREEN_WIDTH - 48) / 2,
        }}
        onPress={() => setActiveTab(1)}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: "SemiBold-Sen",
            fontSize: 14,
            color: activeTab === 1 ? colors.primaryBg : "#CED7DF",
          }}
        >
          Messages
        </Text>
      </Pressable>
    </View>
  );
};

export default NotificationsTabs;

const styles = StyleSheet.create({});
