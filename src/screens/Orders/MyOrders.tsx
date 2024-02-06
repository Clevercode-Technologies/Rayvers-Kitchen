import {
  Animated,
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { icons } from "../../../assets/icons";
import { SCREEN_HEIGHT, SCREEN_WIDTH, colors } from "../../components/DEFAULTS";
import { MyOrdersTab } from "../../components";

const MyOrders = () => {
  const [currentTab, setCurrentTab] = useState<string>("Ongoing");

  const tabIndicatorPosition = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef<ScrollView>(null);


  const handleTabPress = (tab: string, index: number) => {
    setCurrentTab(tab);

    // Animate the tab indicator position
    Animated.spring(tabIndicatorPosition, {
      toValue: index * SCREEN_WIDTH,
      useNativeDriver: false,
    }).start();

    // Scroll to the selected tab
    scrollViewRef.current?.scrollTo({
      x: index * SCREEN_WIDTH,
      animated: true,
    });
  };

  return (
    <SafeAreaView
      style={{
        marginTop: Platform.OS === "android" ? 25 : 0,
        height: SCREEN_HEIGHT,
        backgroundColor: colors.white,
        flex: 1
      }}
    >
      {/* Order Header */}
      {/* <Text
            style={{
              color: colors.tertiaryTxt,
              fontSize: 17,
              fontFamily: "Regular-Sen",
              textAlign: 'center',
              marginTop: 10
              // marginLeft: 16,
            }}
          >
            My Orders
          </Text> */}

      {/* Tab Selector */}
      <View
        style={{
          flexDirection: "row",
          height: 33,
          borderBottomWidth: 1,
          borderColor: "#CED7DF",
          marginTop: 24,
          paddingHorizontal: 24,
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Pressable
          style={{
            height: "100%",
            width: "50%",
            alignItems: "center",
          }}
          onPress={() => handleTabPress("Ongoing", 0)}
        >
          <Text style={{ fontSize: 14, fontFamily: "SemiBold-Sen" }}>
            {"Ongoing"}
          </Text>
        </Pressable>
        <Pressable
          style={{
            height: "100%",
            width: "50%",
            alignItems: "center",
          }}
          onPress={() => handleTabPress("History", 1)}
        >
          <Text style={{ fontSize: 14, fontFamily: "SemiBold-Sen" }}>
            {"History"}
          </Text>
        </Pressable>

        {/* Animated tab indicator */}
        <Animated.View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 24,
            width: SCREEN_WIDTH / 2,
            height: 2,
            backgroundColor: colors.primaryBg,
            transform: [{ translateX: tabIndicatorPosition }],
          }}
        />
      </View>

      <View style={{ flex: 1 }}>
        <MyOrdersTab
          setCurrentTab={setCurrentTab}
          tabIndicatorPosition={tabIndicatorPosition}
          scrollViewRef={scrollViewRef}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyOrders;

const styles = StyleSheet.create({});
