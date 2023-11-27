import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, SetGameIsOver] = useState(true);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    SetGameIsOver(false);
  }
  function GameOverHandler() {
    SetGameIsOver(true);
    console.log("game Is Over!");
  }

  console.log("userNumber: ", userNumber);

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameIsOver={GameOverHandler} />
    );
  }
  console.log(gameIsOver);
  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <LinearGradient
    //   colors={[Colors.primary700, Colors.accent500]}
    //   style={styles.rootScreen}
    // >
    //   {/* <ImageBackground
    //     source={require("./assets/images/riho-kroll-m4sGYaHYN5o-unsplash.jpg")}
    //     style={styles.rootScreen}
    //     imageStyle={styles.backgroundImage}
    //     resizeMode="cover"
    //   >

    //     <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
    //   </ImageBackground>
    // </LinearGradient> */}
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
