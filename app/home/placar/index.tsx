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
import { getQuadras } from "@/app/services/quadrasService";
import { Quadra } from "@/app/types/Quadra";

export default function Placar() {
  const { esporte } = useSettingsStore();

  const [quadras, setQuadras] = useState<Quadra[]>([]);
  const [loading, setLoading] = useState(true);

  const [dupla1_pontoAtual, setDupla1_pontoAtual] = useState<number>(0);
  const [dupla2_pontoAtual, setDupla2_pontoAtual] = useState<number>(0);

  const [dupla1_set1, setDupla1_set1] = useState<number>(0);
  const [dupla2_set1, setDupla2_set1] = useState<number>(0);

  const [dupla1_set2, setDupla1_set2] = useState<number>(0);
  const [dupla2_set2, setDupla2_set2] = useState<number>(0);

  const [maxSet, setMaxSet] = useState<number>(2);

  const pontosPossiveis = [0, 15, 30, 40];

  async function fetchQuadras() {
    try {
      const data = await getQuadras();
      console.log(data);

      setQuadras(data);
    } catch (error) {
      console.log("Erro ao carregar quadras: ", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchQuadras();
  }, []);

  function aumentaSet2(dupla: string, maxSet: number) {
    if (dupla == "dupla1" && dupla1_set2 < maxSet) {
      const set = dupla1_set2;
      setDupla1_set2(set + 1);
    }
    if (dupla == "dupla2" && dupla2_set2 < maxSet) {
      const set = dupla2_set2;
      setDupla2_set2(set + 1);
    }
  }

  function aumentaSet1(dupla: string, maxSet: number) {
    if (dupla == "dupla1" && dupla1_set1 < maxSet) {
      const set = dupla1_set1;
      setDupla1_set1(set + 1);
    }
    if (dupla == "dupla2" && dupla2_set1 < maxSet) {
      const set = dupla2_set1;
      setDupla2_set1(set + 1);
    }
  }

  function aumentaPonto(dupla: string, maxSet: number) {
    if (dupla == "dupla1" && dupla1_set2 < maxSet) {
      const indexAtual = pontosPossiveis.indexOf(dupla1_pontoAtual);
      const proximoIndex = (indexAtual + 1) % pontosPossiveis.length;

      dupla2_pontoAtual == 40 && dupla1_set2 == maxSet - 1
        ? ""
        : setDupla1_pontoAtual(pontosPossiveis[proximoIndex]);

      if (pontosPossiveis[indexAtual] == 40 && dupla1_set2 < maxSet) {
        aumentaSet1(dupla, maxSet);
      }

      if (pontosPossiveis[indexAtual] == 40 && dupla1_set1 == maxSet) {
        aumentaSet2(dupla, maxSet);
      }
    }
    if (dupla == "dupla2" && dupla2_set2 < maxSet) {
      const indexAtual = pontosPossiveis.indexOf(dupla2_pontoAtual);
      const proximoIndex = (indexAtual + 1) % pontosPossiveis.length;

      dupla2_pontoAtual == 40 && dupla2_set2 == maxSet - 1
        ? ""
        : setDupla2_pontoAtual(pontosPossiveis[proximoIndex]);

      if (pontosPossiveis[indexAtual] == 40 && dupla2_set2 < maxSet) {
        aumentaSet1(dupla, maxSet);
      }

      if (pontosPossiveis[indexAtual] == 40 && dupla2_set1 == maxSet) {
        aumentaSet2(dupla, maxSet);
      }

      console.log(pontosPossiveis[proximoIndex]);
    }
  }

  function diminuiPonto(dupla: string) {
    if (dupla == "dupla1") {
      const indexAtual = pontosPossiveis.indexOf(dupla1_pontoAtual);

      if (indexAtual > 0) {
        const proximoIndex = Math.max(indexAtual - 1, 0);
        const novoPonto = pontosPossiveis[proximoIndex];
        setDupla1_pontoAtual(novoPonto);
      } else {
        setDupla1_pontoAtual(40);
        diminuiSet1(dupla);
        diminuiSet2(dupla);
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
        // if(){

        // }
        diminuiSet1(dupla);
        diminuiSet2(dupla);
      }
    }
  }

  function diminuiSet1(dupla: string) {
    if (dupla == "dupla1" && dupla1_set1 != 0) {
      const set = dupla1_set1 - 1;
      setDupla1_set1(set);
    }

    if (dupla == "dupla2" && dupla2_set1 != 0) {
      const set = dupla2_set1 - 1;
      setDupla2_set1(set);
    }
  }

  function diminuiSet2(dupla: string) {
    if (dupla == "dupla1" && dupla1_set2 != 0) {
      const set = dupla1_set2 - 1;
      setDupla1_set2(set);
    }
    if (dupla == "dupla2" && dupla2_set2 != 0) {
      const set = dupla2_set2 - 1;
      setDupla2_set2(set);
    }
  }

  return (
    <View style={pagina.main}>
      <View style={quadra.container}>
        {quadras.length > 0 && (
          <QuadraPadel
            esporte={esporte}
            patrocinadorLogo={quadras[0].logo_QuadraPatrocinador}
          />
        )}
        <View style={placar.divPlacar}>
          <View style={placar.dupla}>
            <View style={placar.divBotoes}>
              <Button title="-" onPress={() => diminuiPonto("dupla1")} />
              <Button
                title="+"
                onPress={() => aumentaPonto("dupla1", maxSet)}
              />
            </View>
            <View style={placar.containerGames}>
              <Text style={[placar.fontPlacar]}>{dupla1_pontoAtual}</Text>
              <View style={placar.divGames}>
                <View style={placar.divTextGames}>
                  <Text style={placar.textGame}>{dupla1_set1}</Text>
                </View>
                <View style={placar.divTextGames}>
                  <Text style={placar.textGame}>{dupla1_set2}</Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View style={placar.containerGames}>
              <Text style={[placar.fontPlacar]}>{dupla2_pontoAtual}</Text>
              <View style={placar.divGames}>
                <View style={placar.divTextGames}>
                  <Text style={placar.textGame}>{dupla2_set1}</Text>
                </View>
                <View style={placar.divTextGames}>
                  <Text style={placar.textGame}>{dupla2_set2}</Text>
                </View>
              </View>
            </View>
            <View style={placar.divBotoes}>
              <Button title="-" onPress={() => diminuiPonto("dupla2")} />
              <Button
                title="+"
                onPress={() => aumentaPonto("dupla2", maxSet)}
              />
            </View>
          </View>
        </View>
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
