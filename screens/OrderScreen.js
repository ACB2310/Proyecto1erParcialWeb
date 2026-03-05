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

const PIZZA_TYPES = ["HAWAIANA", "PEPPERONI", "CUATRO QUESOS", "MEXICANA"];
const PIZZA_SIZES = ["Individual", "Mediana", "Grande"];

export default function OrderScreen({ navigation }) {
  const { addOrder } = useOrders();

  const [selectedType, setSelectedType] = useState(PIZZA_TYPES[0]);
  const [typeExpanded, setTypeExpanded] = useState(false);

  const [selectedSize, setSelectedSize] = useState(PIZZA_SIZES[0]);
  const [sizeExpanded, setSizeExpanded] = useState(false);

  const [quantity, setQuantity] = useState("");

  const handleAddOrder = () => {
    if (!quantity.trim()) {
      Alert.alert("Faltan datos", "Ingresa la cantidad de pizzas.");
      return;
    }

    const parsedQty = Number(quantity);
    if (!Number.isFinite(parsedQty) || parsedQty <= 0) {
      Alert.alert("Cantidad invalida", "La cantidad debe ser un numero mayor a 0.");
      return;
    }

    addOrder({
      customer: "Cliente mostrador",
      pizza: `${selectedType} - ${selectedSize}`,
      quantity: parsedQty,
      type: selectedType,
      size: selectedSize,
    });

    setQuantity("");
    Alert.alert("Orden guardada", "La orden de pizza se guardo correctamente.");
  };

  return (
    <ImageBackground
      source={require("../assets/icon.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>ORDEN</Text>

        <View style={styles.dropdownWrapper}>
          <TouchableOpacity
            style={styles.dropdownButton}
            onPress={() => {
              setTypeExpanded((prev) => !prev);
              setSizeExpanded(false);
            }}
          >
            <Text style={styles.dropdownText}>{selectedType}</Text>
          </TouchableOpacity>

          {typeExpanded && (
            <View style={styles.dropdownMenu}>
              {PIZZA_TYPES.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setSelectedType(option);
                    setTypeExpanded(false);
                  }}
                >
                  <Text style={styles.dropdownItemText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        <View style={styles.dropdownWrapper}>
          <TouchableOpacity
            style={styles.dropdownButton}
            onPress={() => {
              setSizeExpanded((prev) => !prev);
              setTypeExpanded(false);
            }}
          >
            <Text style={styles.dropdownText}>{selectedSize}</Text>
          </TouchableOpacity>

          {sizeExpanded && (
            <View style={styles.dropdownMenu}>
              {PIZZA_SIZES.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setSelectedSize(option);
                    setSizeExpanded(false);
                  }}
                >
                  <Text style={styles.dropdownItemText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        <TextInput
          style={styles.input}
          placeholder="Cantidad"
          placeholderTextColor="#ddd"
          keyboardType="numeric"
          value={quantity}
          onChangeText={setQuantity}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddOrder}>
          <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate("Menu")}>
          <Text style={styles.buttonText}>Volver al menu</Text>
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
  dropdownWrapper: {
    marginBottom: 10,
  },
  dropdownButton: {
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 12,
    borderRadius: 10,
  },
  dropdownText: {
    color: "#fff",
  },
  dropdownMenu: {
    backgroundColor: "rgba(255,255,255,0.14)",
    borderRadius: 10,
    marginTop: 6,
    overflow: "hidden",
  },
  dropdownItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.12)",
  },
  dropdownItemText: {
    color: "#fff",
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
