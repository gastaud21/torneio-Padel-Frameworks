import { View, Text } from "react-native";
import Jogos from "@/app/components/Jogos";

export default function JogosScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2C2C2C",
      }}
    >
      <Text>sdf</Text>
      <Jogos />
    </View>
  );
}
