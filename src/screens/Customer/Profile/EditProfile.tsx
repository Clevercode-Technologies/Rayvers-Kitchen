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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import { Spinner } from "native-base";
import * as ImagePicker from "expo-image-picker";
import { useToast } from "native-base";
import { setUserProfile } from "../../../Redux/Splice/AppSplice";

type ImageType = {
  assetId?: string | null | undefined;
  base64?: null | string | undefined;
  duration?: null | number | undefined;
  exif?: Record<string, any> | null | undefined;
  fileName?: string | null | undefined;
  fileSize?: number | undefined;
  height?: number | undefined;
  type?: "image" | "video" | undefined;
  uri?: string | undefined;
  width?: number | undefined;
};

const EditProfile = () => {
  const [error, setError] = useState<string | null>();
  const [loading, setLoading] = useState<boolean>(false);
  // const [image, setImage] = useState<ImageType | null>(null);
  const [image, setImage] = useState<ImagePicker.ImagePickerAsset | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const toast = useToast();

  const navigation = useNavigation();

  const profileName = useSelector((state: RootState) => state.data.profileName);
  const profileNumber = useSelector((state: RootState) => state.data.profileNumber);
  const profileBio = useSelector((state: RootState) => state.data.profileBio);

  const userProfile = useSelector((state: RootState) => state.data.userProfile);

  const token = useSelector((state: RootState) => state.data.token);
  const dispatch = useDispatch();

  console.log("userProfile: ", userProfile);

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
      setImage(result.assets[0]);
    }
  };


  const convertBase642Url = async () => {
    try {
      const response = await fetch(`https://img2url-converter.onrender.com/upload/`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: image?.base64,
          imageFormat: image?.uri.split('.')[1]
        }),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log('Image uploaded successfully. Cloudinary URL:', responseData.url);
        return responseData.url;
      }
    } catch (error: any) {
      console.error("Error converting img to url:", error);
      setError(`Error converting img to url:${ error.message}`);
    }
  };
  
  const updateProfile = async () => {
    setLoading(true);
  
    try {
      let imageUrl = null;
  
      // Check if image base64 data is available
      if (image?.base64) {
        imageUrl = await convertBase642Url();
      }
  
      const formData = new FormData();
      formData.append('name', profileName);
      formData.append('bio', profileBio);
      formData.append('phone_number', profileNumber);
  
      if (imageUrl) {
        formData.append('image_url', imageUrl);
      }
  
      const response = await fetch(`${BASE_URL}auth/users/me/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Token ${token}`
        },
        body: formData,
      });
  
      if (response.ok) {
        // Handle success if needed
        const userInfo = await response.json();
        // console.log(userInfo);
        dispatch(setUserProfile(userInfo));
        setLoading(false);
        navigation.canGoBack() && navigation.goBack();
      }
    } catch (error: any) {
      // Handle error if needed
      console.log(error);
      setLoading(false);
      setError(`Error updating profile: ${error.message}`);
    } finally {
      setLoading(false);
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
            {image === null ? (
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
                source={{ uri: `data:image/jpeg;base64,${image.base64}` }}
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
            backgroundColor: loading ? "#A0A5BA" : colors.primaryBg,
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
        {error && (
          <Text style={{  }}>{error}</Text>
        )}
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
