import { View, Text, StyleSheet, Button } from "react-native";
import AlterarEsporte from "@/app/components/Buttons/Configuracoes/alterarEsporte";
// import { Avatar, Divider } from "@rneui/base";
import { useSettingsStore } from "@/app/store/useSettingsStore";

export default function PerfilScreen() {
  const esporte = useSettingsStore((state) => state.esporte);
  const setEsporte = useSettingsStore((state) => state.setEsporte);

  const handleChangeEsporte = () => {
    // Alterna entre dois esportes como exemplo
    const novoEsporte = esporte === "Padel" ? "Beach Tennis" : "Padel";
    setEsporte(novoEsporte);
    console.log(novoEsporte);
  };

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
        {/* <Avatar
          rounded
          size={100}
          source={{
            uri: "https://www.padelfip.com/wp-content/uploads/2023/02/Stupaczuk-2.png",
          }}
        /> */}
        <Text>Franco Stupa</Text>
      </View>
      {/* <Divider width={10} /> */}
      <View style={changeEsporte.botao}>
        <Text>Selecione o esporte</Text>
        <AlterarEsporte
          esporte="Padel"
          imagem={require("../../../assets/images/botao-padel.svg")}
        />
        <AlterarEsporte
          esporte="Beach"
          imagem={require("../../../assets/images/botao-beach.svg")}
        />
        <Button title="Mudar Esporte" onPress={handleChangeEsporte} />
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
