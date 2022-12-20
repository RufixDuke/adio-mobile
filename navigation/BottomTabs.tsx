import React from "react";
import { BerlinTabBarNavigator, DotSize } from "rn-slick-bottom-tabs";
import { Ionicons as Icon } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import NewDeviceScreen from "../screens/NewDeviceScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Colors } from "../constants/colors";
import { Fonts } from "../constants/fonts";

const Tabs = BerlinTabBarNavigator();

const TabBarIcon = (props: any) => {
  return (
    <Icon
      name={props.name}
      size={props.size ? props.size : 24}
      color={props.tintColor}
    />
  );
};

export default () => (
  <Tabs.Navigator
    backBehavior="history"
    screenOptions={{
      animation: "slide_from_right",
    }}
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: Colors.Primary,
      inactiveTintColor: "#8A8A8A",
      activeBackgroundColor: Colors.white,
      tabStyle: {
        height: 10,
        backgroundColor: "black",
        // paddingBottom: 20,
        // paddingTop: 10,
        // borderTopWidth: 5,
      },
      labelStyle: {
        fontFamily: Fonts.Medium,
        color: Colors.Primary,
        fontSize: 11,
      },
    }}
    appearance={{
      dotSize: DotSize.LARGE,
    }}
  >
    <Tabs.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ focused, color }: any) => (
          <TabBarIcon focused={focused} tintColor={color} name="home-sharp" />
        ),
      }}
    />

    <Tabs.Screen
      name="NewDevice"
      component={NewDeviceScreen}
      options={{
        tabBarIcon: ({ focused, color }: any) => (
          <TabBarIcon focused={focused} tintColor={color} name="add" />
        ),
      }}
    />
    <Tabs.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        tabBarIcon: ({ focused, color }: any) => (
          <TabBarIcon focused={focused} tintColor={color} name="settings" />
        ),
      }}
    />

    <Tabs.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ focused, color }: any) => (
          <TabBarIcon focused={focused} tintColor={color} name="person" />
        ),
      }}
    />
  </Tabs.Navigator>
);
