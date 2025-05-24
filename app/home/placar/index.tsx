import QuadraPadel from "@/app/components/quadraPadel";
import { useSettingsStore } from "@/app/store/useSettingsStore";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  ImageBackground,
  Button,
} from "react-native";
// import { Button } from "@rneui/base";

export default function Placar() {
  const { esporte } = useSettingsStore();

  const [dupla1_pontoAtual, setDupla1_pontoAtual] = useState<number>(0);
  const [dupla2_pontoAtual, setDupla2_pontoAtual] = useState<number>(0);

  const pontosPossiveis = [0, 15, 30, 40];

  // function aumentaPonto() {
  //   const pontoAtual2 = pontosPossiveis.indexOf(pontoAtual);
  //   console.log("pontoAtual index: ", pontoAtual);
  //   console.log(pontoAtual2);
  //   pontosPossiveis[pontoAtual2] == 1
  //     ? setPontoAtual(0)
  //     : setPontoAtual(pontosPossiveis[pontoAtual2 + 1]);
  // }

  function aumentaPonto(dupla: string) {
    if (dupla == "dupla1") {
      const indexAtual = pontosPossiveis.indexOf(dupla1_pontoAtual);
      const proximoIndex = (indexAtual + 1) % pontosPossiveis.length;
      setDupla1_pontoAtual(pontosPossiveis[proximoIndex]);
    }
    if (dupla == "dupla2") {
      const indexAtual = pontosPossiveis.indexOf(dupla2_pontoAtual);
      const proximoIndex = (indexAtual + 1) % pontosPossiveis.length;
      setDupla2_pontoAtual(pontosPossiveis[proximoIndex]);
    }
  }

  function diminuiPonto(dupla: string) {
    if (dupla == "dupla1") {
      const indexAtual = pontosPossiveis.indexOf(dupla1_pontoAtual);
      console.log(indexAtual);

      if (indexAtual > 0) {
        const proximoIndex = Math.max(indexAtual - 1, 0);
        const novoPonto = pontosPossiveis[proximoIndex];
        setDupla1_pontoAtual(novoPonto);
      } else {
        setDupla1_pontoAtual(40);
      }
    }

    if (dupla == "dupla2") {
      const indexAtual = pontosPossiveis.indexOf(dupla2_pontoAtual);
      console.log(indexAtual);

      if (indexAtual > 0) {
        const proximoIndex = Math.max(indexAtual - 1, 0);
        const novoPonto = pontosPossiveis[proximoIndex];
        setDupla2_pontoAtual(novoPonto);
      } else {
        setDupla2_pontoAtual(40);
      }
    }
  }

  // function aumentaPonto() {
  //   const indexAtual = pontosPossiveis.indexOf(pontoAtual);
  //   const proximoIndex = Math.min(indexAtual + 1, pontosPossiveis.length - 1);
  //   const novoPonto = pontosPossiveis[proximoIndex];
  //   setPontoAtual(novoPonto);
  // }

  return (
    <View style={pagina.main}>
      <View style={quadra.container}>
        <QuadraPadel esporte={esporte} />
        <View style={placar.divPlacar}>
          <View style={placar.dupla}>
            <View style={placar.divBotoes}>
              <Button title="-" onPress={() => diminuiPonto("dupla1")} />
              <Button title="+" onPress={() => aumentaPonto("dupla1")} />
            </View>
            <View style={placar.containerGames}>
              <Text style={[placar.fontPlacar]}>{dupla1_pontoAtual}</Text>
              <View style={placar.divGames}>
                <View style={placar.divTextGames}>
                  <Text style={placar.textGame}>3</Text>
                </View>
                <View style={placar.divTextGames}>
                  <Text style={placar.textGame}>2</Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View style={placar.containerGames}>
              <Text style={[placar.fontPlacar]}>{dupla2_pontoAtual}</Text>
              <View style={placar.divGames}>
                <View style={placar.divTextGames}>
                  <Text style={placar.textGame}>6</Text>
                </View>
                <View style={placar.divTextGames}>
                  <Text style={placar.textGame}>5</Text>
                </View>
              </View>
            </View>
            <View style={placar.divBotoes}>
              <Button title="-" onPress={() => diminuiPonto("dupla2")} />
              <Button title="+" onPress={() => aumentaPonto("dupla2")} />
            </View>
          </View>
        </View>
      </View>
      <View>
        <Text>Outdoor patrocinador</Text>
      </View>
    </View>
  );
}

const pagina = StyleSheet.create({
  main: {
    backgroundColor: "#2c2c2c",
  },
});

const quadra = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 32,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    paddingHorizontal: 10,
  },
});

const placar = StyleSheet.create({
  dupla: {},
  divPlacar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "50%",
  },
  containerGames: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  fontPlacar: {
    textAlign: "center",
    fontFamily: "PostNoBillsColomboExtraBold",
    fontWeight: "normal",
    fontSize: 38,
    color: "white",
  },
  divGames: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 10,
  },
  divTextGames: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#F49F1C",
    borderRadius: "50%",
    width: 25,
    height: 25,
  },
  textGame: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  divBotoes: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
