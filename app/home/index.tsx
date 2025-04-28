import { StyleSheet, Text, View, Alert, TextInput } from "react-native";
// import { Button } from "../app-example/components/button";

export default function Home() {
  function handleMessage() {
    const name = "Rodrigo";
    console.log("testando");
    Alert.alert(`olá ${name}`);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2A74CD",
      }}
    >
      <Text style={styles.title}>Match Padel</Text>
      <Text>Email</Text>
      <TextInput style={styles.input} placeholder="E-mail" />
      <Text>Senha</Text>
      <TextInput style={styles.input} placeholder="Senha" />
      {/* <Button title="Enviar" onPress={handleMessage} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
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
