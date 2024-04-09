import React, { useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Sliderone from "../Multislider/sliderone";
import Slidertwo from "../Multislider/slidertwo";
import Sliderthree from "../Multislider/sliderthree";
import Home from "../Home/home";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../Login/login";
import Records from "../Home/records";
import Device from "../Home/device";
import Profile from "../Home/profile";
import Success from "../Login/successmessage";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  const navigation = useNavigation();
  const HomeIcon = () => {
    return (
      <View style={styles.inactiveicon_container}>
        <Feather name="camera" color="black" size={20} />
      </View>
    );
  };
  const ActiveHomeIcon = () => {
    return (
      <View style={styles.bottomicon_container}>
        <Feather name="camera" size={20} color="#1F2587" />
      </View>
    );
  };

  const ActiveRecordIcon = () => {
    return (
      <View style={styles.bottomicon_container}>
        <MaterialCommunityIcons
          name="note-multiple-outline"
          color="#1F2587"
          size={20}
        />
      </View>
    );
  };
  const RecordIcon = () => {
    return (
      <View style={styles.inactiveicon_container}>
        <MaterialCommunityIcons
          name="note-multiple-outline"
          size={20}
          color="black"
        />
      </View>
    );
  };

  const ActiveDeviceIcon = () => {
    return (
      <View style={styles.bottomicon_container}>
        <MaterialCommunityIcons
          name="battery-check-outline"
          color="#1F2587"
          size={20}
        />
      </View>
    );
  };
  const DeviceIcon = () => {
    return (
      <View style={styles.inactiveicon_container}>
        <MaterialCommunityIcons
          name="battery-check-outline"
          size={20}
          color="black"
        />
      </View>
    );
  };
  const ActiveProfileIcon = () => {
    return (
      <View style={styles.bottomicon_container}>
        <Feather name="user" color="#1F2587" size={20} />
      </View>
    );
  };
  const ProfileIcon = () => {
    return (
      <View style={styles.inactiveicon_container}>
        <Feather name="user" size={20} color="black" />
      </View>
    );
  };

  useEffect(() => {
    // Check if the flag is set in AsyncStorage
    AsyncStorage.getItem("hasVisitedGetStarted").then((value) => {
      if (value === null) {
        // If the flag is not set, navigate to the "Get Started" page
        AsyncStorage.setItem("hasVisitedGetStarted", "true");
      } else {
        // If the flag is set, navigate to the login page
        navigation.navigate("login");
      }
    });
  }, []);

  return (
    <Tab.Navigator
      options={{
        headerShown: false,
      }}
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "white",
          borderTopColor: "#bcbdbf",
          elevation: 0,
          shadowOpacity: 0, // Set shadowOpacity to 0 to remove the shadow
          shadowColor: "transparent",
        },
        tabBarIcon: ({ focused, color, size }) => {
          let label;
          let IconComponent;
          //changing tab icon colors by route name
          if (route.name === "home") {
            IconComponent = focused ? ActiveHomeIcon : HomeIcon;
            label = "Home";
          } else if (route.name === "records") {
            IconComponent = focused ? ActiveRecordIcon : RecordIcon;

            label = "Records";
          } else if (route.name === "device") {
            IconComponent = focused ? ActiveDeviceIcon : DeviceIcon;
            label = "Device";
          } else if (route.name === "profile") {
            IconComponent = focused ? ActiveProfileIcon : ProfileIcon;
            label = "Profile";
          }
          // Return a custom component with icon and text
          return (
            <View style={{ alignItems: "center" }}>
              <IconComponent size={size} color={color} />
              <Text style={{ color, fontSize: 11 }}>{label}</Text>
            </View>
          );
        },
        tabBarActiveTintColor: "#1F2587",
        tabBarInactiveTintColor: "black",
      })}
    >
      <Tab.Screen
        name="sliderone"
        component={Sliderone}
        options={{
          headerShown: false,
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="records"
        component={Records}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="device"
        component={Device}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="login"
        component={Login}
        options={{
          headerShown: false,
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="slidertwo"
        component={Slidertwo}
        options={{
          headerShown: false,
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="sliderthree"
        component={Sliderthree}
        options={{
          headerShown: false,
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="success"
        component={Success}
        options={{
          headerShown: false,
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mainContainer: {
    flex: 1,
    width: 100,
    height: 100,
    minWidth: "100%",
    minHeight: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  bottomicon_container: {
    backgroundColor: "#61FFF6",
    width: 46,
    height: 26,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  inactiveicon_container: {
    width: 46,
    height: 26,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
