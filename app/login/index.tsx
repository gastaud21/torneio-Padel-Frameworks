import { StyleSheet, Text, View, Alert, TextInput } from "react-native";
// import { Button } from "@/app-example/components/button";
import { Component, ReactNode } from "react";
import { Button } from "react-native";

export default function Login() {
  function handleMessage() {
    const name = "Rodrigo";
    console.log("testando");
    Alert.alert(`olá ${name}`);
  }

  function handleLogin() {
    const name = "Rodrigo";
    // Exemplo de autenticação MOCKADA
    const mockEmail = "teste@email.com";
    const mockPassword = "123456";

    // Aqui você iria validar os dados e navegar para "Home"
    // navigation.navigate('Home') // <-- vamos configurar isso já já
    Alert.alert(`Bem-vindo, ${name}`);
  }

  function handleSignUp() {
    console.log("testando cadastro");
    Alert.alert("Vamos te inscrever!");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Match Padel</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder="E-mail" />

      <Text style={styles.label}>Senha</Text>
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry />

      <View style={styles.buttonContainer}>
        <Button title="Entrar" onPress={handleLogin} />
        <Button title="Inscrever-se" onPress={handleSignUp} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2A74CD",
    paddingHorizontal: 20,
  },
  title: {
    color: "white",
    fontSize: 32,
    marginBottom: 30,
  },
  label: {
    color: "white",
    alignSelf: "flex-start",
    marginLeft: 20,
    marginBottom: 5,
  },
  input: {
    height: 40,
    width: "100%",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },
});
