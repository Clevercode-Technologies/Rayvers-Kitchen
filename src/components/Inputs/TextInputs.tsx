import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState, memo } from "react";
import { colors } from "../DEFAULTS";
import { Image } from "react-native";
import { icons } from "../../../assets/icons";
import {
  setEmail,
  setName,
  setPassword,
  setRePassword,
} from "../../Redux/Splice/AppSplice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

interface TextInputPropType {
  type: string;
}
const TextInputs: React.FC<TextInputPropType> = ({ type }) => {
  const [hidePass, setHidePass] = useState<boolean>(true);
  const [reHidePass, setReHidePass] = useState<boolean>(true);

  const email = useSelector((state: RootState) => state.data.email);
  const password = useSelector((state: RootState) => state.data.password);
  const rePassword = useSelector((state: RootState) => state.data.rePassword);
  const name = useSelector((state: RootState) => state.data.name);

  const dispatch = useDispatch();

  return (
    <>
      {type === "email" ? (
        <TextInput
          placeholder="example@gmail.com"
          placeholderTextColor={colors.secondaryTxt}
          onChangeText={(text) => dispatch(setEmail(text))}
          style={{
            height: 62,
            width: "100%",
            backgroundColor: colors.inputBG,
            borderRadius: 10,
            paddingLeft: 20,
            fontFamily: "Regular-Sen",
          }}
          value={email}
        />
      ) : type === "password" ? (
        <>
          <View style={{ position: "relative" }}>
            <TextInput
              placeholder="⦁ ⦁ ⦁ ⦁ ⦁ ⦁ ⦁ ⦁"
              placeholderTextColor={colors.secondaryTxt}
              secureTextEntry={hidePass}
              onChangeText={(text) => dispatch(setPassword(text))}
              style={{
                height: 62,
                width: "100%",
                backgroundColor: colors.inputBG,
                borderRadius: 10,
                paddingLeft: 20,
                fontFamily: "Regular-Sen",
              }}
              value={password}
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
      ) : type === "name" ? (
        <>
          <TextInput
            placeholder="John Doe"
            placeholderTextColor={colors.secondaryTxt}
            onChangeText={(text) => dispatch(setName(text))}
            style={{
              height: 62,
              width: "100%",
              backgroundColor: colors.inputBG,
              borderRadius: 10,
              paddingLeft: 20,
              fontFamily: "Regular-Sen",
            }}
            value={name}
          />
        </>
      ) : type === "re-password" ? (
        <>
          <View style={{ position: "relative" }}>
            <TextInput
              placeholder="⦁ ⦁ ⦁ ⦁ ⦁ ⦁ ⦁ ⦁"
              placeholderTextColor={colors.secondaryTxt}
              secureTextEntry={reHidePass}
              onChangeText={(text) => dispatch(setRePassword(text))}
              style={{
                height: 62,
                width: "100%",
                backgroundColor: colors.inputBG,
                borderRadius: 10,
                paddingLeft: 20,
                fontFamily: "Regular-Sen",
                borderWidth: 1,
                borderColor:
                  rePassword.length !== 0 && rePassword !== password
                    ? "red"
                    : "#F0F5FA",
              }}
              value={rePassword}
            />
            {rePassword.length !== 0 && rePassword !== password ? (
              <Text style={{ fontSize: 12, fontFamily: 'Regular-Sen', color: 'red', marginTop: 5 }}>Not a match</Text>
            ) : null}
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

const styles = StyleSheet.create({});
