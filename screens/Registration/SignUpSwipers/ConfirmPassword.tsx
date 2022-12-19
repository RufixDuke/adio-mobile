import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../../../constants/colors";
import { Fonts } from "../../../constants/fonts";

interface NextPageProp {
  position: any;
}

const ConfirmPassword = ({ position }: NextPageProp) => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Pressable style={styles.wrapper} onPress={() => Keyboard.dismiss()}>
        <Text style={styles.header}>Confirm your password</Text>
        <Text style={styles.description}>
          Please re-enter your password to confirm.
        </Text>

        <View style={styles.inputField}>
          <TextInput
            style={styles.input}
            keyboardType="default"
            returnKeyType="done"
            placeholder="********************"
            placeholderTextColor={Colors.header}
            secureTextEntry={showPassword}
          />
          <Text
            style={styles.password}
            onPress={() => setShowPassword(!showPassword)}
          >
            SHOW
          </Text>
        </View>
      </Pressable>

      <View style={{ marginBottom: 30, marginTop: 20 }}>
        <Pressable style={styles.nextBtn} onPress={position}>
          <Text style={styles.btnText}>Next</Text>
        </Pressable>

        <Text style={{ textAlign: "center", marginTop: 10 }}>
          Already have an account?{" "}
          <Text style={{ color: "#247AD1", fontFamily: Fonts.Regular }}>
            Login
          </Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  wrapper: {
    marginHorizontal: 25,
    paddingTop: 20,
  },
  header: {
    color: Colors.header,
    fontSize: 18,
    fontFamily: Fonts.Medium,
  },
  description: {
    fontSize: 14,
    color: Colors.header,
    fontFamily: Fonts.Regular,
    marginTop: 5,
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
  password: {
    position: "absolute",
    right: 15,
    top: 22,
    color: Colors.header,
    fontSize: 12,
    fontFamily: Fonts.SemiBold,
  },
  nextBtn: {
    alignItems: "center",
    backgroundColor: Colors.Primary,
    paddingVertical: 20,
    borderRadius: 30,

    marginHorizontal: 20,
  },
  btnText: {
    textAlign: "center",
    color: Colors.white,
    fontSize: 14,
    fontFamily: Fonts.Medium,
  },
});
export default ConfirmPassword;
