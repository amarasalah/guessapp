import { useState } from "react";

import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState();
  function inputTextHandler(enteredText) {
    setEnteredNumber(enteredText);
  }
  function confirmInputText() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Input!",
        "Number chosen should be between 0 and 99",
        [{ text: "okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(chosenNumber);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        maxLength={2}
        style={styles.numberInput}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={inputTextHandler}
      />
      <View style={styles.buttonsDisplayRow}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputText}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}
export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    // flex: 1,
    backgroundColor: "#72063c",
    borderRadius: 8,
    marginHorizontal: 24,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    marginVertical: 8,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsDisplayRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
  },
});
