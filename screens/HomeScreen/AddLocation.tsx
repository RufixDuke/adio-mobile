import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../../constants/colors";
import { Fonts } from "../../constants/fonts";
import AddDevice from "../../components/HomeScreen/AddDevice";
import { Devices, Locations } from "../../constants/data";
import { SVG } from "../../components/SVGs/SVGs";

const AddLocation = () => {
  const [devices, setDevices] = useState<any>([]);

  const onSelect = (ind: number) => {
    const data: any[] = [];
    Devices.map((item, index) => {
      console.log("first");
      if (index === ind) {
        if (item.active === false) {
          console.log("second");
          data.push(true);
          console.log("third");
        } else {
          console.log("fourth");
          data.push(false);
          console.log("fifth");
        }
      }
      // } else {
      //   if (item.active === true) {
      //     console.log("sixth");
      //     data.push(true);
      //     console.log("seventh");
      //   } else {
      //     console.log("eight");
      //     data.push(true);
      //     console.log("ninth");
      //   }
      // }
    });
    setDevices(data);
  };

  // const onPressHandler = (id: number) => {
  //   let renderData=[...devices.renderData];
  //   for(let data of renderData){
  //     if(data.id === id){
  //       data.selected=(data.active==null)?true:false;
  //       break;
  //     }
  //   }
  //   setDevices({renderData});
  // }

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text
          style={{
            color: Colors.white,
            fontSize: 25,
            fontFamily: Fonts.SemiBold,
          }}
        >
          Location
        </Text>
        <Text
          style={{
            color: Colors.white,
            fontSize: 16,
            fontFamily: Fonts.Regular,
          }}
        >
          Select the location of the IOT device
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: Colors.white,
          marginTop: 50,
          borderTopEndRadius: 18,
          borderTopLeftRadius: 18,
          justifyContent: "space-between",
        }}
      >
        <View>
          <View style={styles.container}>
            <FlatList
              data={Locations}
              numColumns={4}
              keyExtractor={(item, index) => item.id.toString()}
              renderItem={({ item, index }) => (
                <Pressable
                  style={{
                    flex: 1,
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 15,
                    backgroundColor: item.active === true ? Colors.Primary : "",
                  }}
                  // onPress={() => onSelect(item.id)}
                  onPress={() => (item.active = true)}
                >
                  <AddDevice
                    name={item.name}
                    svg={item.imgUrl}
                    id={item.id}
                    key={item.id}
                  />
                </Pressable>
              )}
            />
          </View>
        </View>
        <Pressable
          style={{
            flexDirection: "row",
            justifyContent: "center",
            // marginBottom: 50,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: Colors.Primary,
              fontSize: 16,
              fontFamily: Fonts.Medium,
              marginRight: 5,
            }}
          >
            Skip
          </Text>
          <SVG
            svg={`<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.3 11.2748C9.1 11.0748 9.004 10.8331 9.012 10.5498C9.02067 10.2665 9.125 10.0248 9.325 9.8248L12.15 6.9998H1C0.716667 6.9998 0.479 6.9038 0.287 6.7118C0.0956668 6.52047 0 6.28314 0 5.9998C0 5.71647 0.0956668 5.4788 0.287 5.2868C0.479 5.09547 0.716667 4.9998 1 4.9998H12.15L9.3 2.1498C9.1 1.9498 9 1.71214 9 1.4368C9 1.16214 9.1 0.924804 9.3 0.724804C9.5 0.524804 9.73767 0.424805 10.013 0.424805C10.2877 0.424805 10.525 0.524804 10.725 0.724804L15.3 5.2998C15.4 5.3998 15.471 5.50814 15.513 5.6248C15.5543 5.74147 15.575 5.86647 15.575 5.9998C15.575 6.13314 15.5543 6.25814 15.513 6.3748C15.471 6.49147 15.4 6.5998 15.3 6.6998L10.7 11.2998C10.5167 11.4831 10.2877 11.5748 10.013 11.5748C9.73767 11.5748 9.5 11.4748 9.3 11.2748Z" fill="#247AD1"/>
</svg>`}
            width={"15.58px"}
            height={"11.15px"}
          />
        </Pressable>

        <Pressable style={styles.nextBtn}>
          <Text style={styles.btnText}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: Colors.Primary,
  },
  header: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  nextBtn: {
    alignItems: "center",
    backgroundColor: Colors.Primary,
    paddingVertical: 20,
    borderRadius: 30,
    marginHorizontal: 20,
    marginBottom: 30,
  },
  btnText: {
    textAlign: "center",
    color: Colors.white,
    fontSize: 14,
    fontFamily: Fonts.Medium,
  },
});
export default AddLocation;
