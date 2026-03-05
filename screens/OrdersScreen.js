import React from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useOrders } from "../context/OrdersContext";

export default function OrdersScreen({ navigation }) {
  const { orders } = useOrders();

  return (
    <ImageBackground
      source={require("../assets/icon.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Orders</Text>
        <Text style={styles.subtitle}>Registered orders: {orders.length}</Text>

        <ScrollView style={styles.list} contentContainerStyle={styles.listContent}>
          {orders.length === 0 ? (
            <Text style={styles.empty}>No orders yet. Go to Order and add one.</Text>
          ) : (
            orders.map((order, index) => (
              <View key={order.id} style={styles.card}>
                <Text style={styles.cardText}>#{index + 1}</Text>
                <Text style={styles.cardText}>Customer: {order.customer}</Text>
                <Text style={styles.cardText}>Pizza: {order.pizza}</Text>
                <Text style={styles.cardText}>Quantity: {order.quantity}</Text>
                <Text style={styles.timeText}>{order.createdAt}</Text>
              </View>
            ))
          )}
        </ScrollView>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Order")}>
          <Text style={styles.buttonText}>Create New Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate("Menu")}>
          <Text style={styles.buttonText}>Back to Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.exitButton}
          onPress={() => navigation.reset({ index: 0, routes: [{ name: "Login" }] })}
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
  },
  subtitle: {
    color: "#fff",
    textAlign: "center",
    marginTop: 4,
    marginBottom: 12,
  },
  list: {
    flex: 1,
    marginBottom: 12,
  },
  listContent: {
    paddingBottom: 8,
  },
  empty: {
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.14)",
    borderRadius: 10,
    padding: 12,
    marginBottom: 8,
  },
  cardText: {
    color: "#fff",
    marginBottom: 2,
  },
  timeText: {
    color: "#e0e0e0",
    fontSize: 12,
    marginTop: 6,
  },
  button: {
    backgroundColor: "#2a9d8f",
    padding: 13,
    borderRadius: 10,
    marginBottom: 8,
  },
  secondaryButton: {
    backgroundColor: "#457b9d",
    padding: 13,
    borderRadius: 10,
    marginBottom: 8,
  },
  exitButton: {
    backgroundColor: "#e63946",
    padding: 13,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
