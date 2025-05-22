import { Tabs } from "expo-router";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Octicons from "@expo/vector-icons/Octicons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Slot } from "expo-router";
import { SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import HeaderHome from "../components/HeaderHome";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    PostNoBillsColomboExtraBold: require("../../assets/fonts/PostNoBillsColombo-ExtraBold.ttf"),
    PostNoBillsColomboBold: require("../../assets/fonts/PostNoBillsColombo-Bold.ttf"),
  });

  // Evita exibir o app antes da fonte carregar
  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // ou <Loading />
  }

  return (
    <React.Fragment>
      <StatusBar style="auto" />
      <HeaderHome />
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: () => <Ionicons name="home" size={24} color="black" />,
          }}
        />
        <Tabs.Screen
          name="second"
          options={{
            title: "Jogos",
            tabBarIcon: () => (
              <Ionicons name="tennisball" size={24} color="black" />
            ),
          }}
        />
        <Tabs.Screen
          name="quadras/index"
          options={{
            title: "Quadras",
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="numeric-3-box-outline"
                size={24}
                color="black"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="placar/index"
          options={{
            title: "Placar",
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="scoreboard-outline"
                size={24}
                color="black"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="configuracoes/index"
          options={{
            title: "Configurações",
            tabBarIcon: () => <Octicons name="gear" size={24} color="black" />,
          }}
        />
      </Tabs>
    </React.Fragment>
  );
}
