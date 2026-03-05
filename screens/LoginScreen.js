import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert,} from "react-native";

const USERS = [
  { username: "admin", password: "1234" },
  { username: "juan", password: "abcd" },
  { username: "maria", password: "5678" },
];

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const userFound = USERS.find(
      (user) =>
        user.username === username && user.password === password
    );

    if (userFound) {
      navigation.replace("Home"); // IMPORTANTE: replace para que no regrese
    } else {
      Alert.alert("Error", "Usuario o contraseña incorrectos");
    }
  };

  return (
    <ImageBackground
      source={require("../assets/login-bg.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Pizzería App 🍕</Text>

        <TextInput
          placeholder="Usuario"
          placeholderTextColor="#ccc"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
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
    marginBottom: 20,
    fontWeight: "bold",
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