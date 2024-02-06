import {
  Image,
  ImageBackground,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { icons } from "../../../../assets/icons";
import { images } from "../../../../assets/images";
import { ProfileEditInput } from "../../../components";
import {
  BASE_URL,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  colors,
} from "../../../components/DEFAULTS";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import { Spinner } from "native-base";
import * as ImagePicker from "expo-image-picker";
import { useToast } from 'native-base';

const EditProfile = () => {
  const [error, setError] = useState<string | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const [image, setImage] = useState<string>("");
  const toast = useToast();


  const navigation = useNavigation();

  const profileName = useSelector((state: RootState) => state.data.profileName);
  const profileNumber = useSelector(
    (state: RootState) => state.data.profileNumber
  );
  const profileBio = useSelector((state: RootState) => state.data.profileBio);

  const token = useSelector((state: RootState) => state.data.token);

  console.log('token: ', token);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });


    if (!result.canceled) {
      setImage(String(result.assets[0].base64));
    }
  };

  const updateProfile = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", profileName);
      formData.append("bio", profileBio);
      formData.append("phone_number", profileNumber);
      formData.append("profile_picture", image);

      const response = await fetch(`${BASE_URL}auth/users/me/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: formData,
      });

      
      if (response.ok) {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const responseData = await response.json();
          // Handle responseData if needed
          console.log(responseData);
        }
        setLoading(false);
        toast.show({
          description: "Profile Saved Successfully ✅"
        });
      }
      
    } catch (error: any) {
      console.log(error);
      setError(`error: ${error.message}`);
    }
  };

  return (
    <SafeAreaView
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginTop: Platform.OS === "android" ? 30 : 0,
        backgroundColor: colors.white,
        flex: 1,
      }}
    >
      <View style={{ marginHorizontal: 24, flex: 1, width: SCREEN_WIDTH - 48 }}>
        {/* Header Partition */}
        <Pressable
          onPress={() => navigation.canGoBack() && navigation.goBack()}
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Image
            source={icons.back}
            style={{
              width: 45,
              height: 45,
            }}
          />

          <Text
            style={{
              color: "#181C2E",
              marginLeft: 16,
              fontSize: 17,
              fontFamily: "Regular-Sen",
            }}
          >
            Edit Profile
          </Text>
        </Pressable>

        <View
          style={{
            width: "100%",
            height: SCREEN_HEIGHT - 150,
            position: "relative",
          }}
        >
          <ScrollView style={{}}>
            {/* Profle Image and edit */}
            {image.length === 0 ? (
              <ImageBackground
                source={icons.profileIcon}
                style={{
                  width: 102.95,
                  height: 102.95,
                  marginTop: 40,
                  position: "relative",
                  alignSelf: "center",
                }}
                imageStyle={{ borderRadius: 102.95 / 2 }}
              >
                <Pressable
                  onPress={pickImage}
                  style={{
                    position: "absolute",
                    bottom: -10,
                    right: -15,
                  }}
                >
                  <Image
                    source={icons.editProfile}
                    style={{
                      width: 41,
                      height: 41,
                    }}
                  />
                </Pressable>
              </ImageBackground>
            ) : (
              <ImageBackground
                source={{ uri: `data:image/jpeg;base64,${image}` }}
                style={{
                  width: 102.95,
                  height: 102.95,
                  marginTop: 40,
                  position: "relative",
                  alignSelf: "center",
                }}
                imageStyle={{ borderRadius: 102.95 / 2 }}
              >
                <Pressable
                  onPress={pickImage}
                  style={{
                    position: "absolute",
                    bottom: -10,
                    right: -15,
                  }}
                >
                  <Image
                    source={icons.editProfile}
                    style={{
                      width: 41,
                      height: 41,
                    }}
                  />
                </Pressable>
              </ImageBackground>
            )}

            <View style={{ width: "100%", marginTop: 41 }}>
              <Text
                style={{
                  fontFamily: "Regular-Sen",
                  fontSize: 14,
                  color: colors.primaryTxt,
                  textTransform: "uppercase",
                }}
              >
                Full name
              </Text>
              <ProfileEditInput type={"username"} />
            </View>
            <View style={{ width: "100%", marginTop: 24 }}>
              <Text
                style={{
                  fontFamily: "Regular-Sen",
                  fontSize: 14,
                  color: colors.primaryTxt,
                  textTransform: "uppercase",
                }}
              >
                phone number
              </Text>
              <ProfileEditInput type={"phone"} />
            </View>
            <View style={{ width: "100%", marginTop: 24 }}>
              <Text
                style={{
                  fontFamily: "Regular-Sen",
                  fontSize: 14,
                  color: colors.primaryTxt,
                  textTransform: "uppercase",
                }}
              >
                bio
              </Text>
              <ProfileEditInput type={"bio"} />
            </View>
          </ScrollView>
        </View>

        <Pressable
          disabled={loading}
          onPress={updateProfile}
          style={{
            width: "100%",
            backgroundColor: loading ? "#F0F5FA" : colors.primaryBg,
            marginTop: 32,
            borderRadius: 12,
            height: 62,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "SemiBold-Sen",
              color: colors.white,
              textTransform: "uppercase",
              fontSize: 16,
            }}
          >
            Save
          </Text>
        </Pressable>
      </View>

      {loading && (
        <View
          style={{
            position: "absolute",
            top: "35%",
            bottom: "65%",
            left: "40%",
            right: "70%",
            width: 100,
            height: 100,
            backgroundColor: "#121223",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 12,
          }}
        >
          <Spinner color={colors.white} size="lg" />
        </View>
      )}
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
