import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome1 from "../screens/Onboarding/WelcomeScreen/Welcome1";
import Welcome2 from "../screens/Onboarding/WelcomeScreen/Welcome2";
import SwiperScreen from "../screens/Onboarding/SwiperScreen";
import SignUpScreen from "../screens/Registration/SignUpScreen";
import VerifyScreen from "../screens/Registration/VerifyScreen";
import LoginScreen from "../screens/Registration/LoginScreen";
import AddDevices from "../screens/HomeScreen/AddDevices";
import AddLocation from "../screens/HomeScreen/AddLocation";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ForgotPassword from "../screens/Registration/ForgotPassword";
import Check from "../screens/Registration/ForgotPassword/Check";
import CreateNewPassword from "../screens/Registration/ForgotPassword/CreateNewPassword";

const screenOptions = {
  headerShown: false,
};

type RootStackParamList = {
  Welcome1: undefined;
  Welcome2: undefined;
  SwiperScreen: undefined;
  SignUpScreen: undefined;
  VerifyScreen: undefined;
  LoginScreen: undefined;
  AddDevices: undefined;
  AddLocation: undefined;
  HomeScreen: undefined;
  ForgotPassword: undefined;
  Check: undefined;
  CreateNewPassword: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
export const RootStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="AddDevices"
      screenOptions={screenOptions}
    >
      <Stack.Screen name="Welcome1" component={Welcome1} />
      <Stack.Screen name="Welcome2" component={Welcome2} />
      <Stack.Screen name="SwiperScreen" component={SwiperScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="VerifyScreen" component={VerifyScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="AddDevices" component={AddDevices} />
      <Stack.Screen name="AddLocation" component={AddLocation} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Check" component={Check} />
      <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} />
    </Stack.Navigator>
  </NavigationContainer>
);
