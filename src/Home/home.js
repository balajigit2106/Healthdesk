import React, { useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StatusBar,
  BackHandler,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import homestyle from "./homestyle";
import { useNavigation, useIsFocused } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  const isFocuse = useIsFocused();

  const handleBack = () => {
    if (isFocuse) {
      navigation.navigate("login");
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
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={homestyle.cardimage_container}>
        <View
          style={{ flexDirection: "row", marginTop: 20, marginHorizontal: 20 }}
        >
          <View style={{ flex: 1 }}>
            <Text style={homestyle.hi_text}>Hi Balaji!</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <Ionicons name="notifications-outline" color="white" size={22} />
          </View>
        </View>

        <Image
          source={require("../images/card.png")}
          style={homestyle.card}
          resizeMode="contain"
        />
      </View>
      <View style={homestyle.container}>
        <Text style={homestyle.service_heading}>Our Services</Text>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <View style={{ flex: 1 }}>
            <Image
              source={require("../images/doctor.png")}
              style={homestyle.service_images}
              resizeMode="contain"
            />
            <Text style={homestyle.service_text}>Find a Doctor</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Image
              source={require("../images/labtest.png")}
              style={homestyle.service_images}
              resizeMode="contain"
            />
            <Text style={homestyle.service_text}>Book Labtest</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Image
              source={require("../images/healthtrack.png")}
              style={homestyle.service_images}
              resizeMode="contain"
            />
            <Text style={homestyle.service_text}>Health tracker</Text>
          </View>
        </View>

        <Image
          source={require("../images/booknow.png")}
          style={homestyle.booknow_image}
          resizeMode="contain"
        />
        <Text style={homestyle.quick_heading}>Quick Access</Text>

        <View style={{ flexDirection: "row", marginBottom: 20, marginTop: 10 }}>
          <View style={homestyle.quickaccess_cards}>
            <Image
              source={require("../images/healthdoctor.png")}
              style={homestyle.quickaccess_images}
              resizeMode="contain"
            />
            <Text style={homestyle.quickaccess_text}>My Doctors</Text>
          </View>
          <View style={homestyle.quickaccess_cards}>
            <TouchableOpacity
              onPress={() => navigation.navigate("success")}
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Image
                source={require("../images/calender.png")}
                style={homestyle.quickaccess_images}
                resizeMode="contain"
              />
              <Text style={homestyle.appointment_text}>Create Appointment</Text>
            </TouchableOpacity>
          </View>
          <View style={homestyle.report_card}>
            <Image
              source={require("../images/reports.png")}
              style={homestyle.quickaccess_images}
              resizeMode="contain"
            />
            <Text style={homestyle.quickaccess_text}>My Reports</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
