import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { memo, useState } from "react";
import { SCREEN_WIDTH, colors } from "../DEFAULTS";
import { icons } from "../../../assets/icons";

interface DriversAssign {
  item: {
    id: number;
    image: ImageSourcePropType;
    assigned: boolean;
    price: number;
    name: string;
  };
}

const DriversAssign: React.FC<DriversAssign> = ({ item }) => {
  const [assigned, setAssigned] = useState<boolean>(item.assigned);

  const handleAssignment = () => setAssigned((prevState) => !prevState);

  return (
    <View
      style={{
        width: SCREEN_WIDTH,
        paddingHorizontal: 24,
        marginVertical: 16,
        flexDirection: "row",
      }}
    >
      <Image
        source={item.image}
        style={{
          width: 102,
          height: 102,
          borderRadius: 20,
          marginRight: 12,
        }}
        resizeMode="cover"
      />

      <View>
        <Text
          style={{
            fontFamily: "SemiBold",
            fontSize: 14,
            color: colors.primaryTxt,
          }}
        >
          {item.name}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {assigned ? (
            <Image 
                source={icons.tick}
                style={{
                    width: 15.15,
                    height: 15,
                    marginRight: 5
                }}
            />
          ) : (
            <Image
              source={icons.bad}
              style={{
                width: 15,
                height: 15,
              }}
            />
          )}
          {assigned ? (
            <Text
              style={{
                fontFamily: "Regular-Sen",
                fontSize: 14,
                color: "#9C9BA6",
                marginVertical: 5,
              }}
            >
              Assigned
            </Text>
          ) : (
            <Text
              style={{
                fontFamily: "Regular-Sen",
                fontSize: 14,
                color: "#9C9BA6",
                marginLeft: 5,
                marginVertical: 5,
              }}
            >
              Unassigned
            </Text>
          )}
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "65%",
          }}
        >
          <Text style={{ fontFamily: 'Regular-Sen', fontSize: 18, color: colors.primaryTxt }}>₦{item.price}</Text>
          <Pressable
            onPress={handleAssignment}
            style={{
              backgroundColor: "rgba(107,179,15,0.19)",
              width: 70,
              height: 27,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
              borderColor: assigned ? "#8D987F" : "#6BB30F",
              borderWidth: 1,
            }}
          >
            <Text
              style={{
                fontFamily: "Regular-Sen",
                fontSize: 14,
                color: assigned ? "#8D987F" : "#6BB30F",
              }}
            >
              {assigned ? 'Unassign' : 'Assign'}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default memo(DriversAssign);

const styles = StyleSheet.create({});
