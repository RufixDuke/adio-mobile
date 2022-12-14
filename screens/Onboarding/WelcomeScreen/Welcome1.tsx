import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  Slider1SVG,
  Welcome1SVG,
} from "../../../components/SVGs/OnboardingSVG";

const Welcome1 = () => {
  return (
    <View style={styles.wrapper}>
      <View>
        <Welcome1SVG />
        <StatusBar style="auto" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Welcome1;
