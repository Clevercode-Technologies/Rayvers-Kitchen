import { Animated, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { History, Ongoing } from "../../screens";
import { SCREEN_WIDTH, colors } from "../DEFAULTS";

interface MyOrderTabProps {
    scrollViewRef: React.RefObject<ScrollView>;
    setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
    tabIndicatorPosition: Animated.Value;
}

const MyOrdersTab:React.FC<MyOrderTabProps> = ({ scrollViewRef, setCurrentTab, tabIndicatorPosition }) => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
      scrollEventThrottle={35}
      style={{ marginTop: 35 }}
      horizontal
      ref={scrollViewRef}
      onScroll={(event) => {
        // Update the active tab based on scroll position
        const offsetX = event.nativeEvent.contentOffset.x;
        const activeTab = offsetX >= SCREEN_WIDTH / 2 ? "History" : "Ongoing";
        setCurrentTab(activeTab);

        // Update the tab indicator position
        Animated.spring(tabIndicatorPosition, {
          toValue: activeTab === "Ongoing" ? 0 : SCREEN_WIDTH / 2,
          useNativeDriver: false,
        }).start();
      }}
    >
      <View style={{ alignItems: 'center' }}>
        <Ongoing />
      </View>
      <View style={{ alignItems: 'center' }}>
        <History />
      </View>
    </ScrollView>
  );
};

export default MyOrdersTab;

const styles = StyleSheet.create({});
