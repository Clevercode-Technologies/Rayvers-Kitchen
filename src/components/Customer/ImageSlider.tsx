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
import { foodPrevSliderData } from "../../DATA";
import { SCREEN_WIDTH, colors } from "../DEFAULTS";
import SliderImage from "./SliderImage";

const ImageSlider = () => {
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

          return (
            <View
              style={{
                padding: 5,
                borderWidth: 2,
                borderColor: colors.white,
                borderRadius: 100,
                width: 20,
                height: 20,
                justifyContent: "center",
                alignItems: "center",
                marginHorizontal: 7,
              }}
            >
              <Animated.View
                key={`indicator-{${i}}`}
                style={{
                  width: 10.29,
                  height: 10.29,
                  opacity,
                  backgroundColor: colors.white,
                  marginHorizontal:
                    i !== 0 || i !== foodPrevSliderData.length - 1 ? 5 : 0,
                  borderRadius: 10.29 / 2,
                }}
              />
            </View>
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
          borderBottomRightRadius: 30,
          borderBottomLeftRadius: 30,
        }}
        renderItem={({ item }) => <SliderImage item={item} />}
      />

      <View style={{ position: "absolute", top: 290 }}>
        <Indicator />
      </View>
    </>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({});
