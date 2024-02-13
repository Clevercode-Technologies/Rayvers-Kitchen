import {
  Animated,
  FlatList,
  ImageBackground,
  ImageSourcePropType,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { memo, useRef, useState } from "react";
import { foodPrevSliderData } from "../../DATA";
import { SCREEN_WIDTH, colors } from "../DEFAULTS";
import SliderImage from "./SliderImage";
import { generateRandomNumber } from "../../utils/idGenerator";
import { Dish, Popular } from "../../../type";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

interface ImageSliderProp {
  item: Dish;
}

const ImageSlider: React.FC<ImageSliderProp> = ({ item }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList | null>(null);
  
  const carouselImages = useSelector((state: RootState) => state.data.carouselImages);


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
        {item?.images.map((_, i) => {
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
              key={i}
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
                    i !== 0 || carouselImages && i !== carouselImages.length - 1 ? 5 : 0,
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
        data={carouselImages}
        keyExtractor={() => generateRandomNumber(6)}
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
        renderItem={({ item: imageList }) => <SliderImage image={imageList} mainData={item}  />}
      />

      <View style={{ position: "absolute", top: 290, left: '30%', right: '30%' }}>
        <Indicator />
      </View>
    </>
  );
};

export default memo(ImageSlider);

const styles = StyleSheet.create({});
