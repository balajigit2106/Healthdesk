import React from "react";
import { View, Text } from "react-native";
import homestyle from "./homestyle";

export default function Records() {
  return (
    <View style={homestyle.record_container}>
      <Text style={homestyle.record_text}>Records</Text>
    </View>
  );
}
