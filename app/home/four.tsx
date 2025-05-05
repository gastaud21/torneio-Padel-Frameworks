import { View, Text, StyleSheet } from "react-native";
import AlterarEsporte from "../components/Buttons/Configuracoes/alterarEsporte";
import { Avatar, Divider } from "@rneui/base";

export default function FourScreen() {
  return (
    <View
      style={
        {
          // flex: 1,
          // backgroundColor: "#2A74CD",
        }
      }
    >
      <View>
        <Avatar
          rounded
          size={100}
          source={{
            uri: "https://www.padelfip.com/wp-content/uploads/2023/02/Stupaczuk-2.png",
          }}
        />
        <Text>Franco Stupa</Text>
      </View>
      <Divider width={10} />
      <View style={changeEsporte.botao}>
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

const changeEsporte = StyleSheet.create({
  botao: {
    display: "flex",
    gap: 5,
  },
});
