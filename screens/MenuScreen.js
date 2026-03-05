import React from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function MenuScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/icon.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>MENU PRINCIPAL</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Orders")}>
          <Text style={styles.buttonText}>Empleado</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Costumers")}>
          <Text style={styles.buttonText}>Cliente</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.buttonText}>Nosotros</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.exitButton}
          onPress={() => navigation.reset({ index: 0, routes: [{ name: "Login" }] })}
        >
          <Text style={styles.buttonText}>Salir</Text>
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
  overlay: {
    marginHorizontal: 24,
    padding: 24,
    borderRadius: 16,
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    textAlign: "center",
    fontSize: 22,
    marginTop: 8,
    marginBottom: 24,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#2a9d8f",
    padding: 14,
    borderRadius: 10,
    marginBottom: 8,
    width: 220,
  },
  exitButton: {
    backgroundColor: "#e63946",
    padding: 14,
    borderRadius: 10,
    marginTop: 24,
    width: 220,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
