import React, { createContext, useContext, useMemo, useState } from "react";

const OrdersContext = createContext(null);

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([]);

  const addOrder = (orderData) => {
    const newOrder = {
      id: Date.now().toString(),
      createdAt: new Date().toLocaleString(),
      ...orderData,
    };

    setOrders((prevOrders) => [newOrder, ...prevOrders]);
  };

  const clearOrders = () => {
    setOrders([]);
  };

  const value = useMemo(
    () => ({
      orders,
      addOrder,
      clearOrders,
    }),
    [orders]
  );

  return <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>;
}

export function useOrders() {
  const context = useContext(OrdersContext);
  if (!context) {
    throw new Error("useOrders must be used inside OrdersProvider");
  }
  return context;
}
