import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { images } from "../../../assets/images";
import { colors } from "../DEFAULTS";
import { icons } from "../../../assets/icons";
import { HStack, Switch } from "native-base";

interface RunningOrderCardProps {
  type: string;
}

const RunningOrdersCard: React.FC<RunningOrderCardProps> = ({ type }) => {
  const [assigned, setAssigned] = useState(true);

  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: 24,
      }}
    >
      <Image
        source={images.runningOrder}
        style={{
          width: 102,
          height: 102,
          borderRadius: 20,
          marginRight: 12,
        }}
        resizeMode="contain"
      />

      <View>
        <Text
          style={{ color: "#ED7A63", fontSize: 14, fontFamily: "Regular-Sen" }}
        >
          #Breakfast
        </Text>
        <Text
          style={{
            color: colors.primaryTxt,
            fontFamily: "SemiBold-Sen",
            fontSize: 14,
          }}
        >
          Chicken Thai Biriyani
        </Text>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {assigned ? (
            <Image
              source={icons.assigned}
              style={{
                width: 13.53,
                height: 13.53,
                marginRight: 5,
              }}
              resizeMode="contain"
            />
          ) : (
            <Image
              source={icons.unassigned}
              style={{
                width: 15,
                height: 15,
                marginRight: 5,
              }}
              resizeMode="contain"
            />
          )}

          {assigned ? (
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Regular-Sen",
                color: "#9C9BA6",
              }}
            >
              Assigned
            </Text>
          ) : (
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Regular-Sen",
                color: "#9C9BA6",
              }}
            >
              Unassigned
            </Text>
          )}
        </View>

        {type === "requests" && (
          <View style={{ marginBottom: 14, marginTop: 3 }}>
            <Text style={{ color: "#9C9BA6" }}>ID: 32053</Text>
          </View>
        )}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "66%",
          }}
        >
          <Text
            style={{
              fontFamily: "SemiBold-Sen",
              fontSize: 18,
              color: colors.primaryTxt,
            }}
          >
            $30
          </Text>
          {/* Cancel Button */}
          {type === "requests" ? (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <HStack alignItems="center" space={4}>
                <Switch
                  backgroundColor={colors.primaryBg}
                  // @ts-ignore
                  trackColor={"#FF7622"}
                  thumbColor={"#090957"}
                  aria-disable
                  size="sm"
                />
              </HStack>

              <Text style={{ fontSize: 14, fontFamily: "Regular-Sen" }}>
                deliver
              </Text>
            </View>
          ) : (
            <Pressable
              onPress={() => alert("Cancel Order")}
              style={{
                borderColor: "#FF3326",
                borderWidth: 1,
                borderRadius: 9,
                width: 70,
                height: 36,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#FF3326",
                  fontSize: 14,
                  fontFamily: "Regular-Sen",
                }}
              >
                Cancel
              </Text>
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
};

export default RunningOrdersCard;

const styles = StyleSheet.create({});
