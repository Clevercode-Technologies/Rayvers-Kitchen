import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { icons } from "../../../assets/icons";
import { SCREEN_WIDTH, colors } from "../../components/DEFAULTS";
import { UploadItemPhotos } from "../../components";
import { Checkbox } from "native-base";
import * as ImagePicker from "expo-image-picker";

const AddNewFood = () => {
  const [focusItemName, setFocusItemName] = useState<boolean>(false);
  const [focusPrice, setFocusPrice] = useState<boolean>(false);
  const [itemPrice, setItemPrice] = useState<string>("3,450");

  const [saltSelected, setSaltSelected] = useState<boolean>(false);
  const [chickenSelected, setChickenSelected] = useState<boolean>(false);
  const [onionSelected, setOnionSelected] = useState<boolean>(false);
  const [garlicSelected, setGarlicSelected] = useState<boolean>(false);
  const [pepperSelected, setPepperSelected] = useState<boolean>(false);
  const [gingerSelected, setGingerSelected] = useState<boolean>(false);
  const [broccoliSelected, setBroccoliSelected] = useState<boolean>(false);
  const [walnutSelected, setWalnutSelected] = useState<boolean>(false);
  const [orangeSelected, setOrangeSelected] = useState<boolean>(false);

  const [image1, setImage1] = useState<string | null>(null);
  const [image2, setImage2] = useState<string | null>(null);
  const [image3, setImage3] = useState<string | null>(null);
  const [image4, setImage4] = useState<string | null>(null);
  const [image5, setImage5] = useState<string | null>(null);

  enum PICK_UP_MODE {
    DELIVERY = "Delivery",
    PICK_UP = "Pick up",
  }
  const [selectedMode, setSelectedMode] = useState<string | null>(null);

  const handleCheckboxChange = (mode: string | null) => {
    setSelectedMode(mode);
    console.log(`Selected mode: ${mode}`);
  };

  const pickImage1 = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage1(result.assets[0].uri);
    }
  };
  const pickImage2 = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage2(result.assets[0].uri);
    }
  };
  const pickImage3 = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage3(result.assets[0].uri);
    }
  };
  const pickImage4 = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage4(result.assets[0].uri);
    }
  };
  const pickImage5 = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage5(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView>
      {/* Add New Item Header */}
      <View
        style={{
          width: SCREEN_WIDTH,
          paddingHorizontal: 24,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={icons.back} style={{ width: 45, height: 45 }} />
          <Text
            style={{
              fontFamily: "Regular-Sen",
              fontSize: 17,
              color: colors.primaryTxt,
              marginLeft: 16,
            }}
          >
            Add New Items
          </Text>
        </View>

        <Pressable onPress={() => alert("Reset Fields here...")}>
          <Text
            style={{
              fontFamily: "Regular-Sen",
              fontSize: 14,
              color: colors.primaryBg,
              textTransform: "uppercase",
            }}
          >
            RESET
          </Text>
        </Pressable>
      </View>

      <View style={{}}>
        <ScrollView style={{ width: SCREEN_WIDTH, paddingHorizontal: 24 }}>
          <View style={{ marginTop: 24 }}>
            <Text
              style={{
                textTransform: "uppercase",
                marginBottom: 8,
                color: colors.primaryTxt,
                fontFamily: "Regular-Sen",
              }}
            >
              Item Name
            </Text>
            <TextInput
              placeholder="Toasted Bread & Source"
              placeholderTextColor={"#9C9BA6"}
              style={{
                backgroundColor: "#FDFDFD",
                height: 50,
                width: "100%",
                paddingLeft: 16,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: focusItemName ? colors.primaryBg : "#E8EAED",
              }}
              onFocus={() => setFocusItemName(true)}
              onBlur={() => setFocusItemName(false)}
            />
          </View>

          <View>
            <Text
              style={{
                fontFamily: "Regular-Sen",
                fontSize: 14,
                color: colors.primaryTxt,
                textTransform: "uppercase",
                marginTop: 20,
              }}
            >
              Upload Photo/video
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ marginTop: 16 }}
            >
              <UploadItemPhotos
                image1={image1}
                image2={image2}
                image3={image3}
                image4={image4}
                image5={image5}
                pickImage1={pickImage1}
                pickImage2={pickImage2}
                pickImage3={pickImage3}
                pickImage4={pickImage4}
                pickImage5={pickImage5}
              />
            </ScrollView>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                fontSize: 13,
                fontFamily: "Regular-Sen",
                color: colors.primaryTxt,
                textTransform: "uppercase",
              }}
            >
              Price
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ position: "relative" }}>
                <TextInput
                  placeholder="3450"
                  placeholderTextColor={"#9C9BA6"}
                  style={{
                    fontFamily: "Regular-Sen",
                    fontSize: 14,
                    color: "#9C9BA6",
                    width: 115,
                    height: 42,
                    backgroundColor: "#FDFDFD",
                    borderRadius: 10,
                    paddingLeft: 20,
                    borderWidth: 1,
                    borderColor: focusPrice ? colors.primaryBg : "#E8EAED",
                    marginTop: 14,
                  }}
                  value={itemPrice}
                  keyboardType="numeric"
                  onFocus={() => setFocusPrice(true)}
                  onBlur={() => setFocusPrice(false)}
                  onChangeText={(price) => setItemPrice(price)}
                />
                <Text
                  style={{
                    color: "#9C9BA6",
                    fontFamily: "Regular-Sen",
                    fontSize: 14,
                    position: "absolute",
                    top: "49%",
                    left: 9,
                  }}
                >
                  ₦
                </Text>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Checkbox
                  value={PICK_UP_MODE.PICK_UP}
                  accessibilityLabel="Pick up"
                  id="pickup-mode"
                  aria-label="Pick Up"
                  onChange={() => handleCheckboxChange(PICK_UP_MODE.PICK_UP)}
                  isChecked={selectedMode === "Pick up"}
                />
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: "Regular-Sen",
                    color: "#9C9BA6",
                    marginLeft: 10,
                  }}
                >
                  Pick Up
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Checkbox
                  value={PICK_UP_MODE.DELIVERY}
                  onChange={() => handleCheckboxChange(PICK_UP_MODE.DELIVERY)}
                  accessibilityLabel="Delivery"
                  aria-label="Delivery"
                  id="pickup-mode"
                  isChecked={selectedMode === "Delivery"}
                />
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: "Regular-Sen",
                    color: "#9C9BA6",
                    marginLeft: 10,
                  }}
                >
                  Delivery
                </Text>
              </View>
            </View>

            <View>
              <Text
                style={{
                  fontFamily: "Regular-Sen",
                  color: colors.primaryTxt,
                  fontSize: 13,
                  textTransform: "uppercase",
                  marginVertical: 20,
                }}
              >
                Ingredients
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 12,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Regular-Sen",
                    fontSize: 14,
                    color: colors.primaryTxt,
                  }}
                >
                  Basic
                </Text>
                <Pressable
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <Text
                    style={{
                      fontFamily: "Regular-Sen",
                      fontSize: 14,
                      color: "#9C9BA6",
                    }}
                  >
                    See All
                  </Text>
                  <Image
                    source={icons.dropDown}
                    style={{ width: 30, height: 30 }}
                  />
                </Pressable>
              </View>

              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: "row" }}>
                  <Pressable
                    onPress={() => setSaltSelected((prevState) => !prevState)}
                    style={{ marginRight: 12 }}
                  >
                    {!saltSelected ? (
                      <Image
                        source={icons.newItemSalt}
                        style={{
                          width: 50,
                          height: 50,
                        }}
                      />
                    ) : (
                      <Image
                        source={icons.newItemSaltActive}
                        style={{
                          width: 50,
                          height: 50,
                        }}
                      />
                    )}
                  </Pressable>
                  <Pressable
                    onPress={() =>
                      setChickenSelected((prevState) => !prevState)
                    }
                    style={{ marginRight: 12 }}
                  >
                    {!chickenSelected ? (
                      <Image
                        source={icons.newItemChickenNew}
                        style={{
                          width: 50,
                          height: 50,
                        }}
                      />
                    ) : (
                      <Image
                        source={icons.newItemChickenNewActive}
                        style={{
                          width: 50,
                          height: 50,
                        }}
                      />
                    )}
                  </Pressable>
                  <Pressable
                    onPress={() => setOnionSelected((prevState) => !prevState)}
                    style={{ marginRight: 12 }}
                  >
                    {!onionSelected ? (
                      <Image
                        source={icons.newItemOnionNew}
                        style={{
                          width: 50,
                          height: 50,
                        }}
                      />
                    ) : (
                      <Image
                        source={icons.newItemOnionNewActive}
                        style={{
                          width: 50,
                          height: 50,
                        }}
                      />
                    )}
                  </Pressable>
                  <Pressable
                    onPress={() => setGarlicSelected((prevState) => !prevState)}
                    style={{ marginRight: 12 }}
                  >
                    {!garlicSelected ? (
                      <Image
                        source={icons.newItemGarlicNew}
                        style={{
                          width: 50,
                          height: 50,
                        }}
                      />
                    ) : (
                      <Image
                        source={icons.newItemGarlicNewActive}
                        style={{
                          width: 50,
                          height: 50,
                        }}
                      />
                    )}
                  </Pressable>
                  <Pressable
                    onPress={() => setGingerSelected((prevState) => !prevState)}
                    style={{ marginRight: 12 }}
                  >
                    {!gingerSelected ? (
                      <Image
                        source={icons.newItemGingerNew}
                        style={{
                          width: 50,
                          height: 50,
                        }}
                      />
                    ) : (
                      <Image
                        source={icons.newItemGingerNewActive}
                        style={{
                          width: 50,
                          height: 50,
                        }}
                      />
                    )}
                  </Pressable>
                  <Pressable
                    onPress={() =>
                      setBroccoliSelected((prevState) => !prevState)
                    }
                    style={{ marginRight: 12 }}
                  >
                    {!broccoliSelected ? (
                      <Image
                        source={icons.newItemBroccoliNew}
                        style={{
                          width: 50,
                          height: 50,
                        }}
                      />
                    ) : (
                      <Image
                        source={icons.newItemBroccoliNewActive}
                        style={{
                          width: 50,
                          height: 50,
                        }}
                      />
                    )}
                  </Pressable>
                  <Pressable
                    onPress={() => setOrangeSelected((prevState) => !prevState)}
                    style={{ marginRight: 12 }}
                  >
                    {!orangeSelected ? (
                      <Image
                        source={icons.newItemOrange}
                        style={{
                          width: 50,
                          height: 50,
                        }}
                      />
                    ) : (
                      <Image
                        source={icons.newItemOrangeActive}
                        style={{
                          width: 50,
                          height: 50,
                        }}
                      />
                    )}
                  </Pressable>
                  <Pressable
                    onPress={() => setWalnutSelected((prevState) => !prevState)}
                    style={{ marginRight: 12 }}
                  >
                    {!walnutSelected ? (
                      <Image
                        source={icons.newItemWalnut}
                        style={{
                          width: 50,
                          height: 50,
                        }}
                      />
                    ) : (
                      <Image
                        source={icons.newItemWalnutActive}
                        style={{
                          width: 50,
                          height: 50,
                        }}
                      />
                    )}
                  </Pressable>
                  <Pressable
                    onPress={() => setPepperSelected((prevState) => !prevState)}
                    style={{ marginRight: 12 }}
                  >
                    {!pepperSelected ? (
                      <Image
                        source={icons.newItemPepper}
                        style={{
                          width: 50,
                          height: 50,
                        }}
                      />
                    ) : (
                      <Image
                        source={icons.newItemPepperActive}
                        style={{
                          width: 50,
                          height: 50,
                        }}
                      />
                    )}
                  </Pressable>
                </View>
              </ScrollView>

              <View>{/* Fruits */}</View>

              <View style={{ marginTop: 20 }}>
                <Text
                  style={{
                    fontSize: 13,
                    color: colors.primaryTxt,
                    fontFamily: "Regular-Sen",
                    textTransform: "uppercase",
                    marginBottom: 7,
                  }}
                >
                  Details
                </Text>
                <TextInput
                  style={{
                    backgroundColor: "#FDFDFD",
                    borderColor: "#E8EAED",
                    borderWidth: 1,
                    borderRadius: 8,
                    height: 103,
                    width: SCREEN_WIDTH - 48,
                    paddingHorizontal: 16,
                    paddingTop: 16,
                    color: "#6B6E82",
                    fontSize: 12,
                    fontFamily: "Regular-Sen",
                  }}
                  placeholder="Jollof rice, a West African classic, combines aromatic rice with a flavorful tomato-based sauce, creating a savory masterpiece celebrated for its rich taste and cultural significance."
                  placeholderTextColor={"#6B6E82"}
                  multiline
                />
              </View>

              <Pressable
                onPress={() =>
                  alert(
                    "Implement Saving this to the database with some loading animation"
                  )
                }
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: 62,
                  backgroundColor: colors.primaryBg,
                  borderRadius: 10,
                  marginTop: 32,
                }}
              >
                <Text
                  style={{
                    textTransform: "uppercase",
                    fontSize: 18,
                    fontFamily: "Regular-Sen",
                    color: colors.white,
                  }}
                >
                  Save Changes
                </Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AddNewFood;

const styles = StyleSheet.create({});
