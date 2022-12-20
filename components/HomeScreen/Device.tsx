import { View, Text, Dimensions, Pressable } from "react-native";
import React from "react";
import { Fonts } from "../../constants/fonts";

interface Props {
  svg: JSX.Element;
  name: string;
  numDevices: number;
  bg: string;
}

const Device = ({ svg, name, numDevices, bg }: Props) => {
  return (
    <Pressable
      style={{
        borderWidth: 1,
        borderColor: "#D7D7D7",
        padding: 10,
        width: Dimensions.get("window").width / 2.35,
        height: Dimensions.get("window").height / 6,
        borderRadius: 8,
        marginRight: 10,
      }}
    >
      <View
        style={{
          backgroundColor: bg,
          borderRadius: 2.5,
          width: Dimensions.get("window").width / 8,
          padding: 5,
          justifyContent: "center",
          alignItems: "center",
          height: Dimensions.get("window").height / 20,
        }}
      >
        {svg}
      </View>
      <Text
        style={{
          color: "#555555",
          fontFamily: Fonts.SemiBold,
          fontSize: 16,
          marginTop: 15,
        }}
      >
        {name}
      </Text>
      <Text
        style={{
          color: "#555555",
          fontFamily: Fonts.SemiBold,
          fontSize: 14,
          marginTop: 5,
        }}
      >
        {numDevices > 1
          ? numDevices + " " + "devices"
          : numDevices + " " + "device"}
      </Text>
    </Pressable>
  );
};

export default Device;
