import { StyleSheet, Text, View, Alert, TextInput } from "react-native";
import { Button } from "../app-example/components/button";

export default function Index() {
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
      }}
    >
      <Text style={styles.title}>Match Padel</Text>
      <p>Email</p>
      <TextInput style={styles.input} placeholder="E-mail" />
      <p>Senha</p>
      <TextInput style={styles.input} placeholder="Senha" />
      {/* <Button title="Enviar" onPress={handleMessage} /> */}
      <Button title="Entrar" onPress={handleMessage} />
      <Button title="Inscrever-se" onPress={handleMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "blue",
    fontSize: 32,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
