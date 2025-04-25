import {
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  ImageBackground,
} from "react-native";
import { QuadraPadel } from "../components/quadraPadel";
import { Button } from "@/app-example/components/button";

export default function Placar() {
  return (
    <View>
      <ImageBackground
        // source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        source={require("@/assets/images/quadra-padel.png")}
        resizeMode="cover"
      />
      <QuadraPadel />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 32,
  },
  quadra: {
    backgroundImage: "/assets/images/quadra-padel.png",
  },
});
