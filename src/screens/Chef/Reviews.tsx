import { Image, Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { icons } from "../../../assets/icons";
import { SCREEN_WIDTH, colors } from "../../components/DEFAULTS";
import { reviews } from "../../DATA";

const Reviews = () => {
  return (
    <SafeAreaView
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginTop: Platform.OS === "android" ? 25 : 0,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}
        style={{
          width: SCREEN_WIDTH,
          marginHorizontal: 24,
          paddingHorizontal: 24,
        }}
      >
        {/* Header for Reviews */}
        <View
          style={{ width: "100%", flexDirection: "row", alignItems: "center" }}
        >
          <Image
            source={icons.back}
            style={{ width: 45, height: 45 }}
            resizeMode="contain"
          />
          <Text
            style={{
              color: "#181C2E",
              fontSize: 17,
              fontFamily: "Regular-Sen",
              marginLeft: 16,
            }}
          >
            Reviews
          </Text>
        </View>

        <View style={{ marginTop: 32 }}>
          {reviews.map((item, index) => (
            <View style={{ flexDirection: 'row'}} key={index}>
              <Image
                source={item.profilePhoto}
                style={{
                  width: 43,
                  height: 43,
                }}
              />

              <View style={{ marginLeft: 10, width: '85%', height: 171, backgroundColor: '#F6F8FA', padding: 10, borderRadius: 15, marginBottom: 20 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Regular-Sen",
                      fontSize: 12,
                      color: "#9C9BA6",
                    }}
                  >
                    {item.date}
                  </Text>

                  <Image
                    source={icons.moreDetailed}
                    style={{ width: 30, height: 30 }}
                  />
                </View>

                <Text style={{ fontFamily: 'SemiBold-Sen', color: colors.primaryTxt, fontSize: 14, marginBottom: 6 }}>{item.name}</Text>
                <View style={{ flexDirection: 'row', marginBottom: 15, marginTop: 6 }}>
                    {item.star >= 1 ? <Image source={icons.starFilled} style={{ width: 13.08, height: 13.08 }} /> : <Image source={icons.starOutlined} style={{ width: 13.08, height: 13.08 }} />}
                    {item.star >= 2 ? <Image source={icons.starFilled} style={{ width: 13.08, height: 13.08 }} /> : <Image source={icons.starOutlined} style={{ width: 13.08, height: 13.08 }} />}
                    {item.star >= 3 ? <Image source={icons.starFilled} style={{ width: 13.08, height: 13.08 }} /> : <Image source={icons.starOutlined} style={{ width: 13.08, height: 13.08 }} />}
                    {item.star >= 4 ? <Image source={icons.starFilled} style={{ width: 13.08, height: 13.08 }} /> : <Image source={icons.starOutlined} style={{ width: 13.08, height: 13.08 }} />}
                    {item.star >= 5 ? <Image source={icons.starFilled} style={{ width: 13.08, height: 13.08 }} /> : <Image source={icons.starOutlined} style={{ width: 13.08, height: 13.08 }} />}
                </View>
                <Text style={{ color: '#747783', fontSize: 12, fontFamily: 'Regular-Sen' }}>{item.desc}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Reviews;

const styles = StyleSheet.create({});
