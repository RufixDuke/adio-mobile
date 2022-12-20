import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import React from "react";
import { Colors } from "../../constants/colors";
import { Fonts } from "../../constants/fonts";
import { SVG } from "../../components/SVGs/SVGs";
import BgImage from "../../components/HomeScreen/BgImage";
import { HomeBgs, HomeDevices } from "../../constants/data";
import Device from "../../components/HomeScreen/Device";

const HomeScreen = () => {
  return (
    <View style={styles.wrapper}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Image
              source={require("../../assets/icons/ade.png")}
              style={{
                borderRadius: 50,
                borderWidth: 2,
                borderColor: "#D9D9D9",
                marginRight: 5,
              }}
            />
            <View>
              <Text
                style={{
                  color: Colors.white,
                  fontFamily: Fonts.SemiBold,
                  fontSize: 20,
                }}
              >
                Sikiru Ademola
              </Text>
              <Text
                style={{
                  color: Colors.white,
                  fontFamily: Fonts.Regular,
                  fontSize: 16,
                }}
              >
                Good Morning
              </Text>
            </View>
          </View>
          <View>
            <SVG
              svg={`<svg width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 23.3337V24.667H0V23.3337L2.66667 20.667V12.667C2.66667 8.53366 5.37333 4.89366 9.33333 3.72033V3.33366C9.33333 2.62641 9.61429 1.94814 10.1144 1.44804C10.6145 0.947944 11.2928 0.666992 12 0.666992C12.7072 0.666992 13.3855 0.947944 13.8856 1.44804C14.3857 1.94814 14.6667 2.62641 14.6667 3.33366V3.72033C18.6267 4.89366 21.3333 8.53366 21.3333 12.667V20.667L24 23.3337ZM14.6667 26.0003C14.6667 26.7076 14.3857 27.3858 13.8856 27.8859C13.3855 28.386 12.7072 28.667 12 28.667C11.2928 28.667 10.6145 28.386 10.1144 27.8859C9.61429 27.3858 9.33333 26.7076 9.33333 26.0003" fill="white"/>
</svg>`}
              width={"24px"}
              height={"28px"}
            />
            <Text style={styles.notificationText}>2</Text>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerMain}>Location</Text>
            <Text style={styles.see}>See all</Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {HomeBgs.map((img) => (
                <BgImage
                  url={img.url}
                  name={img.name}
                  numDevices={img.numDevices}
                  key={img.id}
                />
              ))}
            </ScrollView>
          </View>
          <Text style={styles.divider}></Text>

          <View style={{ flex: 1 }}>
            <View style={[styles.header, { marginTop: 10 }]}>
              <Text style={styles.headerMain}>Devices</Text>
              <Text style={styles.see}>See all</Text>
            </View>

            <View>
              <FlatList
                data={HomeDevices}
                numColumns={2}
                keyExtractor={(item, index) => item.id.toString()}
                renderItem={({ item, index }) => (
                  <View style={styles.devicesContainer}>
                    <Device
                      svg={item.img}
                      name={item.name}
                      numDevices={item.numDevices}
                      key={item.id}
                      bg={item.bg}
                    />
                  </View>
                )}
              />
            </View>
          </View>

          <View
            style={{
              // flex: 1,
              alignItems: "center",
              margin: "auto",
              // position: "absolute",
              bottom: 50,
              // zIndex: 100000000000,
            }}
          >
            <View
              style={{
                backgroundColor: Colors.Primary,
                paddingVertical: 15,
                paddingHorizontal: 20,
                width: Dimensions.get("window").width / 6,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 50,
              }}
            >
              <SVG
                svg={`<svg width="24" height="31" viewBox="0 0 24 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0223 19.7195C10.6809 19.7195 9.54071 19.25 8.60173 18.311C7.66275 17.372 7.19326 16.2319 7.19326 14.8905V5.23236C7.19326 3.89096 7.66275 2.75077 8.60173 1.81179C9.54071 0.872811 10.6809 0.40332 12.0223 0.40332C13.3637 0.40332 14.5039 0.872811 15.4429 1.81179C16.3819 2.75077 16.8513 3.89096 16.8513 5.23236V14.8905C16.8513 16.2319 16.3819 17.372 15.4429 18.311C14.5039 19.25 13.3637 19.7195 12.0223 19.7195ZM10.4126 30.9873V26.0375C7.62251 25.6619 5.3153 24.4144 3.49099 22.295C1.66668 20.1756 0.754532 17.7074 0.754532 14.8905H3.97389C3.97389 17.1172 4.75888 19.015 6.32886 20.5839C7.89776 22.1539 9.79558 22.9389 12.0223 22.9389C14.249 22.9389 16.1474 22.1539 17.7174 20.5839C19.2863 19.015 20.0707 17.1172 20.0707 14.8905H23.2901C23.2901 17.7074 22.3779 20.1756 20.5536 22.295C18.7293 24.4144 16.4221 25.6619 13.632 26.0375V30.9873H10.4126Z" fill="white"/>
</svg>`}
                width={"22.54px"}
                height={"30.58px"}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.Primary,
    paddingTop: 30,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    marginTop: 50,
    borderTopEndRadius: 18,
    borderTopLeftRadius: 18,
    paddingTop: 15,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerMain: {
    color: "#555555",
    fontFamily: Fonts.SemiBold,
    fontSize: 18,
  },
  see: {
    color: Colors.Primary,
    fontFamily: Fonts.Regular,
    fontSize: 14,
  },
  notificationText: {
    fontSize: 9,
    fontFamily: Fonts.Medium,
    color: Colors.white,
    backgroundColor: "#D30505",
    position: "absolute",
    right: -3,
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 30,
    top: -5,
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: "#DBDBDB",
    paddingHorizontal: 10,
  },
  devicesContainer: {
    flex: 1,
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default HomeScreen;
