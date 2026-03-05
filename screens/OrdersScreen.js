import React from "react";
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";

import { useOrders } from "../context/OrdersContext";

export default function OrdersScreen({ navigation }) {
  const { orders } = useOrders();

  const formattedOrders = orders.map((order) => {
    const type = order.type || "CLASICA";
    const size = order.size || "Mediana";
    const amount = order.quantity ?? order.amount ?? "0";
    return `${type} - ${size} - Cantidad: ${amount}`;
  });

  return (
    <ImageBackground
      source={require("../assets/background_general.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>ORDENES</Text>

        <ScrollView
          style={styles.list}
          contentContainerStyle={styles.listContent}
        >
          {formattedOrders.length === 0 ? (
            <Text style={styles.empty}>No hay ordenes</Text>
          ) : (
            formattedOrders.map((orderText, index) => (
              <View key={`${orderText}-${index}`} style={styles.orderItem}>
                <Text style={styles.orderText}>{orderText}</Text>
              </View>
            ))
          )}
        </ScrollView>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("Menu")}
        >
          <Text style={styles.buttonText}>Volver al Menú</Text>
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
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 30,
    backgroundColor: "rgba(0,0,0,0.65)",
    borderRadius: 16,
    padding: 20,
  },
  title: {
    color: "#fff",
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 4,
    marginBottom: 16,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 12,
  },
  empty: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    marginTop: 20,
  },
  orderItem: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 8,
  },
  orderText: {
    color: "#1f2937",
    fontSize: 15,
    fontWeight: "600",
  },
  menuButton: {
    backgroundColor: "#457b9d",
    padding: 13,
    borderRadius: 10,
    marginTop: 12,
  },
  exitButton: {
    backgroundColor: "#e63946",
    padding: 13,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});