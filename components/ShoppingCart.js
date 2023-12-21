import { StatusBar } from "expo-status-bar";
import { useReducer } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT_QTY":
      return { quantity: state.quantity + 1 };
    case "DECREMENT_QTY":
      return { quantity: state.quantity - 1 };
    case "RESET":
      return { quantity: 0 };
    default:
      return state;
  }
}

function ShoppingCart() {
  const [state, dispatch] = useReducer(reducer, { quantity: 0 });

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Select a Quantity</Text>
      <Text style={styles.h2}>{`Number: ${state.quantity}`}</Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <Button
            title="Add 1"
            color="darkgreen"
            onPress={() => dispatch({ type: "INCREMENT_QTY" })}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Remove 1"
            color="darkred"
            onPress={() => dispatch({ type: "DECREMENT_QTY" })}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Reset"
            color="#444"
            onPress={() => dispatch({ type: "RESET" })}
          />
        </View>
      </View>
    </View>
  );
}

export default ShoppingCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  h1: {
    fontSize: 28,
    color: "white",
    fontWeight: "bold",
    marginTop: 48,
    textAlign: "center",
  },
  h2: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    marginVertical: 24,
    textAlign: "center",
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonContainer: {
    minWidth: "25%",
    marginHorizontal: 8,
  },
});
