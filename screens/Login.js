import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FIREBASE_AUTH } from "../firebaseConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [loading, SetLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  return (
    <View>
      <Text>login</Text>
    </View>
  );
};

export default Login;
styles = StyleSheet.create({
  container: {
    marginHorizonatal: 20,
    flex: 1,
    justifyContent: "center",
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
});
