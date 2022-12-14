import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { SVG } from "../../components/SVGs/SVGs";
import StepIndicator from "react-native-step-indicator";
import Swiper from "react-native-swiper";
import CreatePassword from "./SignUpSwipers/CreatePassword";
import ConfirmPassword from "./SignUpSwipers/ConfirmPassword";

const SignUpScreen = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const customStyles = {
    stepIndicatorSize: 15,
    currentStepIndicatorSize: 15,
    separatorStrokeWidth: 3,
    currentStepStrokeWidth: 7.5,
    stepStrokeCurrentColor: "#247AD1",
    stepStrokeWidth: 7.5,
    stepStrokeFinishedColor: "#247AD1",
    stepStrokeUnFinishedColor: "rgba(36, 122, 209, 0.1)",
    separatorFinishedColor: "#247AD1",
    separatorUnFinishedColor: "rgba(36, 122, 209, 0.1)",
    stepIndicatorFinishedColor: "#247AD1",
  };

  const onStepPress = (position: number) => {
    setCurrentPosition(position);
  };

  return (
    <View style={styles.wrapper}>
      <Pressable style={styles.backBtn}>
        <SVG
          svg={`<svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.13158 14.3949L1.07894 8.34227C0.947365 8.2107 0.854382 8.06815 0.799996 7.91464C0.744733 7.76113 0.717102 7.59666 0.717102 7.42122C0.717102 7.24578 0.744733 7.08131 0.799996 6.9278C0.854382 6.77429 0.947365 6.63175 1.07894 6.50017L7.13158 0.447535C7.37281 0.206307 7.67982 0.0856934 8.05263 0.0856934C8.42544 0.0856934 8.73245 0.206307 8.97368 0.447535C9.21491 0.688763 9.33552 0.995781 9.33552 1.36859C9.33552 1.7414 9.21491 2.04841 8.97368 2.28964L3.8421 7.42122L8.97368 12.5528C9.21491 12.794 9.33552 13.101 9.33552 13.4739C9.33552 13.8467 9.21491 14.1537 8.97368 14.3949C8.73245 14.6361 8.42544 14.7568 8.05263 14.7568C7.67982 14.7568 7.37281 14.6361 7.13158 14.3949Z" fill="#247AD1"/>
</svg>`}
          width={"8.62px"}
          height={"14.67px"}
        />
      </Pressable>

      <StepIndicator
        stepCount={4}
        customStyles={customStyles}
        currentPosition={currentPosition}
        onPress={onStepPress}
      />

      <Swiper
        style={{ flexGrow: 1 }}
        loop={false}
        index={currentPosition}
        autoplay={false}
        onIndexChanged={(page) => {
          setCurrentPosition(page);
        }}
        showsPagination={false}
      >
        <CreatePassword />
        <ConfirmPassword />
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 40,
  },
  backBtn: {
    backgroundColor: "rgba(36, 122, 209, 0.05)",
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 50,
    marginHorizontal: 20,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
});
export default SignUpScreen;
