import {
    Animated,
    Image,
  ImageBackground,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { SCREEN_WIDTH, colors } from "../DEFAULTS";
import { icons } from "../../../assets/icons";
import { useNavigation } from "@react-navigation/native";

interface SliderImageProps {
  item: {
    image: ImageSourcePropType;
    id: number;
  };
}

const SliderImage: React.FC<SliderImageProps> = ({ item }) => {
  const [favourite, setFavourite] = useState<boolean>(false);
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={item.image}
      style={{
        width: SCREEN_WIDTH,
        height: 321,
        paddingHorizontal: 24,
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }}
      resizeMode="cover"
    >
      <Pressable onPress={() => navigation.canGoBack() && navigation.goBack()}>
        <Image
          source={icons.back}
          style={{
            width: 45,
            height: 45,
          }}
          resizeMode="contain"
        />
      </Pressable>
      <Pressable 
      style={{
        width: 45,
        height: 45,
        backgroundColor: colors.white,
        borderRadius: 45 / 2,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={() => setFavourite((prevState) => !prevState)}>
        <Image
          source={favourite ? icons.saveFilled : icons.save}
          style={{
            width: 15,
            height: 13,
          }}
          resizeMode="contain"
        />
      </Pressable>
    </ImageBackground>
  );
};

export default SliderImage;

const styles = StyleSheet.create({});
