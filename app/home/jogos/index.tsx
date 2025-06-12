import { View, Text, TouchableOpacityProps } from "react-native";
import Jogos from "@/app/components/Jogos";
import { Button } from "@/app-example/components/button";
import { StyleSheet } from "react-native";

const torneio1 = {
  data: "10/06/2022",
  jogadores: "",
};

const ChaveA = [
  { direita: "Lebron", esquerda: "Tapia" },
  { direita: "Chingotto", esquerda: "Franco" },
  { direita: "Leandro", esquerda: "Gastaud" },
  { direita: "Braga", esquerda: "Rota" },
  { direita: "Tuan", esquerda: "Denis" },
];

const ChaveB = [
  { direita: "Lebron", esquerda: "Tapia" },
  { direita: "Chingotto", esquerda: "Franco" },
  { direita: "Leandro", esquerda: "Gastaud" },
  { direita: "Braga", esquerda: "Rota" },
];

const ChaveC = [
  { direita: "Lebron", esquerda: "Tapia" },
  { direita: "Chingotto", esquerda: "Franco" },
  { direita: "Leandro", esquerda: "Gastaud" },
  { direita: "Braga", esquerda: "Rota" },
];

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
      <View style={styles.divNovoTorneio}>
        <Text>Componente para selecionar a data</Text>
        <Button title="Novo Torneio" />
      </View>
      <View style={styles.divEdicaoGatorade}>
        <Text>Jogo: 10/06/2025</Text>
        <Button title="Editar" />
      </View>
      <Jogos chave="A" />
      <Jogos chave="B" />
      <Jogos chave="C" />
    </View>
  );
}

const styles = StyleSheet.create({
  divNovoTorneio: {
    display: "flex",
    flexDirection: "row",
  },
  divEdicaoGatorade: {
    display: "flex",
    flexDirection: "row",
  },
});
