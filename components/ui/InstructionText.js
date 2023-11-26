import { Text, StyleSheet } from "react-native";

function InstructionText({ children }) {
  return <Text style={styles.instructionText}>{children}</Text>;
}
export default InstructionText;

styles = StyleSheet.create({});
