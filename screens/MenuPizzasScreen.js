    import React from "react";
    import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

    export default function MenuPizzasScreen({ navigation }) {
    return (
        <ImageBackground
        source={require("../assets/background_general.png")}
        style={styles.background}
        resizeMode="cover"
        >
        <View style={styles.container}>

            <Text style={styles.title}>MENÚ DE PIZZAS</Text>

            <Text style={styles.section}>Tamaños</Text>

            <Text style={styles.item}>Individual - $90</Text>
            <Text style={styles.item}>Mediana - $150</Text>
            <Text style={styles.item}>Grande - $250</Text>

            <Text style={styles.section}>Especialidades</Text>

            <Text style={styles.item}>Hawaiana</Text>
            <Text style={styles.item}>Cuatro Quesos</Text>
            <Text style={styles.item}>Peperoni</Text>
            <Text style={styles.item}>Mexicana</Text>

            <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Costumers")}
            >
            <Text style={styles.buttonText}>Volver</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.menuButton}
            onPress={() => navigation.navigate("Menu")}
            >
            <Text style={styles.buttonText}>Volver al menú</Text>
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
    section: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 8,
    },
    item: {
        color: "#fff",
        fontSize: 16,
        marginBottom: 4,
    },
    button: {
        backgroundColor: "#2a9d8f",
        padding: 14,
        borderRadius: 10,
        marginTop: 20,
        width: 220,
    },
    menuButton: {
        backgroundColor: "#264653",
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
