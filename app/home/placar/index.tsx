import QuadraPadel from "@/app/components/quadraPadel";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  ImageBackground,
} from "react-native";

export default function Placar() {
  return (
    <View>
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
