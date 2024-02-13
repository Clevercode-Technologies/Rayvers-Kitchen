import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { icons } from "../../../assets/icons";
import { SCREEN_WIDTH, colors } from "../../components/DEFAULTS";
import { drivers } from "../../DATA";
import { useDisclose } from "native-base";
import { AssignDrivers } from "../../components";

const DriversList = () => {
    const { isOpen } = useDisclose();

  return (
    <SafeAreaView>
      <View style={{ width: SCREEN_WIDTH, marginHorizontal: 24 }}>
        {/* Drivers Header */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={icons.back}
            style={{
              width: 45,
              height: 45,
            }}
            resizeMode="contain"
          />

          <Text
            style={{
              fontFamily: "Regular-Sen",
              color: "#181C2E",
              fontSize: 17,
              marginLeft: 16,
            }}
          >
            Drivers
          </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 32 }}>
          {drivers.map((item, index) => (
            <View key={index}>
              <AssignDrivers item={item} />
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default DriversList;

const styles = StyleSheet.create({});
