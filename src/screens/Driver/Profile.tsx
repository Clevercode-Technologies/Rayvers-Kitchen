import {
    Image,
    Pressable,
    RefreshControl,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
  } from "react-native";
  import React from "react";
  import { useNavigation } from "@react-navigation/native";
  import { useSelector } from "react-redux";
  import {
    GradientProps,
    SkeletonContainer,
  } from "react-native-dynamic-skeletons";
  import { LinearGradient } from "expo-linear-gradient";
import { RootState } from "../../Redux/store";
import { useProfile } from "../../config/useProfile";
import { SCREEN_WIDTH, colors } from "../../components/DEFAULTS";
import { icons } from "../../../assets/icons";
import { images } from "../../../assets/images";
import { generateRandomNumber } from "../../utils/idGenerator";
  const Gradient = (props: GradientProps) => <LinearGradient {...props} />;
  
  const Profile = () => {
    const navigation = useNavigation();
    const user = useSelector((state: RootState) => state.data.userProfile);
    const email = useSelector((state: RootState) => state.data.email);
    const { error, loading, profile, reFetch } = useProfile();
  
    return (
      <SafeAreaView style={{ backgroundColor: colors.white, flex: 1 }}>
        <View style={{ marginHorizontal: 24, flex: 1 }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={reFetch}
                tintColor={colors.primaryBg}
                enabled={true}
                style={{}}
              />
            }
          >
            {/* Header - Profile Info */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Pressable
                onPress={() => navigation.canGoBack() && navigation.goBack()}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Image
                  source={icons.back}
                  style={{ width: 45, height: 45 }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    color: colors.tertiaryTxt,
                    fontSize: 17,
                    fontFamily: "Regular-Sen",
                    marginLeft: 16,
                  }}
                >
                  Profile
                </Text>
              </Pressable>
  
              <Pressable
                // @ts-ignore
                onPress={() => navigation.navigate("EditProfile")}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "Regular-Sen",
                    color: colors.primaryBg,
                    textDecorationLine: "underline",
                  }}
                >
                  EDIT
                </Text>
              </Pressable>
            </View>
  
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 24,
              }}
            >
              {profile?.image_url ? (
                <Image
                  source={{ uri: profile.image_url }}
                  style={{
                    width: 102.95,
                    height: 102.95,
                    borderRadius: 102.95 / 2,
                  }}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={images.emptyProfile}
                  style={{
                    width: 102.95,
                    height: 102.95,
                  }}
                  resizeMode="contain"
                />
              )}
  
              <View
                style={{
                  marginLeft: 23,
                }}
              >
                <Text
                  style={{
                    color: colors.primaryTxt,
                    fontSize: 20,
                    fontFamily: "SemiBold-Sen",
                    marginBottom: 8,
                  }}
                >
                  {profile ? profile.name : "Dear Customer"}
                </Text>
                <Text
                  style={{
                    color: "#A0A5BA",
                    fontSize: 14,
                    fontFamily: "Regular-Sen",
                  }}
                >
                  {profile ? profile.bio : "Welcome to Rayvers Kitchen 😆"}
                </Text>
              </View>
            </View>
  
            {!loading && (
              <>
                <View
                  style={{
                    padding: 20,
                    backgroundColor: "#F6F8FA",
                    borderRadius: 16,
                    marginTop: 30,
                  }}
                >
                  <Pressable style={{ flexDirection: "row", marginBottom: 16 }}>
                    <Image
                      source={icons.personProfile}
                      style={{
                        width: 40,
                        height: 40,
                        marginRight: 14,
                      }}
                    />
  
                    <View>
                      <Text
                        style={{
                          fontSize: 14,
                          color: colors.primaryTxt,
                          fontFamily: "Regular-Sen",
                          textTransform: "uppercase",
                        }}
                      >
                        Full Name
                      </Text>
                      <Text
                        style={{
                          color: "#6B6E82",
                          fontSize: 14,
                          fontFamily: "Regular-Sen",
                        }}
                      >
                        {profile ? profile.name : "Dear Customer"}
                      </Text>
                    </View>
                  </Pressable>
  
                  <Pressable style={{ flexDirection: "row", marginBottom: 16 }}>
                    <Image
                      source={icons.phoneIconProfile}
                      style={{
                        width: 40,
                        height: 40,
                        marginRight: 14,
                      }}
                    />
  
                    <View>
                      <Text
                        style={{
                          fontSize: 14,
                          color: colors.primaryTxt,
                          fontFamily: "Regular-Sen",
                          textTransform: "uppercase",
                        }}
                      >
                        Phone Number
                      </Text>
                      <Text
                        style={{
                          color: "#6B6E82",
                          fontSize: 14,
                          fontFamily: "Regular-Sen",
                        }}
                      >
                        408-841-0926
                      </Text>
                    </View>
                  </Pressable>
                </View>
              </>
            )}
            <View style={{ marginTop: 24 }}>
              {loading &&
                new Array(2).fill(0).map((_) => (
                  <SkeletonContainer
                    animationType="leftRight"
                    Gradient={Gradient}
                    isLoading={loading}
                    duration={2000}
                    style={{}}
                    key={generateRandomNumber(4)}
                  >
                    <View
                      style={{
                        width: SCREEN_WIDTH - 48,
                        height: 150,
                        marginBottom: 21,
                        borderRadius: 15,
                      }}
                    />
                  </SkeletonContainer>
                ))}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  };
  
  export default Profile;
  
  const styles = StyleSheet.create({});
  