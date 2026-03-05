import React, { useState } from "react";
import {
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useOrders } from "../context/OrdersContext";

export default function OrderScreen({ navigation }) {
  const { addOrder } = useOrders();
  const [customer, setCustomer] = useState("");
  const [pizza, setPizza] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleAddOrder = () => {
    if (!customer.trim() || !pizza.trim() || !quantity.trim()) {
      Alert.alert("Missing data", "Please complete all fields.");
      return;
    }

    const parsedQty = Number(quantity);
    if (!Number.isFinite(parsedQty) || parsedQty <= 0) {
      Alert.alert("Invalid quantity", "Quantity must be a number greater than 0.");
      return;
    }

    addOrder({
      customer: customer.trim(),
      pizza: pizza.trim(),
      quantity: parsedQty,
    });

    setCustomer("");
    setPizza("");
    setQuantity("");
    Alert.alert("Order saved", "The order was added successfully.");
  };

  return (
    <ImageBackground
      source={require("../assets/icon.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Create Order</Text>

        <TextInput
          style={styles.input}
          placeholder="Customer name"
          placeholderTextColor="#ddd"
          value={customer}
          onChangeText={setCustomer}
        />
        <TextInput
          style={styles.input}
          placeholder="Pizza type"
          placeholderTextColor="#ddd"
          value={pizza}
          onChangeText={setPizza}
        />
        <TextInput
          style={styles.input}
          placeholder="Quantity"
          placeholderTextColor="#ddd"
          keyboardType="numeric"
          value={quantity}
          onChangeText={setQuantity}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddOrder}>
          <Text style={styles.buttonText}>Add Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate("Orders")}>
          <Text style={styles.buttonText}>Go to Orders</Text>
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
    marginHorizontal: 20,
    backgroundColor: "rgba(0,0,0,0.65)",
    borderRadius: 16,
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#2a9d8f",
    padding: 13,
    borderRadius: 10,
    marginTop: 4,
    marginBottom: 10,
  },
  secondaryButton: {
    backgroundColor: "#457b9d",
    padding: 13,
    borderRadius: 10,
    marginBottom: 10,
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
