import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/home-bg.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenido 🍕</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: "Login" }],
            })
          }
        >
          <Text style={styles.buttonText}>EXIT</Text>
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
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: "white",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#e63946",
    padding: 15,
    borderRadius: 10,
    width: 200,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});