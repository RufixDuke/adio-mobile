import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Fonts } from "../../constants/fonts";
import { Colors } from "../../constants/colors";

type RootStackParamList = {
  VerifyScreen: undefined;
  Welcome1: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "VerifyScreen">;

const VerifyScreen = () => {
  return (
    <View style={styles.wrapper}>
      <View style={{ marginHorizontal: 20 }}>
        <View style={styles.container}>
          <Image source={require("../../assets/icons/verify.png")} />
        </View>

        <View>
          <Text style={styles.header}>Verify Email Address</Text>
          <Text style={styles.description}>
            The email address you provided for your account is
            neilsonmike14@gmail.com
          </Text>
          <Text style={styles.description}>
            Please click the button below to verify this email address
          </Text>
        </View>

        <View style={{ marginTop: 40 }}>
          <Pressable style={styles.nextBtn}>
            <Text style={styles.btnText}>Verify Email</Text>
          </Pressable>

          <Text
            style={{
              textAlign: "center",
              color: Colors.Primary,
              fontFamily: Fonts.Medium,
              fontSize: 15,
            }}
          >
            Resend Email
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#F5F5F5",
  },
  header: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: Fonts.SemiBold,
    color: Colors.header,
  },
  description: {
    textAlign: "center",
    fontSize: 15,
    fontFamily: Fonts.Medium,
    color: Colors.header,
    marginTop: 10,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  nextBtn: {
    alignItems: "center",
    backgroundColor: Colors.Primary,
    paddingVertical: 20,
    borderRadius: 30,
    marginBottom: 30,
  },
  btnText: {
    textAlign: "center",
    color: Colors.white,
    fontSize: 14,
    fontFamily: Fonts.Medium,
  },
});

export default VerifyScreen;
