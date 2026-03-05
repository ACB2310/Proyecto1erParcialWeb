import React from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CostumersScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/icon.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>CLIENTE</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("MenuPizzas")}
        >
          <Text style={styles.buttonText}>MENU PIZZAS</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Order")}
        >
          <Text style={styles.buttonText}>ORDEN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("Menu")}
        >
          <Text style={styles.buttonText}>Volver al menú</Text>
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
  menuButton: {
    backgroundColor: "#264653",
    padding: 14,
    borderRadius: 10,
    marginTop: 8,
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
