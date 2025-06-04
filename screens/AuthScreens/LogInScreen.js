import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import {
  scale,
  verticalScale,
} from "../../components/responsiveness/Responsive";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import Checkbox from "expo-checkbox";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  LoginTitle,
  SkipButton,
} from "../../components/authentication/CustomSignNdLogIn";
import CutomButton from "../../components/CutomButton";
import SignUpText from "../../components/authentication/SignUpText";
import ContinueWdGogleBtn from "../../components/authentication/ContinueWdGogleBtn";

export default function LogInScreen() {
  const [secureText, setSecureText] = useState(true);
  const [isChecked, setChecked] = useState(false);
  const logInHandler = () => {
    console.log("test");
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1" edges={["top", "bottom"]}>
        <View className="flex-1 bg-[#FAFDFA]">
          <SkipButton />
          <LoginTitle
            title={"Log in now"}
            subtitle={"Please sign in to continue our app"}
          />
          <TextInput
            style={styles.textInputContainer}
            className="font-poppins"
            placeholder="Enter your email"
          />
          <View style={styles.passwordInputContainer}>
            <TextInput
              className="font-poppins"
              placeholder="password"
              secureTextEntry={secureText}
            />
            <TouchableOpacity
              onPress={() => {
                setSecureText(!secureText);
              }}
            >
              <Ionicons
                style={styles.eyeOffNdOn}
                name={secureText ? "eye-off" : "eye"}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <View style={styles.checkboxContainer}>
              <Pressable onPress={() => setRememberMe(!rememberMe)}>
                <Checkbox
                  value={isChecked}
                  onValueChange={setChecked}
                  style={styles.checkbox}
                />
              </Pressable>
              <Text
                style={styles.rememberMeText}
                className="font-poppins-500medium"
              >
                Remember Me
              </Text>
            </View>
            <View>
              <Text style={styles.forgetPasswordText}>Forget Password?</Text>
            </View>
          </View>
          <CutomButton title="Log In" onPress={logInHandler} />
          <SignUpText text={"Don't have an account?"} buttonText={"Sign up"} />
          <ContinueWdGogleBtn />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  textInputContainer: {
    backgroundColor: "#F7F7F9",
    width: scale(335),
    height: verticalScale(56),
    paddingHorizontal: scale(18),
    paddingVertical: verticalScale(18),
    marginHorizontal: scale(20),
    marginTop: verticalScale(37),
    borderRadius: scale(14),
    fontSize: scale(12),
    lineHeight: verticalScale(20),
    letterSpacing: scale(0),
    color: "#898989",

    // ✅ iOS shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: verticalScale(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: scale(4),
    elevation: scale(4),
  },
  passwordInputContainer: {
    backgroundColor: "#F7F7F9",
    width: scale(335),
    height: verticalScale(56),
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(16),
    borderRadius: scale(14),
    marginHorizontal: scale(20),
    marginTop: verticalScale(24),
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#898989",
    fontSize: scale(12),
    lineHeight: verticalScale(16),
    letterSpacing: scale(0),
    textAlign: "right",

    // ✅ iOS shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: verticalScale(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: scale(4),
    elevation: scale(4),
  },
  eyeOffNdOn: {
    width: scale(24),
    height: verticalScale(24),
    fontSize: scale(24),
  },

  container: {
    flexDirection: "row",
    width: scale(335),
    height: verticalScale(16),
    marginHorizontal: scale(20),
    justifyContent: "space-between",
    marginTop: verticalScale(16),
  },
  checkboxContainer: {
    flexDirection: "row",
    gap: scale(5),
  },
  checkbox: {
    width: scale(14),
    height: scale(14),
    borderWidth: scale(1),
    borderRadius: scale(4),
  },
  rememberMeText: {
    fontSize: scale(14),
    lineHeight: verticalScale(16),
    letterSpacing: 0,
    color: "#3E2723",
  },
  forgetPasswordText: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    lineHeight: verticalScale(16),
    textAlign: "right",
    fontSize: scale(14),
    letterSpacing: scale(0),
    color: "#535353",
    fontFamily: "poppins-400regular",
  },
});
