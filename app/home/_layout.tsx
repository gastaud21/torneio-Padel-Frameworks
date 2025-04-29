import { Tabs } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Octicons from "@expo/vector-icons/Octicons";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function RootLayout() {
  return (
    <React.Fragment>
      <StatusBar style="auto" />
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
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="numeric-2-box-outline"
                size={24}
                color="black"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="third"
          options={{
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
                name="numeric-5-box-outline"
                size={24}
                color="black"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="four"
          options={{
            title: "Configurações",
            tabBarIcon: () => <Octicons name="gear" size={24} color="black" />,
          }}
        />
      </Tabs>
    </React.Fragment>
  );
}
