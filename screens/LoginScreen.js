import React, { useState } from "react";
import { Alert, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View,} from "react-native";

const USERS = [
  { username: "admin", password: "1234" },
  { username: "Alan", password: "abcd" },
  { username: "Rodrigo", password: "5678" },
];

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const userFound = USERS.find(
      (user) =>
        user.username === username.trim() &&
        user.password === password
    );

    if (!userFound) {
      Alert.alert("Error", "Usuario o contraseña incorrectos");
      return;
    }

    navigation.replace("Menu");
  };

  return (
    <ImageBackground
      source={require("../assets/background_login.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Pizzeria App</Text>

        <Image
          source={require("../assets/ars_pizzas_logo.png")}
          style={styles.logo}
          resizeMode="contain"
          marginBottom="15"
        />

        <TextInput
          placeholder="Usuario"
          placeholderTextColor="#ccc"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Contraseña"
          placeholderTextColor="#ccc"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    marginHorizontal: 30,
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.6)",
    borderRadius: 15,
  },
  title: {
    fontSize: 28,
    color: "white",
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold",
  },
  logo: {
    width: 130,
    height: 130,
    alignSelf: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "white",
    padding: 12,
    marginBottom: 15,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#e63946",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});