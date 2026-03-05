import React, { useState } from "react";
import {Alert, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View,} from "react-native";

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
      (user) => user.username === username.trim() && user.password === password
    );

    if (!userFound) {
      Alert.alert("Error", "Usuario o contrasena incorrectos");
      return;
    }

    navigation.replace("Menu");
  };

  return (
    <ImageBackground
      source={require("../assets/splash-icon.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Pizzeria App</Text>

        <TextInput
          placeholder="Usuario"
          placeholderTextColor="#ccc"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Contrasena"
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
