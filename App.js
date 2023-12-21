import { StatusBar } from "expo-status-bar";
import { useReducer } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import ShoppingCart from "./components/ShoppingCart";

function reducer(state, action) {}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { quantity: 1 });

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ShoppingCart />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    alignContent: "center",
  },
});
