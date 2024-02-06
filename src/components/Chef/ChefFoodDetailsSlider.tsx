import {
  Animated,
  FlatList,
  ImageBackground,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { SCREEN_WIDTH, colors } from "../DEFAULTS";
import { foodPrevSliderData } from "../../DATA";

const ChefFoodDetailsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList | null>(null);

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  const handleMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / (SCREEN_WIDTH - 48));
    setCurrentIndex(index);
  };

  const Indicator = () => {
    return (
      <View
        style={{
          flexDirection: "row",
        }}
      >
        {foodPrevSliderData.map((_, i) => {
          const inputRange = [
            (i - 1) * SCREEN_WIDTH,
            i * SCREEN_WIDTH,
            (i + 1) * SCREEN_WIDTH,
          ];

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
            extrapolate: "clamp",
          });
          const width = scrollX.interpolate({
            inputRange,
            outputRange: [10, 25, 10],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={i}
              style={{
                padding: 5,
                width,
                height: 10,
                justifyContent: "center",
                alignItems: "center",
                marginHorizontal: 1.5,
              }}
            >
              <Animated.View
                key={`indicator-{${i}}`}
                style={{
                  width,
                  height: 10,
                  opacity,
                  backgroundColor: colors.white,
                  marginHorizontal:
                    i !== 0 || i !== foodPrevSliderData.length - 1 ? 5 : 0,
                  borderRadius: 22,
                }}
              />
            </Animated.View>
          );
        })}
      </View>
    );
  };

  return (
    <>
      <FlatList
        data={foodPrevSliderData}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        scrollEventThrottle={35}
        onScroll={handleScroll}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        ref={flatListRef}
        style={{
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
          marginHorizontal: 24,
          marginTop: 32,
        }}
        renderItem={({ item }) => (
          <ImageBackground
            source={item.image}
            style={{
              width: SCREEN_WIDTH - 48,
              height: 210,
              paddingTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
            resizeMode="cover"
          ></ImageBackground>
        )}
      />

      <View
        style={{
          position: "absolute",
          top: 200,
          left: "20%",
          right: "30%",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "rgba(225,225,225,0.8)",
            padding: 5,
            borderRadius: 61,
          }}
        >
          <Text>Breakfast</Text>
        </View>
        <View style={{ marginHorizontal: 23 }}>
          <Indicator />
        </View>
        <View
          style={{
            backgroundColor: "rgba(225,225,225,0.8)",
            padding: 5,
            borderRadius: 61,
          }}
        >
          <Text>Delivery</Text>
        </View>
      </View>
    </>
  );
};

export default ChefFoodDetailsSlider;

const styles = StyleSheet.create({});
