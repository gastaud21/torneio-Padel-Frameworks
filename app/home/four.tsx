import { View, Text } from "react-native";
import AlterarEsporte from "../components/Buttons/Configuracoes/alterarEsporte";

export default function FourScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "#2A74CD",
      }}
    >
      <View>
        <Text>Selecione o esporte</Text>
        <AlterarEsporte
          esporte="Padel"
          imagem={require("../../assets/images/botao-padel.svg")}
        />
        <AlterarEsporte
          esporte="Beach"
          imagem={require("../../assets/images/botao-beach.svg")}
        />
      </View>
    </View>
  );
}
