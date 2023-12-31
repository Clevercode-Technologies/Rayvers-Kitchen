import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { memo, useState } from "react";
import { images } from "../../../../assets/images";
import { icons } from "../../../../assets/icons";
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  colors,
} from "../../../components/DEFAULTS";
import { popularFood, restaurantData } from "../../../DATA";
import { ItemCard } from "../../../components";
import RestaurantCard from "../../../components/Customer/RestaurantCard";

const SearchResult = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [deliveryTime, setDeliveryTime] = useState<string>('');

  const activateModal = () => setShowModal(true);

  return (
    <SafeAreaView
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginTop: Platform.OS === "android" ? 20 : 0,
        position: "relative",
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: SCREEN_WIDTH - 48, height: SCREEN_HEIGHT }}
      >
        {/* Header */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {/* Left */}
          <View
            style={{
              flexDirection: "row",
              paddingTop: 10,
              alignItems: "center",
            }}
          >
            <Pressable onPress={() => {}}>
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
              onPress={() => {}}
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderColor: "#ECF0F4",
                borderWidth: 1,
                width: 100,
                height: 45,
                borderRadius: 33,
                justifyContent: "center",
                marginLeft: 17,
              }}
            >
              <Text style={{ marginRight: 4 }}>Burger</Text>
              <Image source={icons.dropdown} />
            </Pressable>
          </View>

          {/* RIght */}
          <View
            style={{
              flexDirection: "row",
              paddingTop: 10,
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={() => {}}>
              <Image
                source={icons.resultSearch}
                style={{
                  width: 45,
                  height: 45,
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={activateModal}
            >
              <Image
                source={icons.filter}
                style={{
                  width: 46,
                  height: 46,
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Popular Foods */}
        <Text
          style={{
            fontFamily: "Regular-Sen",
            fontSize: 20,
            color: colors.primaryTxt,
            marginVertical: 24,
            alignSelf: "flex-start",
          }}
        >
          Popular Food
        </Text>
        <View
          style={{
            paddingHorizontal: 24,
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-around",
            paddingTop: 15,
            marginBottom: Platform.OS === "android" ? 60 : 0,
          }}
        >
          {popularFood.map((item) => (
            <ItemCard item={item} />
          ))}
        </View>

        {/* Open restaurants */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 32,
          }}
        >
          <Text
            style={{
              color: colors.primaryTxt,
              fontSize: 20,
              fontFamily: "Regular-Sen",
            }}
          >
            Open Restaurants
          </Text>
        </View>

        {/* Open Restaurants */}
        <View style={{ marginBottom: 100 }}>
          {restaurantData.map((item, index) => (
            <View key={`${item.id}-${index}`}>
              <RestaurantCard restaurant={item} />
            </View>
          ))}
        </View>
      </ScrollView>
      {/* Modal Components */}
      {showModal && (
        // Modal Wrapper
        <View
          style={{
            position: "absolute",
            zIndex: 10,
            backgroundColor: "rgba(110,126,141,0.5)",
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Modal Content */}
          <View
            style={{
              backgroundColor: colors.white,
              width: SCREEN_WIDTH - 48,
              paddingHorizontal: 24,
              paddingVertical: 48,
              height: SCREEN_HEIGHT - 200,
              borderRadius: 12,
            }}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
              <Text
                style={{
                  color: colors.abstractTxt,
                  fontFamily: "Regular-Sen",
                  fontSize: 17,
                }}
              >
                Filter your search
              </Text>
              <TouchableOpacity onPress={() => setShowModal(false)}>
                <Image
                    source={icons.cross}
                    style={{
                    width: 45,
                    height: 45,
                    }}
                    resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            
            {/* Offer */}
            <Text style={{ marginTop: 19, fontFamily: 'Regular-Sen', fontSize: 13, textTransform: 'uppercase' }}>Offers</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              <Pressable style={{
                padding: 10,
                borderWidth: 2,
                borderColor: '#EDEDED',
                margin: 5,
                borderRadius: 33,
              }}>
                <Text>Delivery</Text>
              </Pressable>
              <Pressable style={{
                padding: 10,
                borderWidth: 2,
                borderColor: '#EDEDED',
                margin: 5,
                borderRadius: 33,
              }}>
                <Text>Pick Up</Text>
              </Pressable>
              <Pressable style={{
                padding: 10,
                borderWidth: 2,
                borderColor: '#EDEDED',
                margin: 5,
                borderRadius: 33,
              }}>
                <Text>Online Payment available</Text>
              </Pressable>
              <Pressable style={{
                padding: 10,
                borderWidth: 2,
                borderColor: '#EDEDED',
                margin: 5,
                borderRadius: 33,
              }}>
                <Text>Offer</Text>
              </Pressable>
            </View>

            {/* Delivery Time */}
            <View>
              <Text style={{ marginTop: 32, fontFamily: 'Regular-Sen', fontSize: 13, textTransform: 'uppercase' }}>Delivery Time</Text>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap',marginTop: 12 }}>
                <Pressable 
                onPress={() => setDeliveryTime('10-15 min')}
                style={{
                  padding: 10,
                  borderWidth: 2,
                  borderColor: deliveryTime === "10-15 min" ? colors.white : '#EDEDED',
                  margin: 5,
                  borderRadius: 33,
                  backgroundColor: deliveryTime === '10-15 min' ? colors.primaryBg : colors.white,
                }}>
                  <Text style={{ color: deliveryTime === "10-15 min" ? colors.white : colors.abstractTxt, fontFamily: 'Regular-Sen', fontSize: 16,  }}>10-15 min</Text>
                </Pressable>
                <Pressable 
                onPress={() => setDeliveryTime('20 min')}
                style={{
                  padding: 10,
                  borderWidth: 2,
                  borderColor: deliveryTime === "20 min" ? colors.white : '#EDEDED',
                  margin: 5,
                  borderRadius: 33,
                  backgroundColor: deliveryTime === '20 min' ? colors.primaryBg : colors.white
                }}>
                  <Text style={{ color: deliveryTime === "20 min" ? colors.white : colors.abstractTxt, fontFamily: 'Regular-Sen', fontSize: 16,  }}>20 min</Text>
                </Pressable>
                <Pressable 
                onPress={() => setDeliveryTime('30 min')}
                style={{
                  padding: 10,
                  borderWidth: 2,
                  borderColor: deliveryTime === "30 min" ? colors.white : '#EDEDED',
                  margin: 5,
                  borderRadius: 33,
                  backgroundColor: deliveryTime === '30 min' ? colors.primaryBg : colors.white
                }}>
                  <Text style={{ color: deliveryTime === "30 min" ? colors.white : colors.abstractTxt, fontFamily: 'Regular-Sen', fontSize: 16,  }}>30 min</Text>
                </Pressable>
              </View>
            </View>

            {/* Pricing */}
            <Text style={{ marginTop: 32, fontFamily: 'Regular-Sen', fontSize: 13, textTransform: 'uppercase' }}>Pricing</Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default memo(SearchResult);

const styles = StyleSheet.create({});
