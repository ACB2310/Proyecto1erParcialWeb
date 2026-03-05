import React from "react";
import { StyleSheet, View } from "react-native";

import AppNavigator from "./navigation/AppNavigator";
import { OrdersProvider } from "./context/OrdersContext";

export default function App() {
  return (
    <View style={styles.container}>
      <OrdersProvider>
        <AppNavigator />
      </OrdersProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
