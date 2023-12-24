import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState, memo } from "react";
import { colors } from "../DEFAULTS";
import { Image } from "react-native";
import { icons } from "../../../assets/icons";

interface TextInputPropType {
  type: string;
}
const TextInputs: React.FC<TextInputPropType> = ({ type }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [hidePass, setHidePass] = useState<boolean>(true);
  const [reHidePass, setReHidePass] = useState<boolean>(true);

  console.log(email, password, rePassword, name);

  return (
    <>
      {type === "email" ? (
        <TextInput
          placeholder="example@gmail.com"
          placeholderTextColor={colors.secondaryTxt}
          onChangeText={(text) => setEmail(text)}
          style={{
            height: 62,
            width: "100%",
            backgroundColor: colors.inputBG,
            borderRadius: 10,
            paddingLeft: 20,
            fontFamily: 'Regular-Sen'
          }}
        />
      ) : type === "password" ? (
        <>
          <View style={{ position: "relative" }}>
            <TextInput
              placeholder="⦁ ⦁ ⦁ ⦁ ⦁ ⦁ ⦁ ⦁"
              placeholderTextColor={colors.secondaryTxt}
              secureTextEntry={hidePass}
              onChangeText={(text) => setPassword(text)}
              style={{
                height: 62,
                width: "100%",
                backgroundColor: colors.inputBG,
                borderRadius: 10,
                paddingLeft: 20,
                fontFamily: 'Regular-Sen'
              }}
            />
            <Pressable
              onPress={() => setHidePass((prevState) => !prevState)}
              style={{ position: "absolute", right: 10, top: 15, padding: 10 }}
            >
              {hidePass ? (
                <Image
                  source={icons.eyeClosed}
                  style={{
                    width: 19,
                    height: 14,
                  }}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={icons.eyeOpen}
                  style={{
                    width: 19,
                    height: 14,
                  }}
                  resizeMode="contain"
                />
              )}
            </Pressable>
          </View>
        </>
      ) : type === 'name' ? (
        <>
          <TextInput
            placeholder="John Doe"
            placeholderTextColor={colors.secondaryTxt}
            onChangeText={(text) => setName(text)}
            style={{
              height: 62,
              width: "100%",
              backgroundColor: colors.inputBG,
              borderRadius: 10,
              paddingLeft: 20,
              fontFamily: 'Regular-Sen'
            }}
          />
        </>
      ) : type === 're-password' ? (
        <>
          <View style={{ position: "relative" }}>
            <TextInput
              placeholder="⦁ ⦁ ⦁ ⦁ ⦁ ⦁ ⦁ ⦁"
              placeholderTextColor={colors.secondaryTxt}
              secureTextEntry={reHidePass}
              onChangeText={(text) => setRePassword(text)}
              style={{
                height: 62,
                width: "100%",
                backgroundColor: colors.inputBG,
                borderRadius: 10,
                paddingLeft: 20,
                fontFamily: 'Regular-Sen'
              }}
            />
            <Pressable
              onPress={() => setReHidePass((prevState) => !prevState)}
              style={{ position: "absolute", right: 10, top: 15, padding: 10 }}
            >
              {reHidePass ? (
                <Image
                  source={icons.eyeClosed}
                  style={{
                    width: 19,
                    height: 14,
                  }}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={icons.eyeOpen}
                  style={{
                    width: 19,
                    height: 14,
                  }}
                  resizeMode="contain"
                />
              )}
            </Pressable>
          </View>
        </>
      ) : null}
    </>
  );
};

export default memo(TextInputs);

const styles = StyleSheet.create({

});
