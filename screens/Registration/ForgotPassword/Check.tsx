import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React from "react";
import { SVG } from "../../../components/SVGs/SVGs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Colors } from "../../../constants/colors";
import { Fonts } from "../../../constants/fonts";

type RootStackParamList = {
  ForgotPassword: undefined;
  Check: undefined;
  CreateNewPassword: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Check">;

const Check = ({ navigation }: Props) => {
  return (
    <Pressable style={styles.wrapper}>
      <View>
        <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
          <SVG
            svg={`<svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.13158 14.3949L1.07894 8.34227C0.947365 8.2107 0.854382 8.06815 0.799996 7.91464C0.744733 7.76113 0.717102 7.59666 0.717102 7.42122C0.717102 7.24578 0.744733 7.08131 0.799996 6.9278C0.854382 6.77429 0.947365 6.63175 1.07894 6.50017L7.13158 0.447535C7.37281 0.206307 7.67982 0.0856934 8.05263 0.0856934C8.42544 0.0856934 8.73245 0.206307 8.97368 0.447535C9.21491 0.688763 9.33552 0.995781 9.33552 1.36859C9.33552 1.7414 9.21491 2.04841 8.97368 2.28964L3.8421 7.42122L8.97368 12.5528C9.21491 12.794 9.33552 13.101 9.33552 13.4739C9.33552 13.8467 9.21491 14.1537 8.97368 14.3949C8.73245 14.6361 8.42544 14.7568 8.05263 14.7568C7.67982 14.7568 7.37281 14.6361 7.13158 14.3949Z" fill="#247AD1"/>
</svg>`}
            width={"8.62px"}
            height={"14.67px"}
          />
        </Pressable>

        <View style={{ alignItems: "center" }}>
          <Image source={require("../../../assets/icons/verify.png")} />
          <Text style={styles.header}>Check your mail</Text>
          <Text style={styles.info}>
            We have sent an email with instructions on how to recover your
            password to the email address associated with your account. Please
            check your email for further instructions.
          </Text>
        </View>

        <View style={{ marginTop: 30 }}>
          <Pressable
            style={styles.nextBtn}
            onPress={() => navigation.navigate("CreateNewPassword")}
          >
            <Text style={styles.btnText}>Open Email</Text>
          </Pressable>

          <Text style={styles.desc}>
            Didnt receive an email{" "}
            <Text style={styles.resend}>Resend in 27s</Text>
          </Text>
        </View>
      </View>

      <View style={{ marginBottom: 30 }}>
        <Text style={styles.footer}>
          Did not receive the email? Please check your spam folder or try using{" "}
          <Text
            style={{ color: Colors.Primary }}
            onPress={() => navigation.goBack()}
          >
            another email address
          </Text>
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 30,
    marginHorizontal: 20,
    justifyContent: "space-between",
    backgroundColor: "#F5F5F5",
  },
  backBtn: {
    backgroundColor: "rgba(36, 122, 209, 0.05)",
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 50,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  info: {
    textAlign: "center",
    fontFamily: Fonts.Medium,
    fontSize: 14,
    color: Colors.header,
  },
  header: {
    textAlign: "center",
    fontFamily: Fonts.SemiBold,
    fontSize: 20,
    color: Colors.header,
  },
  desc: {
    textAlign: "center",
    color: Colors.Primary,
    fontFamily: Fonts.Medium,
    fontSize: 15,
  },
  nextBtn: {
    alignItems: "center",
    backgroundColor: Colors.Primary,
    paddingVertical: 20,
    borderRadius: 30,
    marginBottom: 20,
  },
  btnText: {
    textAlign: "center",
    color: Colors.white,
    fontSize: 14,
    fontFamily: Fonts.Medium,
  },
  footer: {
    color: Colors.header,
    fontFamily: Fonts.Regular,
    textAlign: "center",
  },
  resend: {
    color: "#757575",
    fontFamily: Fonts.Medium,
    fontSize: 10,
  },
});
export default Check;
