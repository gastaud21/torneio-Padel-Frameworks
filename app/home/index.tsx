// import { Avatar } from "@rneui/base";
import { StyleSheet, Text, View, Alert, TextInput } from "react-native";
// import { Button } from "../app-example/components/button";
import Avatar from "@/app/components/Avatar";
import TabelaRankGatorade from "../components/TabelaRankGatorade";

export default function Home() {
  function handleMessage() {
    const name = "Rodrigo";
    console.log("testando");
    Alert.alert(`olá ${name}`);
  }

  return (
    <View style={styles.page}>
      <Text style={styles.title}>Ranking Anual</Text>
      <View style={meuRank.container}>
        <View style={meuRank.infoContainer}>
          <View style={meuRank.divNameRank}>
            <Text style={meuRank.position}>27</Text>
            <View style={meuRank.nameDiv}>
              <Text style={meuRank.namePlayer}>Franco</Text>
              <Text style={meuRank.namePlayer}>Stupa</Text>
            </View>
          </View>
          <View style={meuRank.infoDiv}>
            <Text style={meuRank.infoText}>Pelotas</Text>
            <Text style={meuRank.infoText}>Pontos 254</Text>
          </View>
        </View>
        <View>
          <Avatar
            rounded
            size={100}
            source={{
              uri: "https://www.padelfip.com/wp-content/uploads/2023/02/Stupaczuk-2.png",
            }}
          />
        </View>
      </View>
      <TabelaRankGatorade />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    display: "flex",
    height: "100%",
    backgroundColor: "#2A74CD",
    marginTop: 10,
  },
  title: {
    color: "white",
    fontSize: 32,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

const meuRank = StyleSheet.create({
  infoContainer: {
    display: "flex",
    gap: 20,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 40,
  },
  divNameRank: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    borderWidth: 2,
    borderColor: "black",
  },
  position: {
    fontSize: 48,
    color: "white",
  },
  nameDiv: {
    display: "flex",
    borderWidth: 2,
    borderColor: "white",
  },
  namePlayer: {
    fontSize: 24,
    color: "white",
  },
  infoDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: 1,
    borderColor: "white",
  },
  infoText: {
    color: "white",
  },
});
