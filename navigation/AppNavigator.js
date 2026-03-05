import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import MenuScreen from "../screens/MenuScreen";
import CostumersScreen from "../screens/CostumersScreen";
import OrderScreen from "../screens/OrderScreen";
import OrdersScreen from "../screens/OrdersScreen";
import UsScreen from "../screens/usScreen";
import MenuPizzasScreen from "../screens/MenuPizzasScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Costumers" component={CostumersScreen} />
        <Stack.Screen name="Order" component={OrderScreen} />
        <Stack.Screen name="Orders" component={OrdersScreen} />
        <Stack.Screen name="Us" component={UsScreen} />
        <Stack.Screen name="MenuPizzas" component={MenuPizzasScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
