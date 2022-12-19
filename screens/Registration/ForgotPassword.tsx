import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { SVG } from "../../components/SVGs/SVGs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Colors } from "../../constants/colors";
import { Fonts } from "../../constants/fonts";

type RootStackParamList = {
  ForgotPassword: undefined;
  Check: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "ForgotPassword">;

const ForgotPassword = ({ navigation }: Props) => {
  return (
    <Pressable style={styles.wrapper} onPress={() => Keyboard.dismiss()}>
      <Pressable>
        <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
          <SVG
            svg={`<svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.13158 14.3949L1.07894 8.34227C0.947365 8.2107 0.854382 8.06815 0.799996 7.91464C0.744733 7.76113 0.717102 7.59666 0.717102 7.42122C0.717102 7.24578 0.744733 7.08131 0.799996 6.9278C0.854382 6.77429 0.947365 6.63175 1.07894 6.50017L7.13158 0.447535C7.37281 0.206307 7.67982 0.0856934 8.05263 0.0856934C8.42544 0.0856934 8.73245 0.206307 8.97368 0.447535C9.21491 0.688763 9.33552 0.995781 9.33552 1.36859C9.33552 1.7414 9.21491 2.04841 8.97368 2.28964L3.8421 7.42122L8.97368 12.5528C9.21491 12.794 9.33552 13.101 9.33552 13.4739C9.33552 13.8467 9.21491 14.1537 8.97368 14.3949C8.73245 14.6361 8.42544 14.7568 8.05263 14.7568C7.67982 14.7568 7.37281 14.6361 7.13158 14.3949Z" fill="#247AD1"/>
</svg>`}
            width={"8.62px"}
            height={"14.67px"}
          />
        </Pressable>
        <View>
          <Text style={styles.header}>Reset Password</Text>
          <Text style={styles.desc}>
            To reset your password, please enter the email address associated
            with your account and we will send an email with instructions on how
            to reset your password.
          </Text>

          <View style={styles.inputField}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              returnKeyType="done"
              placeholder="Input your email address"
              placeholderTextColor={Colors.header}
            />
          </View>
        </View>
      </Pressable>

      <Pressable
        style={styles.nextBtn}
        onPress={() => navigation.navigate("Check")}
      >
        <Text style={styles.btnText}>Send Email</Text>
      </Pressable>
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
  input: {
    backgroundColor: "rgba(36, 122, 209, 0.05)",
    borderWidth: 1,
    borderColor: "#247AD1",
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 15,
    fontSize: 14,
    fontFamily: Fonts.Medium,
  },
  inputField: {
    marginTop: 20,
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
  header: {
    color: Colors.header,
    fontSize: 20,
    fontFamily: Fonts.SemiBold,
  },
  desc: {
    color: Colors.header,
    fontFamily: Fonts.Regular,
    fontSize: 14,
  },
  label: {
    color: Colors.header,
    fontFamily: Fonts.Medium,
    fontSize: 15,
    marginBottom: 5,
  },
});

export default ForgotPassword;
