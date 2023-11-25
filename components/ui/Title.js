import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    padding: 24,
    borderWidth: 2,
    borderColor: Colors.accent500,
    color: Colors.accent500,
    fontWeight: "bold",
    textAlign: "center",
  },
});
