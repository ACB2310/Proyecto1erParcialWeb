import React from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/background_general.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>PIZZERÍA APP</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Orders")}
        >
          <Text style={styles.buttonText}>Empleado</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Costumers")}
        >
          <Text style={styles.buttonText}>Cliente</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Us")}
        >
          <Text style={styles.buttonText}>Nosotros</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.exitButton}
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: "Login" }],
            })
          }
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
  container: {
    marginHorizontal: 24,
    padding: 24,
    borderRadius: 16,
    backgroundColor: "rgba(0,0,0,0.65)",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#2a9d8f",
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
    width: 220,
  },
  exitButton: {
    backgroundColor: "#e63946",
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
    width: 220,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
