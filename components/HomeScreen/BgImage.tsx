import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import { Fonts } from "../../constants/fonts";
import { Colors } from "../../constants/colors";

interface Props {
  url: any;
  name: string;
  numDevices: number;
}

const BgImage = ({ url, name, numDevices }: Props) => {
  return (
    <ImageBackground source={url} style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.desc}>
            {numDevices > 1
              ? numDevices + " " + "devices"
              : numDevices + " " + "device"}
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: Dimensions.get("window").height / 4.5,
    width: Dimensions.get("window").width / 1.9,
    marginRight: 12,
    borderRadius: 10,
    overflow: "hidden",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  textContainer: {
    position: "absolute",
    bottom: 0,
    padding: 10,
  },
  name: {
    fontSize: 20,
    fontFamily: Fonts.Bold,
    color: Colors.white,
  },
  desc: {
    fontSize: 16,
    fontFamily: Fonts.SemiBold,
    color: Colors.white,
  },
});
export default BgImage;
