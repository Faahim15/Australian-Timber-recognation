import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "./global.css";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LetsGetStartedScreen from "./screens/WelcomeScreen/LetsGetStartedScreen";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import ScannerScreen from "./screens/WelcomeScreen/ScannerScreen";
import CreateAccountScreen from "./screens/WelcomeScreen/CreateAccountScreen";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="GetStarted" component={LetsGetStartedScreen} />
        <Stack.Screen name="continue" component={ScannerScreen} />
        <Stack.Screen
          name="CreateAccountScreen"
          component={CreateAccountScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
