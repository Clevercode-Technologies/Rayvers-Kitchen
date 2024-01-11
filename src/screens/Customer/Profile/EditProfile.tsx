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
import React from "react";
import { icons } from "../../../../assets/icons";
import { images } from "../../../../assets/images";
import { ProfileEditInput } from "../../../components";
import { SCREEN_HEIGHT, colors } from "../../../components/DEFAULTS";
import { ScrollView } from "react-native";

const EditProfile = () => {
  return (
    <SafeAreaView
      style={{
        marginHorizontal: 24,
        justifyContent: "center",
        alignItems: "center",
        marginTop: Platform.OS === 'android' ? 30 : 0
      }}
    >
      {/* Header Partition */}
      <View
        style={{ width: "100%", flexDirection: "row", alignItems: "center", marginTop: 20 }}
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
      </View>

    <View style={{ width: '100%', height: SCREEN_HEIGHT - 150, position: 'relative' }}>
     <ScrollView style={{}}>
         {/* Profle Image and edit */}
      <ImageBackground
        source={images.myProfile}
        style={{
          width: 102.95,
          height: 102.95,
          marginTop: 40,
          position: "relative",
          alignSelf: 'center'
        }}
        imageStyle={{ borderRadius: 102.95 / 2 }}
      >
        <Pressable
          onPress={() => {}}
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
          Email
        </Text>
        <ProfileEditInput type={"email"} />
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
      onPress={() => alert('Saved!!!!!!!')}
        style={{
          width: "100%",
          backgroundColor: colors.primaryBg,
          marginTop: 32,
          borderRadius: 12,
          height: 62,
          justifyContent: "center",
          alignItems: "center",
          position: 'absolute',
          bottom: 0
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
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
