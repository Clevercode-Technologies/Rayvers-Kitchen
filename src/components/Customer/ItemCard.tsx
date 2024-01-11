import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { images } from "../../../assets/images";
import { colors } from "../DEFAULTS";
import { useNavigation } from "@react-navigation/native";

const ItemCard: React.FC<ItemCrdProp> = ({ item }) => {
  const navigation = useNavigation();
  
  return (
    <Pressable 
    // @ts-ignore
    onPress={() => navigation.navigate('FoodDetails')}
    style={{ alignItems: "center", width: 153, marginBottom: 21 }}>
      <Image
        source={item.image}
        style={{
          width: 122,
          height: 84,
          borderRadius: 15,
          marginBottom: -35,
          zIndex: 1,
        }}
        resizeMode="cover"
      />

      <ImageBackground
        source={images.skewedBg}
        style={{
          width: 153,
          height: 130,
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 7,
          },
          shadowOpacity: 0.19,
          shadowRadius: 10.84,
          elevation: 2,
          padding: 12,
        }}
      >
        <View style={{ height: 30 }} />
        <Text
          style={{
            fontSize: 15,
            color: colors.primaryTxt,
            fontFamily: "Bold-Sen",
          }}
        >
          {item.item}
        </Text>
        <Text
          style={{ color: "#646982", fontSize: 13, fontFamily: "Regular-Sen" }}
        >
          {item.kitchen}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: colors.primaryTxt,
              fontFamily: "Bold-Sen",
            }}
          >
            {item.price}
          </Text>
          <TouchableOpacity
            onPress={() => alert("Item added")}
            style={{
              backgroundColor: colors.primaryBg,
              width: 30,
              height: 30,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 100,
            }}
          >
            <Text style={{ fontSize: 25, color: colors.white, marginTop: Platform.OS === 'android' ? -4 : 0 }}>+</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default ItemCard;

const styles = StyleSheet.create({});
