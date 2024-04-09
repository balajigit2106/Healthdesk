import React, { useEffect } from "react";
import { View, Text, Image, BackHandler } from "react-native";
import loginstyle from "./loginstyle";
import { useNavigation, useIsFocused } from "@react-navigation/native";

export default function Success() {
  const navigation = useNavigation();
  const isFocuse = useIsFocused();

  const handleBack = () => {
    if (isFocuse) {
      navigation.navigate("home");
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
    <View style={loginstyle.success_container}>
      <Image
        source={require("../images/successimage.png")}
        style={loginstyle.success_image}
        resizeMode="contain"
      />
      <Text style={loginstyle.success_heading}>Booking Successful</Text>
      <Text style={loginstyle.success_text}>
        Appointment has been successfully scheduled. After receiving
        confirmation, please proceed to complete the payment process.
      </Text>

      <View style={loginstyle.bottomLeftImageContainer}>
        <Image
          source={require("../images/successellipse.png")}
          style={loginstyle.bottomLeftImage}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}
