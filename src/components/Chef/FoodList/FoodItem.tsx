import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SCREEN_WIDTH, colors } from "../../DEFAULTS";
import { icons } from "../../../../assets/icons";
import { Menu, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";

interface FoodItemProps {
  data: {
    id: number;
    item: string;
    category: string;
    price: number;
    reviews: number;
    deliveryMode: string;
    image: ImageSourcePropType;
    rating: string;
  };
}

const FoodItem: React.FC<FoodItemProps> = ({ data }) => {
  const [position, setPosition] = React.useState<string>("auto");
  const navigation = useNavigation();

  return (
    <View
      style={{ marginVertical: 10, flexDirection: "row", alignItems: "center" }}
    >
      <Image
        source={data.image}
        style={{ width: 102, height: 102, borderRadius: 20, marginRight: 20 }}
        resizeMode="cover"
      />

      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: SCREEN_WIDTH - 180,
          }}
        >
          <Text
            style={{
              color: colors.primaryTxt,
              fontSize: 14,
              fontFamily: "SemiBold-Sen",
            }}
          >
            {data.item}
          </Text>
          <View>
            <VStack space={6} alignSelf="flex-start" w="100%">
              <Menu
                w="160"
                shouldOverlapWithTrigger={false} // @ts-ignore
                placement={position == "auto" ? undefined : position}
                trigger={(triggerProps) => {
                  return (
                    <Pressable
                      {...triggerProps}
                      style={{
                        height: 25,
                        width: 25,
                        padding: 5,
                        borderRadius: 25 / 2,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        source={icons.more}
                        style={{ width: 17.64, height: 4.6 }}
                        resizeMode="contain"
                      />
                    </Pressable>
                  );
                }}
              >
                <Menu.Item
                  // @ts-ignore
                  onPress={() => navigation.navigate("ChefFoodDetails")}
                >
                  Preview
                </Menu.Item>
                <Menu.Item 
                // @ts-ignore
                onPress={() => navigation.navigate("CreateItem")}>
                  Edit
                </Menu.Item>
              </Menu>
            </VStack>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: SCREEN_WIDTH - 180,
            marginTop: 11,
          }}
        >
          <Pressable
            style={{
              backgroundColor: "rgba(255,118,34,0.2)",
              paddingHorizontal: 12,
              paddingVertical: 5,
              borderRadius: 30,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: colors.primaryBg,
                fontFamily: "Regular-Sen",
              }}
            >
              {data.category}
            </Text>
          </Pressable>
          <Text
            style={{
              fontFamily: "SemiBold-Sen",
              fontSize: 17,
              color: colors.primaryTxt,
            }}
          >
            ₦{data.price}
          </Text>
        </View>

        {/* Review Section */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 13,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={icons.starReview}
              style={{
                width: 17,
                height: 17,
                marginRight: 5,
              }}
            />
            <Text
              style={{
                color: colors.primaryBg,
                fontFamily: "SemiBold-Sen",
                fontSize: 14,
              }}
            >
              {data.rating}
            </Text>

            <Text
              style={{
                color: "#AFAFAF",
                paddingLeft: 10,
                fontSize: 14,
                fontFamily: "Regular-Sen",
              }}
            >
              ({data.reviews} Review)
            </Text>
          </View>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Regular-Sen",
              color: "#AFAFAF",
            }}
          >
            {data.deliveryMode}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FoodItem;

const styles = StyleSheet.create({});
