import QuadraPadel from "@/app/components/quadraPadel";
import { useSettingsStore } from "@/app/store/useSettingsStore";
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

  return (
    <View style={pagina.main}>
      <View style={quadra.container}>
        <QuadraPadel esporte={esporte} />
        <View style={placar.divPlacar}>
          <View style={placar.dupla}>
            <View style={placar.divBotoes}>
              <Button title="-" />
              <Button title="+" />
            </View>
            <View style={placar.containerGames}>
              <Text style={[placar.fontPlacar]}>15</Text>
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
              <Text style={[placar.fontPlacar]}>30</Text>
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
              <Button title="-" />
              <Button title="+" />
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
