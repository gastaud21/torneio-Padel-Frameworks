import { View, Text } from "react-native";
import QuadraPadel from "@/app/components/quadraPadel";
import { useState, useEffect } from "react";

export default function QuadrasJogosScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2A74CD",
      }}
    >
      <Text>sdf</Text>
      <QuadraPadel />
    </View>
  );
}
