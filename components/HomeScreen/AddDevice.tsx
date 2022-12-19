import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { SVG } from "../SVGs/SVGs";
import { Colors } from "../../constants/colors";
import { Fonts } from "../../constants/fonts";

interface DeviceProps {
  name: string;
  svg: JSX.Element;
  id: number;
}

const AddDevice = ({ name, svg, id }: DeviceProps) => {
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <View style={styles.wrapper}>{svg}</View>
      <Text style={styles.device}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 12,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#D7D7D7",
    height: Dimensions.get("window").height / 10,
    width: Dimensions.get("window").width / 5,
  },
  device: {
    color: Colors.header,
    fontSize: 11,
    fontFamily: Fonts.Medium,
    marginTop: 5,
  },
});
export default AddDevice;
