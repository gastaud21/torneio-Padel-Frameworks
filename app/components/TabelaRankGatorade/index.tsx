import { ScrollView, View, Text, StyleSheet } from "react-native";

export default function TabelaRankGatorade() {
  return (
    <ScrollView>
      <View style={tableStructure.container}>
        <View style={[columnTable.container, columnTable.rank]}>
          <Text style={headerTable.rank}>N°</Text>
        </View>
        <View style={[columnTable.container, columnTable.pontos]}>
          <Text style={headerTable.pontos}>Pontos</Text>
        </View>
        <View style={[columnTable.container, columnTable.player]}>
          <Text style={headerTable.player}>Nome</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const columnTable = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "white",
  },
  rank: {
    width: 40,
  },
  pontos: {
    width: 60,
  },
  player: {
    width: 220,
  },
});

const headerTable = StyleSheet.create({
  rank: {
    color: "white",
    fontSize: 18,
  },
  pontos: {
    color: "white",
    fontSize: 18,
  },
  player: {
    color: "white",
    fontSize: 18,
  },
});

const tableStructure = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginTop: 40,
  },
});
