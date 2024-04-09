import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  Keyboard,
  BackHandler,
  StatusBar,
} from "react-native";
import loginstyle from "./loginstyle";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
  const navigation = useNavigation();
  const isFocuse = useIsFocused();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  useEffect(() => {
    handleStoreCredentials();
  }, []);

  const handleBack = () => {
    if (isFocuse) {
      BackHandler.exitApp();
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

  const handleStoreCredentials = async () => {
    // store username and password locally
    await AsyncStorage.setItem("username", "balaji");
    await AsyncStorage.setItem("password", "12345678");
  };
  const handleUsername = (text) => {
    setUserName(text);
  };
  const handlePassword = (text) => {
    setPassword(text);
  };
  const handleLogin = async () => {
    Keyboard.dismiss();
    if (!userName || !password) {
      Alert.alert("Error", "Please enter both username and password");
      return;
    }
    // Retrieve stored credentials
    try {
      const storedUsername = await AsyncStorage.getItem("username");
      const storedPassword = await AsyncStorage.getItem("password");

      // Check if entered credentials match stored ones
      if (userName === storedUsername && password === storedPassword) {
        navigation.navigate("home");
      } else {
        Alert.alert("Error", "Invalid username or password");
      }
    } catch (error) {
      console.error("Error retrieving credentials:", error.message);
    }
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View style={loginstyle.container}>
        <StatusBar barStyle="#fff" backgroundColor="#1F2587" hidden={false} />
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../images/loginlogo.png")}
            style={loginstyle.loginlogo}
            resizeMode="contain"
          />
        </View>
        <Text style={loginstyle.login_heading}>Health Desk</Text>
        <Text style={loginstyle.corporate_text}>Corporate Login</Text>
        <Text style={loginstyle.welcome_text}>Hi, Welcome Back!</Text>

        <View style={{ marginHorizontal: 16, marginTop: 40 }}>
          <Text style={loginstyle.inputlabel}>UserName</Text>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <View style={loginstyle.inputicon_container}>
                <Feather name="user" color="black" size={18} />
              </View>
            </View>
            <View style={{ flex: 9 }}>
              <TextInput
                style={loginstyle.input}
                onChangeText={handleUsername}
              />
            </View>
          </View>

          <Text style={loginstyle.passwordinputlabel}>Password</Text>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <View style={loginstyle.inputicon_container}>
                <Feather name="lock" color="black" size={18} />
              </View>
            </View>
            <View style={{ flex: 9 }}>
              <TextInput
                style={loginstyle.input}
                secureTextEntry={!isPasswordVisible}
                onChangeText={handlePassword}
              />
              <TouchableOpacity
                style={loginstyle.eyeicon_Container}
                onPress={togglePasswordVisibility}
              >
                <Feather
                  name={isPasswordVisible ? "eye" : "eye-off"}
                  size={20}
                  color="#999"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* login button */}
          <TouchableOpacity
            style={loginstyle.login_button}
            onPress={handleLogin}
          >
            <Text style={{ fontWeight: "600", color: "white" }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
