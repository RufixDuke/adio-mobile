import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import React, { useRef, useState } from "react";
import { Colors } from "../../../constants/colors";
import { Fonts } from "../../../constants/fonts";
import PhoneInput from "react-native-phone-number-input";

interface NavProps {
  nav: any;
}

const PersonalInfo = ({ nav }: NavProps) => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const phoneInput = useRef<PhoneInput>(null);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Pressable style={styles.wrapper} onPress={() => Keyboard.dismiss()}>
        <Text style={styles.header}>Personal Info</Text>

        <View style={styles.inputField}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            keyboardType="default"
            returnKeyType="done"
            placeholder="First Name"
            placeholderTextColor={Colors.header}
          />
        </View>

        <View style={styles.inputField}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            keyboardType="default"
            returnKeyType="done"
            placeholder="Last Name"
            placeholderTextColor={Colors.header}
          />
        </View>

        <View style={styles.inputField}>
          <Text style={styles.label}>Phone Number</Text>
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="NG"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withDarkTheme
            containerStyle={{
              borderWidth: 1,
              borderColor: "#247AD1",
              backgroundColor: "rgba(36, 122, 209, 0.05)",
              width: "100%",
              borderRadius: 4,
            }}
            textContainerStyle={{ backgroundColor: "rgba(36, 122, 209, 0.05)" }}
            placeholder="80 67899 464"
          />
        </View>
      </Pressable>
      <Pressable style={styles.nextBtn} onPress={nav}>
        <Text style={styles.btnText}>Create Account</Text>
      </Pressable>
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
    marginTop: 15,
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
    marginBottom: 30,
    marginTop: 20,
    marginHorizontal: 20,
  },
  btnText: {
    textAlign: "center",
    color: Colors.white,
    fontSize: 14,
    fontFamily: Fonts.Medium,
  },
  label: {
    marginBottom: 5,
    fontFamily: Fonts.Medium,
    color: Colors.header,
    fontSize: 15,
  },
});
export default PersonalInfo;
