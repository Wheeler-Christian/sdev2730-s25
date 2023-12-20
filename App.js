import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.h1}>Select a Quantity</Text>
      <Text style={styles.h2}>Number: 2</Text>
      <View style={styles.buttonsContainer}>
        <Button title="Add 1" color="green" />
        <Button title="Remove 1" color="red" />
        <Button title="Reset" color="gray" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    // justifyContent: "center",
    padding: 16,
  },
  h1: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    marginTop: 48,
  },
  h2: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginTop: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
});
