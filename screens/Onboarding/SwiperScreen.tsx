import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import Swiper from "react-native-swiper";
import { Slider1SVG } from "../../components/SVGs/OnboardingSVG";
import { Fonts } from "../../constants/fonts";
import { Colors } from "../../constants/colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  SwiperScreen: undefined;
  Welcome1: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "SwiperScreen">;

const SwiperScreen = ({ navigation }: Props) => {
  const [showYoruba, setShowYoruba] = useState(true);
  const changeLang = () => {
    setShowYoruba(!showYoruba);
  };
  return (
    <View style={styles.wrapper}>
      <Swiper
        loop={false}
        index={0}
        activeDot={
          <View
            style={{
              backgroundColor: "#247AD1",
              width: 33,
              height: 7,
              borderRadius: 12,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
        dotStyle={{
          backgroundColor: "rgba(36, 122, 209, 0.1)",
          width: 7,
          height: 7,
        }}
      >
        <View style={{ marginHorizontal: 20 }}>
          <View style={styles.SVG}>
            <Slider1SVG />
          </View>
          {showYoruba ? (
            <Text style={styles.headerText}>
              Ṣakoso awọn ẹrọ ile ọlọgbọn rẹ
            </Text>
          ) : (
            <Text style={styles.headerText}>
              Manage your smart home devices
            </Text>
          )}

          {showYoruba ? (
            <Text style={styles.headerNote}>
              Adio gba ọ laaye lati ṣakoso ni irọrun ati ṣakoso awọn ẹrọ ile
              ọlọgbọn rẹ nipa lilo foonu rẹ tabi tabulẹti, pese ọna irọrun ati
              aabo lati ṣẹda agbegbe ile itunu.
            </Text>
          ) : (
            <Text style={styles.headerNote}>
              Adio allows you to easily control and manage your smart home
              devices using your phone or tablet, providing a convenient and
              secure way to create a comfortable home environment.
            </Text>
          )}

          <Text style={styles.translateBtn} onPress={() => changeLang()}>
            Translate {showYoruba ? "English" : "Yoruba"}
          </Text>
        </View>

        <View style={{ marginHorizontal: 20 }}>
          <View style={styles.SVG}>
            <Slider1SVG />
          </View>
          {showYoruba ? (
            <Text style={styles.headerText}>Idanimọ ohun</Text>
          ) : (
            <Text style={styles.headerText}>Voice Recognition</Text>
          )}

          {showYoruba ? (
            <Text style={styles.headerNote}>
              Adio nlo imọ-ẹrọ idanimọ ohun to ti ni ilọsiwaju lati loye ni
              deede ati ni iyara ati dahun si awọn aṣẹ rẹ.”
            </Text>
          ) : (
            <Text style={styles.headerNote}>
              Adio utilizes advanced voice recognition technology to accurately
              and quickly understand and respond to your commands."
            </Text>
          )}

          <Text style={styles.translateBtn} onPress={() => changeLang()}>
            Translate {showYoruba ? "English" : "Yoruba"}
          </Text>
        </View>

        <View style={{ marginHorizontal: 20 }}>
          <View style={styles.SVG}>
            <Slider1SVG />
          </View>
          {showYoruba ? (
            <Text style={styles.headerText}>Awọn idari ko o ati ogbon inu</Text>
          ) : (
            <Text style={styles.headerText}>Clear and Intuitive controls</Text>
          )}

          {showYoruba ? (
            <Text style={styles.headerNote}>
              Adio ni wiwo ore-olumulo ati mimọ, awọn idari inu inu fun awọn ẹrọ
              smati rẹ. O le ni rọọrun ṣatunṣe iwọn otutu, tan ina ati pa, ati
              paapaa ṣe atẹle awọn kamẹra aabo lati ibikibi nipa lilo ohun elo
              naa.
            </Text>
          ) : (
            <Text style={styles.headerNote}>
              Adio has a user-friendly interface and clear, intuitive controls
              for your smart devices. You can easily adjust the temperature,
              turn lights on and off, and even monitor security cameras from
              anywhere using the app.
            </Text>
          )}

          <Text style={styles.translateBtn} onPress={() => changeLang()}>
            Translate {showYoruba ? "English" : "Yoruba"}
          </Text>
        </View>

        <View style={{ marginHorizontal: 20 }}>
          <View style={styles.SVG}>
            <Slider1SVG />
          </View>
          {showYoruba ? (
            <Text style={styles.headerText}>
              Easy Smart Device Home Integration
            </Text>
          ) : (
            <Text style={styles.headerText}>Easy Smart Home Integration </Text>
          )}

          <Text style={styles.headerNote}>
            {showYoruba
              ? "Adio n ṣiṣẹ pẹlu awọn iru ẹrọ ile ọlọgbọn olokiki, jẹ ki o rọrun fun ọ lati ṣafikun awọn ẹrọ tuntun ati faagun eto ile ọlọgbọn rẹ."
              : "Adio works with popular smart home platforms, making it easy for you to add new devices and expand your smart home system."}
          </Text>

          <Text style={styles.translateBtn} onPress={() => changeLang()}>
            Translate {showYoruba ? "English" : "Yoruba"}
          </Text>
        </View>
      </Swiper>

      <Pressable
        style={styles.skipBtn}
        onPress={() => navigation.navigate("Welcome1")}
      >
        <Text style={styles.btnText}>Get Started</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#F5F5F5",
    paddingTop: 30,
    flex: 1,
    marginHorizontal: 20,
  },
  SVG: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#222222",
    fontSize: 20,
    fontFamily: Fonts.Bold,
    textAlign: "center",
  },
  headerNote: {
    color: "#000000",
    fontSize: 14,
    fontFamily: Fonts.Medium,
    textAlign: "center",
    marginTop: 5,
  },
  translateBtn: {
    paddingTop: 60,
    color: Colors.Primary,
    fontSize: 14,
    fontFamily: Fonts.Medium,
    textAlign: "center",
  },
  skipBtn: {
    backgroundColor: Colors.Primary,
    paddingVertical: 20,
    borderRadius: 30,
    marginBottom: 30,
    marginTop: 20,
  },
  btnText: {
    textAlign: "center",
    color: Colors.white,
    fontSize: 14,
    fontFamily: Fonts.Medium,
  },
});

export default SwiperScreen;
