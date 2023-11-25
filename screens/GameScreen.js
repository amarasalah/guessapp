import { Text, StyleSheet, View } from "react-native";
function GameScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>This is Title</Text>
      <View>
        <Text> Higher or lower</Text>
      </View>
    </View>
  );
}
export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    padding: 24,
    borderWidth: 2,
    borderColor: "#ddb52f",
    color: "#ddb52f",
    fontWeight: "bold",
    textAlign: "center",
  },
});
