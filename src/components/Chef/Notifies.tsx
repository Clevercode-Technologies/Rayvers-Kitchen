import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { notifications } from "../../DATA";
import { images } from "../../../assets/images";
import { colors } from "../DEFAULTS";

const Notifies = () => {
  return (
    <View style={{ marginHorizontal: 24 }}>
      {notifications.map((item, index) => (
        <Pressable
        key={index}
        onPress={() => alert('Something may happen')}
          style={{
            borderColor: "#F0F4F9",
            borderBottomWidth: 1,
            paddingVertical: 16,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: 'space-between'
          }}
        >
          <Image
            source={item.image}
            style={{
              width: 54,
              height: 54,
              borderRadius: 54 / 2,
              marginRight: 14,
            }}
          />

          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}>
            <View>
              <Text style={{ fontSize: 13, fontFamily: 'Regular-Sen', color: colors.primaryTxt, width: '90%'}}>
                {item.name} <Text>{item.info}</Text>
              </Text>
              <Text style={{ fontSize: 10, fontFamily: 'Regular-Sen', marginTop: 10, color: '#9C9BA6'}}>{item.time}</Text>
            </View>
            {/* Image preview here */}
            <Image
              source={item.preview}
              style={{ width: 53, height: 54, borderRadius: 10 }}
            />
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default memo(Notifies);

const styles = StyleSheet.create({});
