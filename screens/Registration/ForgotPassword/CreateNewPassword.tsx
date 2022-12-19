import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { SVG } from "../../../components/SVGs/SVGs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Fonts } from "../../../constants/fonts";
import { Colors } from "../../../constants/colors";

type RootStackParamList = {
  CreateNewPassword: undefined;
  LoginScreen: undefined;
};

interface checkPasswordModel {
  passwordLongEnough: string;
  passwordValid: boolean;
}

interface SyntheticEvent {
  bubbles: boolean;
  cancelable: boolean;
  currentTarget: EventTarget;
  defaultPrevented: boolean;
  eventPhase: number;
  isTrusted: boolean;
  nativeEvent: Event;
  preventDefault(): void;
  stopPropagation(): void;
  target: EventTarget;
  timeStamp: Date;
  type: string;
}

type Props = NativeStackScreenProps<RootStackParamList, "CreateNewPassword">;

const CreateNewPassword = ({ navigation }: Props) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [newErrorMessage, setNewErrorMessage] = useState("");
  const [confirmErrorMessage, setConfirmErrorMessage] = useState("");

  const handleNewPassword = (password: string) => {
    setNewPassword(password);
    if (password.length < 8 && password.length > 0) {
      setNewErrorMessage("Must be more than 8 characters");
    } else if (password !== confirmPassword && confirmPassword.length < 0) {
      setNewErrorMessage("Password must the same");
    } else {
      setNewErrorMessage("");
    }
  };

  const handleConfirmPassword = (password: string) => {
    setConfirmPassword(password);
    if (password !== newPassword && password.length > 0) {
      setConfirmErrorMessage("Must match the new password");
    } else if (password !== newPassword) {
      setConfirmErrorMessage("Must match the new passwords");
    }
    // else if (confirmPassword.length === 0) {
    //   setConfirmErrorMessage("");
    // }
    else {
      setConfirmErrorMessage("");
    }
  };

  return (
    <Pressable style={styles.wrapper} onPress={() => Keyboard.dismiss()}>
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
        <Text style={styles.header}>Create New Password</Text>
        <Text style={styles.desc}>
          Create a new password to login to your account
        </Text>

        <View style={styles.inputField}>
          <Text style={styles.label}>New Password</Text>
          <View>
            <TextInput
              style={styles.input}
              keyboardType="default"
              returnKeyType="done"
              placeholder="********************"
              value={newPassword}
              placeholderTextColor={Colors.header}
              secureTextEntry={showPassword}
              onChangeText={(e) => handleNewPassword(e)}
              autoFocus={false}
            />
            <Text
              style={styles.password}
              onPress={() => setShowPassword(!showPassword)}
            >
              SHOW
            </Text>
          </View>
          <Text
            style={{
              color: Colors.error,
              fontFamily: Fonts.Regular,
              fontSize: 12,
              marginTop: 5,
            }}
          >
            {newErrorMessage}
          </Text>
        </View>

        <View style={styles.inputField}>
          <Text style={styles.label}>Confirm New Password</Text>
          <View>
            <TextInput
              style={styles.input}
              keyboardType="default"
              returnKeyType="done"
              placeholder="********************"
              placeholderTextColor={Colors.header}
              secureTextEntry={showConfirmPassword}
              onChangeText={(e) => handleConfirmPassword(e)}
              value={confirmPassword}
              autoFocus={false}
            />
            <Text
              style={styles.password}
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              SHOW
            </Text>
          </View>
          <Text
            style={{
              color: Colors.error,
              fontFamily: Fonts.Regular,
              fontSize: 12,
              marginTop: 5,
              marginBottom: 5,
            }}
          >
            {confirmErrorMessage}
          </Text>
        </View>
      </View>

      <View style={{ marginTop: 30 }}>
        <Pressable
          style={[
            styles.nextBtn,
            {
              backgroundColor:
                newErrorMessage || confirmErrorMessage
                  ? "gray"
                  : Colors.Primary,
            },
          ]}
          onPress={() => console.log("Not disable")}
          disabled={newErrorMessage || confirmErrorMessage ? true : false}
        >
          <Text style={styles.btnText}>Reset Password</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 30,
    marginHorizontal: 20,
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
  header: {
    fontFamily: Fonts.SemiBold,
    fontSize: 20,
    color: Colors.header,
  },
  desc: {
    color: Colors.header,
    fontFamily: Fonts.Medium,
    fontSize: 14,
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
    zIndex: 1000,
  },
  label: {
    color: Colors.header,
    fontFamily: Fonts.Medium,
    fontSize: 14,
    marginBottom: 5,
  },
  nextBtn: {
    alignItems: "center",
    // backgroundColor: Colors.Primary,
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
});
export default CreateNewPassword;
