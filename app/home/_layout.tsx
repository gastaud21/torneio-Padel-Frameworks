import { Tabs } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <React.Fragment>
      <StatusBar style="auto" />
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="numeric-1-box-outline"
                size={24}
                color="black"
              />
            ),
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
          name="four"
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="numeric-4-box-outline"
                size={24}
                color="black"
              />
            ),
          }}
        />
      </Tabs>
    </React.Fragment>
  );
}
