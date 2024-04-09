import React from "react";
import { View, Text } from "react-native";
import homestyle from "./homestyle";

export default function Device() {
  return (
    <View style={homestyle.record_container}>
      <Text style={homestyle.record_text}>Device</Text>
    </View>
  );
}
