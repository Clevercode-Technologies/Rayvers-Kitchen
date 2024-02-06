import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import Profile from "../Stacks/Profile";
import Favourite from "../Stacks/Favourite";
import Orders from "../Stacks/Orders";
import Notification from "../Stacks/Notification";
import { useNavigation } from "@react-navigation/native";
import { SCREEN_HEIGHT, colors } from "../../components/DEFAULTS";
import { images } from "../../../assets/images";
import { icons } from "../../../assets/icons";
import CustomerAppTabs from "../Tabs/CustomerAppTabs";
import ChefAppTab from "../Tabs/ChefAppTab";
import DriverAppTab from "../Tabs/DriverAppTab";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { setAccessToken } from "../../Redux/Splice/AppSplice";

const Drawer = createDrawerNavigator();
// @ts-ignore
const CustomDrawerContent = (props) => {
  const [profileFocus, setProfileFocus] = useState<boolean>();
  const [favoriteFocus, setFavoriteFocus] = useState<boolean>();
  const [ordersFocus, setOrdersFocus] = useState<boolean>();
  const [notification, setNotification] = useState<boolean>();

  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "column",
          marginHorizontal: 20,
          height: SCREEN_HEIGHT,
        }}
      >
        {/* Profile Preview Row */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={images.profileDemo}
            style={{
              width: 64.53,
              height: 64.53,
            }}
            resizeMode={"contain"}
          />
          <View style={{ marginLeft: 23 }}>
            <Text
              style={{
                color: "#181C2E",
                fontSize: 17,
                fontFamily: "SemiBold-Sen",
                marginBottom: 5,
              }}
            >
              Sonny Shangai
            </Text>
            <Text
              style={{
                color: "#979797",
                fontSize: 14,
                fontFamily: "Regular-Sen",
              }}
            >
              Customer
            </Text>
          </View>
        </View>
        {/* Profile Route */}
        <Pressable
          // @ts-ignore
          onPress={() => navigation.navigate("Profile")}
          onPressIn={() => setProfileFocus(true)}
          onPressOut={() => setProfileFocus(false)}
          style={{
            backgroundColor: profileFocus ? "#EEFFFF" : colors.white,
            marginBottom: 33,
            paddingHorizontal: 5,
            paddingVertical: 10,
            borderRadius: 6,
            width: "100%",
            marginTop: 55,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={icons.drawerUser}
              style={{
                width: 23,
                height: 23,
                marginRight: 14,
              }}
              resizeMode="contain"
            />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Regular-Sen",
                color: colors.tertiaryTxt,
              }}
            >
              My Profile
            </Text>
          </View>
        </Pressable>
        <Pressable
          // @ts-ignore
          onPress={() => navigation.navigate("Favorite")}
          onPressIn={() => setFavoriteFocus(true)}
          onPressOut={() => setFavoriteFocus(false)}
          style={{
            backgroundColor: favoriteFocus ? "#EEFFFF" : colors.white,
            marginBottom: 33,
            paddingHorizontal: 5,
            paddingVertical: 10,
            borderRadius: 6,
            width: "100%",
            marginTop: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={icons.drawerHeart}
              style={{
                width: 23,
                height: 23,
                marginRight: 14,
              }}
              resizeMode="contain"
            />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Regular-Sen",
                color: colors.tertiaryTxt,
              }}
            >
              Favorite
            </Text>
          </View>
        </Pressable>
        <Pressable
          // @ts-ignore
          onPress={() => navigation.navigate("Favorite")}
          onPressIn={() => setOrdersFocus(true)}
          onPressOut={() => setOrdersFocus(false)}
          style={{
            backgroundColor: ordersFocus ? "#EEFFFF" : colors.white,
            marginBottom: 33,
            paddingHorizontal: 5,
            paddingVertical: 10,
            borderRadius: 6,
            width: "100%",
            marginTop: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={icons.drawerCar}
              style={{
                width: 27,
                height: 27,
                marginRight: 14,
              }}
              resizeMode="contain"
            />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Regular-Sen",
                color: colors.tertiaryTxt,
              }}
            >
              Orders
            </Text>
          </View>
        </Pressable>
        <Pressable
          // @ts-ignore
          onPress={() => navigation.navigate("Favorite")}
          onPressIn={() => setNotification(true)}
          onPressOut={() => setNotification(false)}
          style={{
            backgroundColor: notification ? "#EEFFFF" : colors.white,
            marginBottom: 33,
            paddingHorizontal: 5,
            paddingVertical: 10,
            borderRadius: 6,
            width: "100%",
            marginTop: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={icons.drawerBell}
              style={{
                width: 27,
                height: 27,
                marginRight: 14,
              }}
              resizeMode="contain"
            />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Regular-Sen",
                color: colors.tertiaryTxt,
              }}
            >
              Notification
            </Text>
          </View>
        </Pressable>

        <Pressable
        onPress={() => dispatch(setAccessToken(null))}
          style={{
            position: "absolute",
            bottom: 100,
            left: 20,
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Regular-Sen",
              color: colors.tertiaryTxt,
            }}
          >
            Sign out
          </Text>

          <Image 
            source={icons.forward}
            style={{
              width: 33,
              height: 24,
              marginLeft: 20
            }}
          />
        </Pressable>
      </ScrollView>
    </DrawerContentScrollView>
  );
};

enum UserType {
  CUSTOMER = 'Customer',
  CHEF = 'Chef',
  DRIVER = 'DRIVER'
}

// @ts-ignore
const DrawerNavigation = (props) => {
  const userType = useSelector((state: RootState) => state.data.userType);
  console.log("userType: ", userType);

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName="AppTabs"
      defaultStatus={"closed"}
      screenOptions={() => ({
        headerShown: false,
        // title: '',
        drawerItemStyle: {
          display: "none",
        },
      })}
    >
      {userType === 'Customer' ? (
        <Drawer.Screen
        options={() => ({
          drawerActiveBackgroundColor: "white",
          drawerActiveTintColor: "white",
          headerTitle: "",
          drawerContentStyle: {
            display: "none",
          },
        })}
        name="AppTabs"
        // @ts-ignore
        component={CustomerAppTabs}
      />
      ) : userType === 'Chef' ? (
        <Drawer.Screen
        options={() => ({
          drawerActiveBackgroundColor: "white",
          drawerActiveTintColor: "white",
          headerTitle: "",
          drawerContentStyle: {
            display: "none",
          },
        })}
        name="ChefTabs"
        // @ts-ignore
        component={ChefAppTab}
      />
      ) : (
        <Drawer.Screen
        options={() => ({
          drawerActiveBackgroundColor: "white",
          drawerActiveTintColor: "white",
          headerTitle: "",
          drawerContentStyle: {
            display: "none",
          },
        })}
        name="DriverTabs"
        // @ts-ignore
        component={DriverAppTab}
      />
      )}
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Favorite" component={Favourite} />
      <Drawer.Screen name="Orders" component={Orders} />
      <Drawer.Screen name="Notification" component={Notification} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
