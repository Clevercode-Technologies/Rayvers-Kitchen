import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { icons } from "../../../assets/icons";

interface UploadItemPhotosProp {
  pickImage1: () => Promise<void>;
  pickImage2: () => Promise<void>;
  pickImage3: () => Promise<void>;
  pickImage4: () => Promise<void>;
  pickImage5: () => Promise<void>;
  image1: string | null;
  image2: string | null;
  image3: string | null;
  image4: string | null;
  image5: string | null;
}

const UploadItemPhotos: React.FC<UploadItemPhotosProp> = ({
  pickImage1,
  pickImage2,
  pickImage3,
  pickImage4,
  pickImage5,
  image1,
  image2,
  image3,
  image4,
  image5,
}) => {

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Pressable
        onPress={pickImage1}
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: 111,
          height: 101,
          borderStyle: "dashed",
          borderColor: "#E8EAED",
          borderWidth: 1,
          borderRadius: 10,
          backgroundColor: "#FDFDFD",
          marginRight: 24,
        }}
      >
        {image1 ? (
          <Image
            source={{ uri: image1 }}
            style={{ width: "100%", height: "100%", borderRadius: 10 }}
          />
        ) : (
          <View>
            <Image
              source={icons.upload}
              style={{
                width: 41.48,
                height: 41.48,
              }}
            />
            <Text
              style={{
                color: "#9C9BA6",
                fontFamily: "Regular-Sen",
                fontSize: 13,
              }}
            >
              Add
            </Text>
          </View>
        )}
      </Pressable>
      <Pressable
        onPress={pickImage2}
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: 111,
          height: 101,
          borderStyle: "dashed",
          borderColor: "#E8EAED",
          borderWidth: 1,
          borderRadius: 10,
          backgroundColor: "#FDFDFD",
          marginRight: 24,
        }}
      >
        {image2 ? (
          <Image
            source={{ uri: image2 }}
            style={{ width: "100%", height: "100%", borderRadius: 10 }}
          />
        ) : (
          <View>
            <Image
              source={icons.upload}
              style={{
                width: 41.48,
                height: 41.48,
              }}
            />
            <Text
              style={{
                color: "#9C9BA6",
                fontFamily: "Regular-Sen",
                fontSize: 13,
              }}
            >
              Add
            </Text>
          </View>
        )}
      </Pressable>
      <Pressable
        onPress={pickImage3}
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: 111,
          height: 101,
          borderStyle: "dashed",
          borderColor: "#E8EAED",
          borderWidth: 1,
          borderRadius: 10,
          backgroundColor: "#FDFDFD",
          marginRight: 24,
        }}
      >
        {image3 ? (
          <Image
            source={{ uri: image3 }}
            style={{ width: "100%", height: "100%", borderRadius: 10 }}
          />
        ) : (
          <View>
            <Image
              source={icons.upload}
              style={{
                width: 41.48,
                height: 41.48,
              }}
            />
            <Text
              style={{
                color: "#9C9BA6",
                fontFamily: "Regular-Sen",
                fontSize: 13,
              }}
            >
              Add
            </Text>
          </View>
        )}
      </Pressable>
      <Pressable
        onPress={pickImage4}
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: 111,
          height: 101,
          borderStyle: "dashed",
          borderColor: "#E8EAED",
          borderWidth: 1,
          borderRadius: 10,
          backgroundColor: "#FDFDFD",
          marginRight: 24,
        }}
      >
        {image4 ? (
          <Image
            source={{ uri: image4 }}
            style={{ width: "100%", height: "100%", borderRadius: 10 }}
          />
        ) : (
          <View>
            <Image
              source={icons.upload}
              style={{
                width: 41.48,
                height: 41.48,
              }}
            />
            <Text
              style={{
                color: "#9C9BA6",
                fontFamily: "Regular-Sen",
                fontSize: 13,
              }}
            >
              Add
            </Text>
          </View>
        )}
      </Pressable>
      <Pressable
        onPress={pickImage5}
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: 111,
          height: 101,
          borderStyle: "dashed",
          borderColor: "#E8EAED",
          borderWidth: 1,
          borderRadius: 10,
          backgroundColor: "#FDFDFD",
          marginRight: 24,
        }}
      >
        {image5 ? (
          <Image
            source={{ uri: image5 }}
            style={{ width: "100%", height: "100%", borderRadius: 10 }}
          />
        ) : (
          <View>
            <Image
              source={icons.upload}
              style={{
                width: 41.48,
                height: 41.48,
              }}
            />
            <Text
              style={{
                color: "#9C9BA6",
                fontFamily: "Regular-Sen",
                fontSize: 13,
              }}
            >
              Add
            </Text>
          </View>
        )}
      </Pressable>
    </View>
  );
};

export default memo(UploadItemPhotos);

const styles = StyleSheet.create({});
