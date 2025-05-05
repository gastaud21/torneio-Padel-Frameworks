import { Avatar } from "@rneui/base";
import { StyleSheet, Text, View, Alert, TextInput } from "react-native";
// import { Button } from "../app-example/components/button";

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
            <Text>27</Text>
            <View style={meuRank.nameDiv}>
              <Text>Franco</Text>
              <Text>Stupa</Text>
            </View>
          </View>
          <View>
            <Text>Pelotas</Text>
            <Text>Pontos 254</Text>
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
  },
  nameDiv: {
    display: "flex",
  },
});
