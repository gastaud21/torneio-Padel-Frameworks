import { View, Text } from "react-native";
import QuadraPadel from "@/app/components/quadraPadel";
import { useState, useEffect } from "react";
import { useSettingsStore } from "@/app/store/useSettingsStore";

export default function QuadrasJogosScreen() {
  const { esporte } = useSettingsStore();
  //   const setEsporte = useSettingsStore((state) => state.setEsporte);

  //   const handleChangeEsporte = () => {
  //     // Alterna entre dois esportes como exemplo
  //     const novoEsporte = esporte === "Padel" ? "Beach Tennis" : "Padel";
  //     setEsporte(novoEsporte);
  //     console.log(novoEsporte);
  //   };
  console.log(esporte);

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
      <QuadraPadel esporte={esporte} />
    </View>
  );
}
