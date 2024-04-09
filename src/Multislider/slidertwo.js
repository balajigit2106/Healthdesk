import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity, BackHandler } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import sliderstyle from "./sliderstyle";

export default function Slidertwo() {
  const navigation = useNavigation();
  const isFocuse = useIsFocused();

  const handleBack = () => {
    if (isFocuse) {
      navigation.navigate("sliderone");
      return true;
    }
    return false;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBack);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBack);
    };
  }, [isFocuse]);

  return (
    <View style={{ flex: 1, backgroundColor: "white", top: 0 }}>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../images/topellipse.png")}
            style={sliderstyle.topellipse_image}
            resizeMode="contain"
          />
          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("login")}>
              <Text style={sliderstyle.skip_button}>Skip</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../images/slidertwo.png")}
            style={sliderstyle.slidertwo_image}
            resizeMode="contain"
          />
          <Text style={sliderstyle.slider_heading}>Never Miss a Dose</Text>
          <View style={{ paddingHorizontal: 30 }}>
            <Text style={sliderstyle.slider_text}>
              Set up personalized medicine reminders to ensure you never miss a
              dose. Stay on top of your treatment plan with timely
              notifications.
            </Text>
          </View>
        </View>

        <View style={sliderstyle.slidercontainer}>
          <View style={{ flex: 0.1 }}>
            <View style={sliderstyle.activeslide} />
          </View>
          <View style={{ flex: 0.1 }}>
            <View style={sliderstyle.activeslide} />
          </View>
          <View style={{ flex: 0.1 }}>
            <View style={sliderstyle.inactiveslide} />
          </View>
        </View>
      </View>

      {/* bottom button */}
      <View style={{ alignItems: "flex-end", bottom: 0 }}>
        <Image
          source={require("../images/bottomellipse.png")}
          style={sliderstyle.bottomellipse_image}
          resizeMode="contain"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("sliderthree")}
          style={sliderstyle.rightarrow_container}
        >
          <Feather name="arrow-right" color="#00539C" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
