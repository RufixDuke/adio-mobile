import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome1 from "../screens/WelcomeScreen/Welcome1";
import Welcome2 from "../screens/WelcomeScreen/Welcome2";
import SwiperScreen from "../screens/SwiperScreen";

const screenOptions = {
  headerShown: false,
};

type RootStackParamList = {
  Welcome1: undefined;
  Welcome2: undefined;
  SwiperScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
export const RootStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="SwiperScreen"
      screenOptions={screenOptions}
    >
      <Stack.Screen name="Welcome1" component={Welcome1} />
      <Stack.Screen name="Welcome2" component={Welcome2} />
      <Stack.Screen name="SwiperScreen" component={SwiperScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);