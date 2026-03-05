import React from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function UsScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/icon.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>NOSOTROS</Text>

        <Text style={styles.text}>
          Esta aplicación fue desarrollada como parte del proyecto del primer
          parcial de la materia de Desarrollo de Aplicaciones Móviles. El
          objetivo de la aplicación es gestionar órdenes de una pizzería,
          permitiendo registrar pedidos y visualizar las órdenes realizadas.
        </Text>

        <Text style={styles.section}>Equipo de Desarrollo</Text>

        {/* Rodrigo */}
        <Text style={styles.member}>
          Rodrigo De Jesús Hernández Aguilar
        </Text>
        <Text style={styles.career}>Ingeniería Informática</Text>
        <Text style={styles.contact}>Email: rodrigo@pizzeria.com</Text>
        <Text style={styles.contact}>Tel: 123456789</Text>

        {/* Alan */}
        <Text style={styles.member}>
          Alan Castillo Barajas
        </Text>
        <Text style={styles.career}>Ingeniería Informática</Text>
        <Text style={styles.contact}>Email: alan@pizzeria.com</Text>
        <Text style={styles.contact}>Tel: 987654321</Text>

        {/* Administrador */}
        <Text style={styles.section}>Administrador del Sistema</Text>

        <Text style={styles.member}>
          Administrador de Pizzería App
        </Text>
        <Text style={styles.contact}>Email: admin@pizzeria.com</Text>
        <Text style={styles.contact}>Tel: 555123456</Text>

        <Text style={styles.section}>Institución</Text>

        <Text style={styles.text}>
          Tecnológico Superior de Purísima del Rincón
        </Text>

        <Text style={styles.text}>
          Generación 2022
        </Text>

        <Text style={styles.text}>
          Docente: Mtro. Jair Emmanuel Ramírez Flores
        </Text>

        <TouchableOpacity
          style={styles.button}
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
    backgroundColor: "rgba(0,0,0,0.65)",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 16,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    marginBottom: 6,
  },
  section: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 6,
  },
  member: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  career: {
    color: "#ddd",
  },
  contact: {
    color: "#bbb",
    fontSize: 13,
  },
  button: {
    backgroundColor: "#2a9d8f",
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
    width: 220,
  },
  exitButton: {
    backgroundColor: "#e63946",
    padding: 14,
    borderRadius: 10,
    marginTop: 10,
    width: 220,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
