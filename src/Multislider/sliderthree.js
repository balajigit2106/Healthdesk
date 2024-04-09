import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity, BackHandler } from "react-native";
import { Feather } from "@expo/vector-icons";
import sliderstyle from "./sliderstyle";
import { useNavigation, useIsFocused } from "@react-navigation/native";

export default function Sliderthree() {
  const navigation = useNavigation();
  const isFocuse = useIsFocused();

  const handleBack = () => {
    if (isFocuse) {
      navigation.navigate("slidertwo");
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
        <Image
          source={require("../images/topellipse.png")}
          style={sliderstyle.topellipse_image}
          resizeMode="contain"
        />

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../images/sliderthree.png")}
            style={sliderstyle.sliderthree_image}
            resizeMode="contain"
          />
          <Text style={sliderstyle.sliderthree_heading}>
            Smart Health Checkup
          </Text>
          <View style={{ paddingHorizontal: 20 }}>
            <Text style={sliderstyle.slider_text}>
              Experience the future of healthcare with our smart checkup
              feature. Get instant health insights and personalized
              recommendations
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
            <View style={sliderstyle.activeslide} />
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
          onPress={() => navigation.navigate("login")}
          style={sliderstyle.rightarrow_container}
        >
          <Feather name="arrow-right" color="#00539C" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
