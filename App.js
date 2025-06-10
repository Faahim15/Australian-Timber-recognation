import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "./global.css";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LetsGetStartedScreen from "./screens/WelcomeScreen/LetsGetStartedScreen";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import ScannerScreen from "./screens/WelcomeScreen/ScannerScreen";
import CreateAccountScreen from "./screens/WelcomeScreen/CreateAccountScreen";
import { NavigationContainer } from "@react-navigation/native";
import LogInScreen from "./screens/AuthScreens/LogInScreen";
import SignUpScreen from "./screens/AuthScreens/SignUpScreen";
import OtpVerificationInput from "./components/authentication/OtpVerificationInput";
import PasswordRecoveryScreen from "./screens/AuthScreens/PasswordRecoveryScreen";
import OtpVerificationScreen from "./screens/AuthScreens/OtpVerificationScreen";
import PasswordResetScreen from "./screens/AuthScreens/PasswordResetScreen";
import SetPasswordScreen from "./screens/AuthScreens/SetPasswordScreen";
import ResetSuccess from "./screens/AuthScreens/ResetSuccess";
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
        <Stack.Screen
          name="GetStarted"
          component={LetsGetStartedScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="continue"
          component={ScannerScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CreateAccountScreen"
          component={CreateAccountScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PasswordRecoveryScreen"
          component={PasswordRecoveryScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OtpVerificationScreen"
          component={OtpVerificationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PasswordResetScreen"
          component={PasswordResetScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetSuccess"
          component={ResetSuccess}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
