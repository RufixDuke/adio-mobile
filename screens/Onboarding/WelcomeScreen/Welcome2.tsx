import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Welcome2SVG } from "../../../components/SVGs/OnboardingSVG";

const Welcome2 = () => {
  return (
    <View style={styles.wrapper}>
      <View>
        <Welcome2SVG />
        <StatusBar style="auto" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#247AD1",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Welcome2;
