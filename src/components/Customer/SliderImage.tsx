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
import React, { useEffect, useRef, useState } from "react";
import { SCREEN_WIDTH, colors } from "../DEFAULTS";
import { icons } from "../../../assets/icons";
import { useNavigation } from "@react-navigation/native";
import Toast, { BaseToast } from "react-native-toast-message";
import { useDispatch, useSelector } from "react-redux";
import { Dish, Popular } from "../../../type";
import { addFavorite, deleteFavorite } from "../../Redux/Splice/AppSplice";
import { RootState } from "../../Redux/store";

const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "green" }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: "400",
        fontFamily: "SemiBold-Sen",
      }}
      text1="Added to Favorite ❤️"
    />
  ),
};

interface SliderImageProps {
  image: { file: string; lable: string; id: number };
  mainData: Dish;
}

const SliderImage: React.FC<SliderImageProps> = ({ image, mainData }) => {
  
  const favorite = useSelector((state: RootState) => state.data.favorite);

  const itemExist: undefined | Dish[] = favorite?.filter((item) => item.id === mainData.id);
  
  const [favourite, setFavourite] = useState<boolean>(itemExist === undefined ? false : itemExist.length === 1 ? true : false);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const addToFavorite = () => {
    if (!favourite) {
      dispatch(addFavorite(mainData));
    } else {
      dispatch(deleteFavorite(mainData.id));
    }
  };

  useEffect(() => {
    if (favourite) {
      return Toast.show({
        type: "success",
      });
    }
  }, [favourite]);

  return (
    <ImageBackground
      source={{ uri: image.file }}
      style={{
        width: SCREEN_WIDTH,
        height: 321,
        paddingHorizontal: 24,
        paddingTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
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
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          setFavourite((prevState) => !prevState);
          addToFavorite();
        }}
      >
        <Image
          source={favourite ? icons.saveFilled : icons.save}
          style={{
            width: 15,
            height: 13,
          }}
          resizeMode="contain"
        />
      </Pressable>

      <Toast config={toastConfig} />
    </ImageBackground>
  );
};

export default SliderImage;

const styles = StyleSheet.create({});
